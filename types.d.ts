/*!
    @e53e04ac/ipp5-backend-batch/types.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Server as HttpServer } from 'node:http';

import { Application as ExpressApplication } from 'express';
import { ErrorRequestHandler as ExpressErrorRequestHandler } from 'express';
import { RequestHandler as ExpressRequestHandler } from 'express';
import { Router as ExpressRouter } from 'express';

import { EventEmitter } from 'event-emitter';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { Ipp5AdlibitumModules } from 'ipp5-adlibitum-modules';
import { Ipp5AdlibitumRouter } from 'ipp5-adlibitum-router';
import { Ipp5AdlibitumServer } from 'ipp5-adlibitum-server';
import { Ipp5BackendBatchEnvMap } from 'ipp5-types';
import { SecretStorage } from 'secret-storage';

export declare type Application = {
    readonly process: Get<NodeJS.Process>;
    readonly env: Get<Ipp5BackendBatchEnvMap>;
    readonly backendMountEntry: Get<FileEntry>;
    readonly backendBatchMountEntry: Get<FileEntry>;
    readonly secretsStorage: Get<SecretStorage<Record<string, string>>>;
    readonly adlibitumModules: Get<Ipp5AdlibitumModules<Ipp5AdlibitumModules.ModuleMap>>;
    readonly adlibitumVariables: Get<Record<string, unknown>>;
    readonly adlibitumEvents: Get<EventEmitter<EventEmitter.EventSpecs>>;
    readonly adlibitumRouter: Get<Ipp5AdlibitumRouter>;
    readonly adlibitumServer: Get<Ipp5AdlibitumServer>;
    readonly healthcheckHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressSlowDown: Get<ExpressRequestHandler>;
    readonly expressRateLimit: Get<ExpressRequestHandler>;
    readonly expressRouter: Get<ExpressRouter>;
    readonly expressNotFound: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressInternalServerError: Get<ExpressErrorRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressApplication: Get<ExpressApplication>;
    readonly httpServer: Get<HttpServer>;
    readonly run: Get<Promise<void>>;
};
