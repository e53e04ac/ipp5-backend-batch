# ipp5-backend-batch

~~~~~ sh
npm install e53e04ac/ipp5-backend-batch
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-backend-batch"]);
  subgraph "dependencies";
    B_0(["async-lock"]);
    B_1(["axios"]);
    B_2(["e53e04ac/event-emitter"]);
    B_3(["express"]);
    B_4(["express-rate-limit"]);
    B_5(["express-slow-down"]);
    B_6(["e53e04ac/file-entry"]);
    B_7(["e53e04ac/file-entry-native"]);
    B_8(["e53e04ac/hold"]);
    B_9(["e53e04ac/ipp5-adlibitum-modules"]);
    B_10(["e53e04ac/ipp5-adlibitum-router"]);
    B_11(["e53e04ac/ipp5-adlibitum-server"]);
    B_12(["joi"]);
    B_13(["jsdom"]);
    B_14(["nodemailer"]);
    B_15(["playwright"]);
    B_16(["e53e04ac/secret-storage"]);
    B_17(["e53e04ac/secret-storage-azure-keyvault-secrets"]);
    B_18(["e53e04ac/time-span"]);
    B_19(["xml2js"]);
  end;
  subgraph "devDependencies";
    B_20(["@types/async-lock"]);
    B_21(["@types/express"]);
    B_22(["@types/express-slow-down"]);
    B_23(["@types/jsdom"]);
    B_24(["@types/node"]);
    B_25(["@types/nodemailer"]);
    B_26(["@types/xml2js"]);
    B_27(["e53e04ac/ipp5-types"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  A --reference--> B_6;
  A --reference--> B_7;
  A --reference--> B_8;
  A --reference--> B_9;
  A --reference--> B_10;
  A --reference--> B_11;
  A --reference--> B_12;
  A --reference--> B_13;
  A --reference--> B_14;
  A --reference--> B_15;
  A --reference--> B_16;
  A --reference--> B_17;
  A --reference--> B_18;
  A --reference--> B_19;
  A --reference--> B_20;
  A --reference--> B_21;
  A --reference--> B_22;
  A --reference--> B_23;
  A --reference--> B_24;
  A --reference--> B_25;
  A --reference--> B_26;
  A --reference--> B_27;
  click B_0 "https://www.npmjs.org/package/async-lock/v/1.4.0";
  click B_1 "https://www.npmjs.org/package/axios/v/1.3.2";
  click B_2 "https://github.com/e53e04ac/event-emitter/tree/964765f7141bb2ab94b8dc1b5c41323a8b8ab1e3";
  click B_3 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_4 "https://www.npmjs.org/package/express-rate-limit/v/6.7.0";
  click B_5 "https://www.npmjs.org/package/express-slow-down/v/1.5.0";
  click B_6 "https://github.com/e53e04ac/file-entry/tree/3121d37092abe3439372f24817a295aa5ed10d7e";
  click B_7 "https://github.com/e53e04ac/file-entry-native/tree/f3bab6d7be77c1e3b2791f82201dd2195639be66";
  click B_8 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_9 "https://github.com/e53e04ac/ipp5-adlibitum-modules/tree/209fe356aa6f2822d1d31020513b459a5e31b146";
  click B_10 "https://github.com/e53e04ac/ipp5-adlibitum-router/tree/07449986d45a4f801b20a600e83b71931e5d072c";
  click B_11 "https://github.com/e53e04ac/ipp5-adlibitum-server/tree/29469488806120f1e93dfa97028f40a445aeafbf";
  click B_12 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_13 "https://www.npmjs.org/package/jsdom/v/21.1.0";
  click B_14 "https://www.npmjs.org/package/nodemailer/v/6.9.1";
  click B_15 "https://www.npmjs.org/package/playwright/v/1.30.0";
  click B_16 "https://github.com/e53e04ac/secret-storage/tree/6f9cece365b7f869b3b79cb475058611e7f758b8";
  click B_17 "https://github.com/e53e04ac/secret-storage-azure-keyvault-secrets/tree/608a0085f2681b0d42256ebed32b7ad6a824b016";
  click B_18 "https://github.com/e53e04ac/time-span/tree/6298721e64b0c6e8b3a0049b301a5660425684ce";
  click B_19 "https://www.npmjs.org/package/xml2js/v/0.4.23";
  click B_20 "https://www.npmjs.org/package/@types/async-lock/v/1.4.0";
  click B_21 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_22 "https://www.npmjs.org/package/@types/express-slow-down/v/1.3.2";
  click B_23 "https://www.npmjs.org/package/@types/jsdom/v/21.1.0";
  click B_24 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_25 "https://www.npmjs.org/package/@types/nodemailer/v/6.4.7";
  click B_26 "https://www.npmjs.org/package/@types/xml2js/v/0.4.11";
  click B_27 "https://github.com/e53e04ac/ipp5-types/tree/cb79884ba1349d4abde21ff64705578d8240dc31";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-backend-batch"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:http"
    D0(["Server"]);
  end;
  subgraph "express"
    D1(["default"]);
    D2(["Router"]);
    D13(["Application"]);
    D14(["ErrorRequestHandler"]);
    D15(["RequestHandler"]);
  end;
  subgraph "express-rate-limit"
    D3(["default"]);
  end;
  subgraph "express-slow-down"
    D4(["default"]);
  end;
  subgraph "joi"
    D5(["default"]);
  end;
  subgraph "event-emitter"
    D6(["EventEmitter"]);
  end;
  subgraph "file-entry-native"
    D7(["FileEntry"]);
  end;
  subgraph "hold"
    D8(["hold"]);
    D17(["Get"]);
  end;
  subgraph "ipp5-adlibitum-modules"
    D9(["Ipp5AdlibitumModules"]);
  end;
  subgraph "ipp5-adlibitum-router"
    D10(["Ipp5AdlibitumRouter"]);
  end;
  subgraph "ipp5-adlibitum-server"
    D11(["Ipp5AdlibitumServer"]);
  end;
  subgraph "secret-storage-azure-keyvault-secrets"
    D12(["SecretStorage"]);
  end;
  subgraph "file-entry"
    D16(["FileEntry"]);
  end;
  subgraph "ipp5-types"
    D18(["Ipp5BackendBatchEnvMap"]);
  end;
  subgraph "secret-storage"
    D19(["SecretStorage"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D6 --import--> C0;
  D7 --import--> C0;
  D8 --import--> C0;
  D9 --import--> C0;
  D10 --import--> C0;
  D11 --import--> C0;
  D12 --import--> C0;
  D0 --import--> C1;
  D13 --import--> C1;
  D14 --import--> C1;
  D15 --import--> C1;
  D2 --import--> C1;
  D6 --import--> C1;
  D16 --import--> C1;
  D17 --import--> C1;
  D9 --import--> C1;
  D10 --import--> C1;
  D11 --import--> C1;
  D18 --import--> C1;
  D19 --import--> C1;
~~~~~
