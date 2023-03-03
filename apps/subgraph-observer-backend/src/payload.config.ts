import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import Links from "./collections/Links";
import { Customers } from "./collections/Customers";

export default buildConfig({
  serverURL: "http://localhost:3000",
  cors: "*",
  csrf: ["*"],
  admin: {
    user: Users.slug,
  },
  collections: [Links, Users, Customers],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [],
  endpoints: [],
});
