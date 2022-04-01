import {
  createServer,
  Model,
  ActiveModelSerializer,
  Response
} from "miragejs";

type Transaction = {
  id: string;
  assetId: string;
  walletId: string;
  assetTypeId: string;
  brokerId: string;
  unitValue: number;
  quantity: number;
  tax: number;
  createdAt: Date;
  updatedAt?: Date;
  createdAtFormatted: string;
  updatedAtFormatted?: string;
};

type AssetType = {
  id: string;
  name: string;
};

type Wallet = {
  id: string;
  name: string;
};

type Broker = {
  id: string;
  name: string;
};

type Asset = {
  id: string;
  name: string;
  symbol: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      transaction: Model.extend<Partial<Transaction>>({}),
      assetType: Model.extend<Partial<AssetType>>({}),
      asset: Model.extend<Partial<Asset>>({}),
      wallet: Model.extend<Partial<Wallet>>({}),
      broker: Model.extend<Partial<Broker>>({}),
    },
    seeds(server) {
      server.create("wallet", { id: "1", name: "Carteira Teste" })
      server.create("broker", { id: "1", name: "XP" })
      server.create("assetType", { id: "1", name: "Ações" })
      server.create("asset", { id: "1", name: "WEGE S.A.", symbol: "WEGE3" })
    },
    routes() {
      this.urlPrefix = 'http://localhost:4000'
      this.namespace = "api";
      this.timing = 750;

      this.get("/assetTypes", function (schema) {
        return schema.all("assetTypes");
      });

      this.get("/wallets", function (schema) {
        return schema.all("wallets");
      });

      this.get("/assets", function (schema) {
        return schema.all("assets");
      });

      this.get("/transactions");

      let newTransactionId = 0
      this.post("/transactions", function (schema, request) {
        let {
          date,
          ...data
        } = JSON.parse(request.requestBody)

        const transaction = schema.create("transaction", {
          id: (newTransactionId++).toString(),
          ...data,
          createdAt: date ? new Date(date) : new Date()
        })

        return transaction
      });

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
