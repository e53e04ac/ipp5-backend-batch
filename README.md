# ipp5-backend-batch

~~~~~ sh
npm install e53e04ac/ipp5-backend-batch
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["async-lock"]);
    B_1(["axios"]);
    B_2(["event-emitter"]);
    B_3(["express"]);
    B_4(["express-rate-limit"]);
    B_5(["express-slow-down"]);
    B_6(["file-entry-native"]);
    B_7(["hold"]);
    B_8(["ipp5-adlibitum-modules"]);
    B_9(["ipp5-adlibitum-router"]);
    B_10(["ipp5-adlibitum-server"]);
    B_11(["ipp5-html-content"]);
    B_12(["ipp5-web-browser"]);
    B_13(["joi"]);
    B_14(["nodemailer"]);
    B_15(["secret-storage-azure-keyvault-secrets"]);
    B_16(["time-span"]);
    B_17(["xml2js"]);
  end;
  subgraph "devDependencies";
    B_18(["@types/async-lock"]);
    B_19(["@types/express"]);
    B_20(["@types/express-slow-down"]);
    B_21(["@types/node"]);
    B_22(["@types/nodemailer"]);
    B_23(["@types/xml2js"]);
    B_24(["file-entry"]);
    B_25(["ipp5-types"]);
    B_26(["secret-storage"]);
  end;
  subgraph "github";
    C_2(["e53e04ac/event-emitter\n1c42c278687d626fd9dbc9da241e899e482bac0d"]);
    C_6(["e53e04ac/file-entry-native\n22984416ba3546fcb5df0a50a450e3d9ec308d5b"]);
    C_7(["e53e04ac/hold\nccd6d335b2be61f30045be782b2129d08a53ac67"]);
    C_8(["e53e04ac/ipp5-adlibitum-modules\n4a675996bb32b43dfc051ee371e8b0ea2c847698"]);
    C_9(["e53e04ac/ipp5-adlibitum-router\na5583216843bcf40ce6319d2a48fe22a3d0e8778"]);
    C_10(["e53e04ac/ipp5-adlibitum-server\na0de4b4c57ec462715de2793bc0c315534a3cddd"]);
    C_11(["e53e04ac/ipp5-html-content\nd16667f0de7bebd593b2284698967daa5bfd2924"]);
    C_12(["e53e04ac/ipp5-web-browser\nfbf04a739770599599ec7e06c317cf46b282c96e"]);
    C_15(["e53e04ac/secret-storage-azure-keyvault-secrets\nbb37af6e0cba0b0611e1ce6f16bf9701f0ca45d1"]);
    C_16(["e53e04ac/time-span\n4a82ecb8ee5d8322fde561f0efa92e3aad933b71"]);
    C_24(["e53e04ac/file-entry\n31d65a68d97f3f8fd6a45b621b8a3d8245aa1e54"]);
    C_25(["e53e04ac/ipp5-types\nebe99d725f05ad1eabec2b37a2c5737becc56480"]);
    C_26(["e53e04ac/secret-storage\n3ddef21a0d0d9c6f25785487e8476e8ef9dfbf52"]);
  end;
  subgraph "npmjs";
    C_0(["async-lock\n1.4.0"]);
    C_1(["axios\n1.3.4"]);
    C_3(["express\n4.18.2"]);
    C_4(["express-rate-limit\n6.7.0"]);
    C_5(["express-slow-down\n1.5.0"]);
    C_13(["joi\n17.8.3"]);
    C_14(["nodemailer\n6.9.1"]);
    C_17(["xml2js\n0.4.23"]);
    C_18(["@types/async-lock\n1.4.0"]);
    C_19(["@types/express\n4.17.17"]);
    C_20(["@types/express-slow-down\n1.3.2"]);
    C_21(["@types/node\n18.14.1"]);
    C_22(["@types/nodemailer\n6.4.7"]);
    C_23(["@types/xml2js\n0.4.11"]);
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
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  B_7 ----> C_7;
  B_8 ----> C_8;
  B_9 ----> C_9;
  B_10 ----> C_10;
  B_11 ----> C_11;
  B_12 ----> C_12;
  B_13 ----> C_13;
  B_14 ----> C_14;
  B_15 ----> C_15;
  B_16 ----> C_16;
  B_17 ----> C_17;
  B_18 ----> C_18;
  B_19 ----> C_19;
  B_20 ----> C_20;
  B_21 ----> C_21;
  B_22 ----> C_22;
  B_23 ----> C_23;
  B_24 ----> C_24;
  B_25 ----> C_25;
  B_26 ----> C_26;
  click C_0 "https://www.npmjs.com/package/async-lock/v/1.4.0";
  click C_1 "https://www.npmjs.com/package/axios/v/1.3.4";
  click C_2 "https://github.com/e53e04ac/event-emitter/tree/1c42c278687d626fd9dbc9da241e899e482bac0d";
  click C_3 "https://www.npmjs.com/package/express/v/4.18.2";
  click C_4 "https://www.npmjs.com/package/express-rate-limit/v/6.7.0";
  click C_5 "https://www.npmjs.com/package/express-slow-down/v/1.5.0";
  click C_6 "https://github.com/e53e04ac/file-entry-native/tree/22984416ba3546fcb5df0a50a450e3d9ec308d5b";
  click C_7 "https://github.com/e53e04ac/hold/tree/ccd6d335b2be61f30045be782b2129d08a53ac67";
  click C_8 "https://github.com/e53e04ac/ipp5-adlibitum-modules/tree/4a675996bb32b43dfc051ee371e8b0ea2c847698";
  click C_9 "https://github.com/e53e04ac/ipp5-adlibitum-router/tree/a5583216843bcf40ce6319d2a48fe22a3d0e8778";
  click C_10 "https://github.com/e53e04ac/ipp5-adlibitum-server/tree/a0de4b4c57ec462715de2793bc0c315534a3cddd";
  click C_11 "https://github.com/e53e04ac/ipp5-html-content/tree/d16667f0de7bebd593b2284698967daa5bfd2924";
  click C_12 "https://github.com/e53e04ac/ipp5-web-browser/tree/fbf04a739770599599ec7e06c317cf46b282c96e";
  click C_13 "https://www.npmjs.com/package/joi/v/17.8.3";
  click C_14 "https://www.npmjs.com/package/nodemailer/v/6.9.1";
  click C_15 "https://github.com/e53e04ac/secret-storage-azure-keyvault-secrets/tree/bb37af6e0cba0b0611e1ce6f16bf9701f0ca45d1";
  click C_16 "https://github.com/e53e04ac/time-span/tree/4a82ecb8ee5d8322fde561f0efa92e3aad933b71";
  click C_17 "https://www.npmjs.com/package/xml2js/v/0.4.23";
  click C_18 "https://www.npmjs.com/package/@types/async-lock/v/1.4.0";
  click C_19 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click C_20 "https://www.npmjs.com/package/@types/express-slow-down/v/1.3.2";
  click C_21 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click C_22 "https://www.npmjs.com/package/@types/nodemailer/v/6.4.7";
  click C_23 "https://www.npmjs.com/package/@types/xml2js/v/0.4.11";
  click C_24 "https://github.com/e53e04ac/file-entry/tree/31d65a68d97f3f8fd6a45b621b8a3d8245aa1e54";
  click C_25 "https://github.com/e53e04ac/ipp5-types/tree/ebe99d725f05ad1eabec2b37a2c5737becc56480";
  click C_26 "https://github.com/e53e04ac/secret-storage/tree/3ddef21a0d0d9c6f25785487e8476e8ef9dfbf52";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-batch";
    E_0(["type Application"]);
  end;
  M["index.d.ts"]
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

~~~~~ mermaid
graph RL;
  M["index.mjs"]
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
