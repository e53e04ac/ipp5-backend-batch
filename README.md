# ipp5-backend-batch

~~~~~ sh
npm install e53e04ac/ipp5-backend-batch
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-backend-batch"]);
  B0(["async-lock"]);
  B1(["axios"]);
  B2(["e53e04ac/event-emitter"]);
  B3(["express"]);
  B4(["express-rate-limit"]);
  B5(["express-slow-down"]);
  B6(["e53e04ac/file-entry"]);
  B7(["e53e04ac/file-entry-native"]);
  B8(["e53e04ac/hold"]);
  B9(["e53e04ac/ipp5-adlibitum-modules"]);
  B10(["e53e04ac/ipp5-adlibitum-router"]);
  B11(["e53e04ac/ipp5-adlibitum-server"]);
  B12(["joi"]);
  B13(["jsdom"]);
  B14(["nodemailer"]);
  B15(["playwright"]);
  B16(["e53e04ac/secret-storage"]);
  B17(["e53e04ac/secret-storage-azure-keyvault-secrets"]);
  B18(["e53e04ac/time-span"]);
  B19(["xml2js"]);
  C0(["@types/async-lock"]);
  C1(["@types/express"]);
  C2(["@types/express-slow-down"]);
  C3(["@types/jsdom"]);
  C4(["@types/node"]);
  C5(["@types/nodemailer"]);
  C6(["@types/xml2js"]);
  C7(["e53e04ac/ipp5-types"]);
  click B2 href "https://github.com/e53e04ac/event-emitter";
  click B6 href "https://github.com/e53e04ac/file-entry";
  click B7 href "https://github.com/e53e04ac/file-entry-native";
  click B8 href "https://github.com/e53e04ac/hold";
  click B9 href "https://github.com/e53e04ac/ipp5-adlibitum-modules";
  click B10 href "https://github.com/e53e04ac/ipp5-adlibitum-router";
  click B11 href "https://github.com/e53e04ac/ipp5-adlibitum-server";
  click B16 href "https://github.com/e53e04ac/secret-storage";
  click B17 href "https://github.com/e53e04ac/secret-storage-azure-keyvault-secrets";
  click B18 href "https://github.com/e53e04ac/time-span";
  click C7 href "https://github.com/e53e04ac/ipp5-types";
  subgraph "e53e04ac/ipp5-backend-batch";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
    B5 --import--> A;
    B6 --import--> A;
    B7 --import--> A;
    B8 --import--> A;
    B9 --import--> A;
    B10 --import--> A;
    B11 --import--> A;
    B12 --import--> A;
    B13 --import--> A;
    B14 --import--> A;
    B15 --import--> A;
    B16 --import--> A;
    B17 --import--> A;
    B18 --import--> A;
    B19 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
    C2 --import--> A;
    C3 --import--> A;
    C4 --import--> A;
    C5 --import--> A;
    C6 --import--> A;
    C7 --import--> A;
  end;
~~~~~
