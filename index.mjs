/*!
    @e53e04ac/ipp5-backend-batch/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { Server as HttpServer } from 'node:http';

import { default as express } from 'express';
import { Router as ExpressRouter } from 'express';
import { default as expressRateLimit } from 'express-rate-limit';
import { default as expressSlowDown } from 'express-slow-down';
import { default as Joi } from 'joi';

import { EventEmitter } from 'event-emitter';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { Ipp5AdlibitumModules } from 'ipp5-adlibitum-modules';
import { Ipp5AdlibitumRouter } from 'ipp5-adlibitum-router';
import { Ipp5AdlibitumServer } from 'ipp5-adlibitum-server';
import { SecretStorage } from 'secret-storage-azure-keyvault-secrets';

/** @type {import('.').Application} */
const app = ({
    process: hold(() => {
        return process;
    }),
    env: hold(() => {
        /** @type {import('joi').ObjectSchema<ReturnType<typeof app['env']>>} */
        const schema = Joi.object().unknown(true).keys({
            TZ: Joi.string().max(100).required(),
            WEBSITES_PORT: Joi.number().integer().min(0).max(65535).default(3000),
            CUSTOM_BACKEND_BATCH_URN: Joi.string().max(100).required(),
            CUSTOM_BACKEND_BATCH_HTTP_PATH_PREFIX: Joi.string().max(100).required(),
            CUSTOM_CONTAINER_BACKEND_MOUNT_PATH: Joi.string().max(100).required(),
            CUSTOM_CONTAINER_BACKEND_BATCH_MOUNT_PATH: Joi.string().max(100).required(),
            CUSTOM_BACKEND_BATCH_VAULT_NAME: Joi.string().max(100).required(),
            CUSTOM_BACKEND_BATCH_ADLIBITUM_CLIENT_URN: Joi.string().max(100).required(),
            CUSTOM_BACKEND_BATCH_ADLIBITUM_SERVER_URN: Joi.string().max(100).required(),
            CUSTOM_BACKEND_BATCH_ADLIBITUM_CLIENT_PUBLIC_KEY: Joi.string().max(1000).required(),
            CUSTOM_EXPRESS_ENV: Joi.string().allow('development', 'production').required(),
            CUSTOM_EXPRESS_SUBDOMAIN_OFFSET: Joi.number().integer().min(2).required(),
            CUSTOM_EXPRESS_TRUST_PROXY: Joi.string().max(100).required(),
        });
        const validationResult = schema.validate(app.process().env);
        if (validationResult.error != null || validationResult.value == null) {
            throw new Error();
        }
        return validationResult.value;
    }),
    backendMountEntry: hold(() => {
        return FileEntry(app.env().CUSTOM_CONTAINER_BACKEND_MOUNT_PATH);
    }),
    backendBatchMountEntry: hold(() => {
        return FileEntry(app.env().CUSTOM_CONTAINER_BACKEND_BATCH_MOUNT_PATH);
    }),
    secretStorage: hold(() => {
        return SecretStorage.fromDefaultCredential({
            vaultName: app.env().CUSTOM_BACKEND_BATCH_VAULT_NAME,
            deserialize: ((value, key) => {
                return JSON.parse(value);
            }),
        });
    }),
    adlibitumModules: hold(() => {
        return Ipp5AdlibitumModules({});
    }),
    adlibitumVariables: hold(() => {
        return {};
    }),
    adlibitumEvents: hold(() => {
        return EventEmitter({});
    }),
    adlibitumRouter: hold(() => {
        return Ipp5AdlibitumRouter({});
    }),
    adlibitumServer: hold(() => {
        return Ipp5AdlibitumServer({
            clientUrn: app.env().CUSTOM_BACKEND_BATCH_ADLIBITUM_CLIENT_URN,
            serverUrn: app.env().CUSTOM_BACKEND_BATCH_ADLIBITUM_SERVER_URN,
            clientPublicKey: app.env().CUSTOM_BACKEND_BATCH_ADLIBITUM_CLIENT_PUBLIC_KEY,
            httpRequestBodyMaxSize: 32 * 1024 * 1024,
            eval: (async (f) => {
                return eval(f);
            }),
            u: (async () => {
                return { app };
            }),
        });
    }),
    healthcheckHandler: hold(() => {
        return ((req, res, next) => {
            res.status(200).type('text/plain; charset=utf-8').end('200 OK');
        });
    }),
    expressSlowDown: hold(() => {
        return expressSlowDown({
            windowMs: 60_000,
            delayAfter: 60,
            delayMs: 1_000,
            maxDelayMs: 10_000,
            skipFailedRequests: false,
            skipSuccessfulRequests: true,
            headers: false,
            keyGenerator: ((req, res) => {
                return req.ip.split(/(:(\d+)?)?$/)[0];
            }),
        });
    }),
    expressRateLimit: hold(() => {
        return expressRateLimit({
            windowMs: 60_000,
            max: 50,
            message: undefined,
            statusCode: undefined,
            legacyHeaders: false,
            standardHeaders: false,
            requestPropertyName: 'rateLimit',
            skipFailedRequests: false,
            skipSuccessfulRequests: true,
            keyGenerator: ((req, res) => {
                return req.ip.split(/(:(\d+)?)?$/)[0];
            }),
            handler: ((req, res) => {
                res.status(429).type('text/plain; charset=utf-8').end('429 Too Many Requests');
            }),
        });
    }),
    expressNotFound: hold(() => {
        return ((req, res, next) => {
            res.status(403).type('text/plain; charset=utf-8').end('403 Forbidden');
        });
    }),
    expressInternalServerError: hold(() => {
        return ((err, req, res, next) => {
            console.error(err);
            res.status(500).type('text/plain; charset=utf-8').end('500 Internal Server Error' + [
                '',
                '---------- typeof error ----------',
                JSON.stringify(typeof err),
                '---------- Object.getPrototypeOf(error) ----------',
                JSON.stringify(Object.getPrototypeOf(err)),
                '---------- Object.getOwnPropertyNames(error) ----------',
                JSON.stringify(Object.getOwnPropertyNames(err)),
                '---------- Object.getOwnPropertySymbols(error) ----------',
                JSON.stringify(Object.getOwnPropertySymbols(err)),
                '---------- String(error) ----------',
                String(err),
                '---------- JSON.stringify(error) ----------',
                JSON.stringify(err),
                '---------- error.toString() ----------',
                err?.toString?.(),
                '---------- error.valueOf() ----------',
                err?.valueOf?.(),
                '---------- error.cause ----------',
                err?.cause,
                '---------- error.code ----------',
                err?.code,
                '---------- error.message ----------',
                err?.message,
                '---------- error.stack ----------',
                err?.stack,
                '---------- END ----------',
            ].join('\r\n\r\n'));
        });
    }),
    expressRouter: hold(() => {
        const it = ExpressRouter({
            caseSensitive: false,
            mergeParams: false,
            strict: false,
        });
        it.get('/healthcheck', app.healthcheckHandler());
        it.use(app.expressSlowDown());
        it.use(app.expressRateLimit());
        it.use(app.adlibitumRouter().expressRequestHandler());
        it.use(app.adlibitumServer().expressRouter());
        return it;
    }),
    expressApplication: hold(() => {
        const it = express();
        it.set('case sensitive routing', false);
        it.set('env', app.env().CUSTOM_EXPRESS_ENV);
        it.set('etag', 'weak');
        it.set('jsonp callback name', null);
        it.set('json escape', true);
        it.set('json replacer', null);
        it.set('json spaces', null);
        it.set('query parser', 'extended');
        it.set('strict routing', false);
        it.set('subdomain offset', app.env().CUSTOM_EXPRESS_SUBDOMAIN_OFFSET);
        it.set('trust proxy', app.env().CUSTOM_EXPRESS_TRUST_PROXY);
        it.set('views', null);
        it.set('view cache', null);
        it.set('view engine', null);
        it.set('x-powered-by', false);
        it.use(app.env().CUSTOM_BACKEND_BATCH_HTTP_PATH_PREFIX, app.expressRouter());
        it.use(app.expressNotFound());
        it.use(app.expressInternalServerError());
        return it;
    }),
    httpServer: hold(() => {
        const it = new HttpServer();
        it.on('request', app.expressApplication());
        return it;
    }),
    run: hold(async () => {
        await new Promise((resolve) => {
            app.httpServer().listen(app.env().WEBSITES_PORT, () => {
                resolve(undefined);
            });
        });
    }),
});

await app.run();
