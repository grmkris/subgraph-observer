import { CollectionConfig } from "payload/types";
import { allowAll, isAdminOrCreatedBy } from "../accessControlHelpers";
import payload from "payload";
import { ethers } from "ethers";

const Links: CollectionConfig = {
  slug: "links",
  admin: {
    useAsTitle: "id",
  },
  access: {
    create: ({ req }) => true,
    read: allowAll,
    update: isAdminOrCreatedBy,
    delete: isAdminOrCreatedBy,
  },
  fields: [
    {
      name: "content",
      type: "json",
    },
    {
      name: "signature",
      type: "text",
    },
    {
      name: "address",
      type: "text",
    },
    {
      type: "relationship",
      name: "customer",
      relationTo: "customers",
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ req, data, operation, originalDoc }) => {
        // on create check if signature (hash of content) matches with provided ethereum address, check using ethers library
        // if not, throw error
        // if yes, check if customer exists with this address
        // if yes, add customer id to args
        // if no, create customer with this address and add customer id to args
        if (operation === "create") {
          console.log("args", data);
          const hashed = ethers.utils.keccak256(Buffer.from(data.content));
          const recovered = ethers.utils.verifyMessage(hashed, data.signature);
          if (recovered !== data.address) {
            throw new Error("Signature does not match address");
          }
          const customer = await payload.find({
            collection: "customers",
            where: {
              wallet: data.address,
            },
          });
          console.log("customer", customer);
          if (customer) {
            data.customer = customer.docs[0].id;
          }
          if (!customer) {
            console.log("no customer found, creating one");
            const newCustomer = await payload.create({
              collection: "customers",
              data: {
                wallet: data.address,
                role: "customer",
              },
            });
            console.log("new customer", newCustomer);
            data.customer = newCustomer.id;
          }
          return data;
        }
      },
    ],
  },
};

export default Links;
