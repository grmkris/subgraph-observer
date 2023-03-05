import { Field } from "payload/types";

export const isAdminOrCreatedBy = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === "admin") {
    return true;
  }
  // Scenario #2 - Allow only documents with the current user set to the 'createdBy' field
  if (user) {
    // Will return access for only documents that were created by the current user
    return {
      createdBy: {
        equals: user.id,
      },
    };
  }
  // Scenario #3 - Disallow all others
  return false;
};

export const isAuthenticated = ({ req: { user } }) => {
  return user ? true : false;
};

export const isAdministrator = ({ req: { user } }) => {
  return user && user.role === "admin" ? true : false;
};

const roles = ["admin", "customer"] as const;
export const getRoleField = (role: (typeof roles)[number]): Field => {
  return {
    name: "role",
    type: "select",
    required: true,
    options: ["admin", "customer"],
    access: {
      create: isAdministrator,
      update: isAdministrator,
    },
    defaultValue: role,
  };
};

export const allowAll = () => true;
