import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import Links from "./collections/Links";
import { Customers } from "./collections/Customers";
require('dotenv').config();

export default buildConfig({
  serverURL: "https://subgraph-observer-production.up.railway.app",
  debug: true,
  cors: "*",
  rateLimit: {
    trustProxy: true,
  },
  csrf: ["*"],
  admin: {
    user: Users.slug,
  },
  collections: [Links, Users, Customers],
  typescript: {
    outputFile: path.resolve(__dirname + "/generated", "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname + "/generated", "generated-schema.graphql"),
  },
  plugins: [],
  endpoints: [],
});
