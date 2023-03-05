import { CollectionConfig } from "payload/types";
import {
  getRoleField,
  isAdministrator,
  isAdminOrCreatedBy,
} from "../accessControlHelpers";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: isAdministrator,
    read: () => true,
    update: isAdminOrCreatedBy,
    delete: isAdministrator,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    getRoleField("admin"),
  ],
};

export default Users;
