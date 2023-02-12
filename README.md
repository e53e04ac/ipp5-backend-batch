# ipp5-backend-batch

~~~~~ sh
npm install e53e04ac/ipp5-backend-batch
~~~~~

~~~~~ mjs
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["async-lock"]);
    B_1(["axios"]);
    B_2(["e53e04ac/event-emitter"]);
    B_3(["express"]);
    B_4(["express-rate-limit"]);
    B_5(["express-slow-down"]);
    B_6(["e53e04ac/file-entry-native"]);
    B_7(["e53e04ac/hold"]);
    B_8(["e53e04ac/ipp5-adlibitum-modules"]);
    B_9(["e53e04ac/ipp5-adlibitum-router"]);
    B_10(["e53e04ac/ipp5-adlibitum-server"]);
    B_11(["joi"]);
    B_12(["jsdom"]);
    B_13(["nodemailer"]);
    B_14(["playwright"]);
    B_15(["e53e04ac/secret-storage-azure-keyvault-secrets"]);
    B_16(["e53e04ac/time-span"]);
    B_17(["xml2js"]);
  end;
  subgraph "devDependencies";
    B_18(["@types/async-lock"]);
    B_19(["@types/express"]);
    B_20(["@types/express-slow-down"]);
    B_21(["@types/jsdom"]);
    B_22(["@types/node"]);
    B_23(["@types/nodemailer"]);
    B_24(["@types/xml2js"]);
    B_25(["e53e04ac/file-entry"]);
    B_26(["e53e04ac/ipp5-types"]);
    B_27(["e53e04ac/secret-storage"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  A ----> B_8;
  A ----> B_9;
  A ----> B_10;
  A ----> B_11;
  A ----> B_12;
  A ----> B_13;
  A ----> B_14;
  A ----> B_15;
  A ----> B_16;
  A ----> B_17;
  A ----> B_18;
  A ----> B_19;
  A ----> B_20;
  A ----> B_21;
  A ----> B_22;
  A ----> B_23;
  A ----> B_24;
  A ----> B_25;
  A ----> B_26;
  A ----> B_27;
  click B_0 "https://www.npmjs.org/package/async-lock/v/1.4.0";
  click B_1 "https://www.npmjs.org/package/axios/v/1.3.2";
  click B_2 "https://github.com/e53e04ac/event-emitter/tree/58fd3772aa6977c80111d1af5425c38551c0da3e";
  click B_3 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_4 "https://www.npmjs.org/package/express-rate-limit/v/6.7.0";
  click B_5 "https://www.npmjs.org/package/express-slow-down/v/1.5.0";
  click B_6 "https://github.com/e53e04ac/file-entry-native/tree/0e0f87721b3753446d291c2ed8bd1755a851d321";
  click B_7 "https://github.com/e53e04ac/hold/tree/5dd6f94b8ecd94f98219a7afae52320676380c27";
  click B_8 "https://github.com/e53e04ac/ipp5-adlibitum-modules/tree/883230e35ff7729c9d67bc9e8094417b1718546c";
  click B_9 "https://github.com/e53e04ac/ipp5-adlibitum-router/tree/c91c828a50cdb2a9065ccae506b4a6aee712f03f";
  click B_10 "https://github.com/e53e04ac/ipp5-adlibitum-server/tree/1e8f48512b0475ee4bc01291ed6c0860c7c4456f";
  click B_11 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_12 "https://www.npmjs.org/package/jsdom/v/21.1.0";
  click B_13 "https://www.npmjs.org/package/nodemailer/v/6.9.1";
  click B_14 "https://www.npmjs.org/package/playwright/v/1.30.0";
  click B_15 "https://github.com/e53e04ac/secret-storage-azure-keyvault-secrets/tree/e6c31ff22910d3e4b4f1e2b8ec82e35e8b2090cb";
  click B_16 "https://github.com/e53e04ac/time-span/tree/f565e9321345f2602ab38827421d7d7f7f4e40c5";
  click B_17 "https://www.npmjs.org/package/xml2js/v/0.4.23";
  click B_18 "https://www.npmjs.org/package/@types/async-lock/v/1.4.0";
  click B_19 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_20 "https://www.npmjs.org/package/@types/express-slow-down/v/1.3.2";
  click B_21 "https://www.npmjs.org/package/@types/jsdom/v/21.1.0";
  click B_22 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_23 "https://www.npmjs.org/package/@types/nodemailer/v/6.4.7";
  click B_24 "https://www.npmjs.org/package/@types/xml2js/v/0.4.11";
  click B_25 "https://github.com/e53e04ac/file-entry/tree/77cbd9d0db1e4a74fd5af363999096d9172bd83d";
  click B_26 "https://github.com/e53e04ac/ipp5-types/tree/f0ef220175398bc3bab4a468906a94e8446fc893";
  click B_27 "https://github.com/e53e04ac/secret-storage/tree/5e690a8fd150c081a00d6383a61f52afe079abf8";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-batch";
  end;
  M(["index.mjs"])
  subgraph "node:http";
    I_0_0(["Server"]);
  end;
  subgraph "express";
    I_1_0(["default"]);
    I_1_1(["Router"]);
  end;
  subgraph "express-rate-limit";
    I_2_0(["default"]);
  end;
  subgraph "express-slow-down";
    I_3_0(["default"]);
  end;
  subgraph "joi";
    I_4_0(["default"]);
  end;
  subgraph "event-emitter";
    I_5_0(["EventEmitter"]);
  end;
  subgraph "file-entry-native";
    I_6_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_7_0(["hold"]);
  end;
  subgraph "ipp5-adlibitum-modules";
    I_8_0(["Ipp5AdlibitumModules"]);
  end;
  subgraph "ipp5-adlibitum-router";
    I_9_0(["Ipp5AdlibitumRouter"]);
  end;
  subgraph "ipp5-adlibitum-server";
    I_10_0(["Ipp5AdlibitumServer"]);
  end;
  subgraph "secret-storage-azure-keyvault-secrets";
    I_11_0(["SecretStorage"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
  M ----> I_8_0;
  M ----> I_9_0;
  M ----> I_10_0;
  M ----> I_11_0;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-batch";
    E_0(["type Application"]);
  end;
  M(["index.d.ts"])
  subgraph "node:http";
    I_0_0(["Server"]);
  end;
  subgraph "express";
    I_1_0(["Application"]);
    I_1_1(["ErrorRequestHandler"]);
    I_1_2(["RequestHandler"]);
    I_1_3(["Router"]);
  end;
  subgraph "event-emitter";
    I_2_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    I_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_4_0(["Get"]);
  end;
  subgraph "ipp5-adlibitum-modules";
    I_5_0(["Ipp5AdlibitumModules"]);
  end;
  subgraph "ipp5-adlibitum-router";
    I_6_0(["Ipp5AdlibitumRouter"]);
  end;
  subgraph "ipp5-adlibitum-server";
    I_7_0(["Ipp5AdlibitumServer"]);
  end;
  subgraph "ipp5-types";
    I_8_0(["Ipp5BackendBatchEnvMap"]);
  end;
  subgraph "secret-storage";
    I_9_0(["SecretStorage"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_1_2;
  M ----> I_1_3;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
  M ----> I_8_0;
  M ----> I_9_0;
  E_0 ----> M;
~~~~~
