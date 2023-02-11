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
  click B_2 "https://github.com/e53e04ac/event-emitter/tree/289e6320381f1be4d43177944eca0a12b665c4f7";
  click B_3 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_4 "https://www.npmjs.org/package/express-rate-limit/v/6.7.0";
  click B_5 "https://www.npmjs.org/package/express-slow-down/v/1.5.0";
  click B_6 "https://github.com/e53e04ac/file-entry-native/tree/4bbe53dfa25202c8fb2a5865ea3b35a7eab10b07";
  click B_7 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_8 "https://github.com/e53e04ac/ipp5-adlibitum-modules/tree/6cc04927ff86ba3f9c866a2445b1369d8957ac38";
  click B_9 "https://github.com/e53e04ac/ipp5-adlibitum-router/tree/21f2faf21ed0ab79e5784be601d549a8ea6935b2";
  click B_10 "https://github.com/e53e04ac/ipp5-adlibitum-server/tree/5c8e9131e651f370c03dfbdfd2faca16daa437aa";
  click B_11 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_12 "https://www.npmjs.org/package/jsdom/v/21.1.0";
  click B_13 "https://www.npmjs.org/package/nodemailer/v/6.9.1";
  click B_14 "https://www.npmjs.org/package/playwright/v/1.30.0";
  click B_15 "https://github.com/e53e04ac/secret-storage-azure-keyvault-secrets/tree/e5b5844bca00805b552bbe03e26135654123f4df";
  click B_16 "https://github.com/e53e04ac/time-span/tree/acd4df3ab3bb21aadb51a1b99c8528d2dc7cd639";
  click B_17 "https://www.npmjs.org/package/xml2js/v/0.4.23";
  click B_18 "https://www.npmjs.org/package/@types/async-lock/v/1.4.0";
  click B_19 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_20 "https://www.npmjs.org/package/@types/express-slow-down/v/1.3.2";
  click B_21 "https://www.npmjs.org/package/@types/jsdom/v/21.1.0";
  click B_22 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_23 "https://www.npmjs.org/package/@types/nodemailer/v/6.4.7";
  click B_24 "https://www.npmjs.org/package/@types/xml2js/v/0.4.11";
  click B_25 "https://github.com/e53e04ac/file-entry/tree/923119d07163b8f91b6138367a04760041225a06";
  click B_26 "https://github.com/e53e04ac/ipp5-types/tree/f66ddbd49c9601df9aea4cefdbb3e5c3e65427f5";
  click B_27 "https://github.com/e53e04ac/secret-storage/tree/e59ea9ea05d50d9940c5477c7d04106a73a37fa4";
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
