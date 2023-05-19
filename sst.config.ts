import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStacks";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack.js";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack).stack(AuthStack);
  },
} satisfies SSTConfig;