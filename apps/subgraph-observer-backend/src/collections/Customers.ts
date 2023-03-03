import { CollectionConfig } from "payload/types";
import { getRoleField, isAdminOrCreatedBy } from "../accessControlHelpers";

export const Customers: CollectionConfig = {
  slug: "customers",
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
    read: isAdminOrCreatedBy,
    update: isAdminOrCreatedBy,
    delete: isAdminOrCreatedBy,
  },
  fields: [
    getRoleField("customer"),
    { name: "wallet", type: "text", unique: true, required: true },
  ],
};
