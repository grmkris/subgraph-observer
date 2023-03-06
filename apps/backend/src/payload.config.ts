import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import Links from "./collections/Links";
import { Customers } from "./collections/Customers";

export default buildConfig({
  serverURL: process.env.PAYLOAD_SERVER_URL || "http://localhost:3000",
  debug: true,
  cors: "*",
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
