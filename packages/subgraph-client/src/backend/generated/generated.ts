import { GraphQLClient } from "graphql-request";
// @ts-ignore
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  JSON: any;
  JSONObject: any;
};

export type Access = {
  __typename?: "Access";
  canAccessAdmin: Scalars["Boolean"];
  customers?: Maybe<CustomersAccess>;
  links?: Maybe<LinksAccess>;
  users?: Maybe<UsersAccess>;
};

export type Customer = {
  __typename?: "Customer";
  createdAt: Scalars["DateTime"];
  id?: Maybe<Scalars["String"]>;
  role: Customer_Role;
  updatedAt: Scalars["DateTime"];
  wallet: Scalars["String"];
};

export enum CustomerUpdate_Role_MutationInput {
  Admin = "admin",
  Customer = "customer",
}

export type Customer_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Customer_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  equals?: InputMaybe<Scalars["JSON"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  not_equals?: InputMaybe<Scalars["JSON"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
};

export enum Customer_Role {
  Admin = "admin",
  Customer = "customer",
}

export enum Customer_Role_Input {
  Admin = "admin",
  Customer = "customer",
}

export enum Customer_Role_MutationInput {
  Admin = "admin",
  Customer = "customer",
}

export type Customer_Role_Operator = {
  all?: InputMaybe<Array<InputMaybe<Customer_Role_Input>>>;
  equals?: InputMaybe<Customer_Role_Input>;
  in?: InputMaybe<Array<InputMaybe<Customer_Role_Input>>>;
  not_equals?: InputMaybe<Customer_Role_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Customer_Role_Input>>>;
};

export type Customer_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Customer_Wallet_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Customer_Where = {
  AND?: InputMaybe<Array<InputMaybe<Customer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Customer_Where_Or>>>;
  createdAt?: InputMaybe<Customer_CreatedAt_Operator>;
  id?: InputMaybe<Customer_Id_Operator>;
  role?: InputMaybe<Customer_Role_Operator>;
  updatedAt?: InputMaybe<Customer_UpdatedAt_Operator>;
  wallet?: InputMaybe<Customer_Wallet_Operator>;
};

export type Customer_Where_And = {
  createdAt?: InputMaybe<Customer_CreatedAt_Operator>;
  id?: InputMaybe<Customer_Id_Operator>;
  role?: InputMaybe<Customer_Role_Operator>;
  updatedAt?: InputMaybe<Customer_UpdatedAt_Operator>;
  wallet?: InputMaybe<Customer_Wallet_Operator>;
};

export type Customer_Where_Or = {
  createdAt?: InputMaybe<Customer_CreatedAt_Operator>;
  id?: InputMaybe<Customer_Id_Operator>;
  role?: InputMaybe<Customer_Role_Operator>;
  updatedAt?: InputMaybe<Customer_UpdatedAt_Operator>;
  wallet?: InputMaybe<Customer_Wallet_Operator>;
};

export type Customers = {
  __typename?: "Customers";
  docs?: Maybe<Array<Maybe<Customer>>>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPrevPage?: Maybe<Scalars["Boolean"]>;
  limit?: Maybe<Scalars["Int"]>;
  nextPage?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  pagingCounter?: Maybe<Scalars["Int"]>;
  prevPage?: Maybe<Scalars["Int"]>;
  totalDocs?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
};

export type CustomersCreateAccess = {
  __typename?: "CustomersCreateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type CustomersCreateDocAccess = {
  __typename?: "CustomersCreateDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type CustomersDeleteAccess = {
  __typename?: "CustomersDeleteAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type CustomersDeleteDocAccess = {
  __typename?: "CustomersDeleteDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type CustomersDocAccessFields = {
  __typename?: "CustomersDocAccessFields";
  role?: Maybe<CustomersDocAccessFields_Role>;
  wallet?: Maybe<CustomersDocAccessFields_Wallet>;
};

export type CustomersDocAccessFields_Role = {
  __typename?: "CustomersDocAccessFields_role";
  create?: Maybe<CustomersDocAccessFields_Role_Create>;
  delete?: Maybe<CustomersDocAccessFields_Role_Delete>;
  read?: Maybe<CustomersDocAccessFields_Role_Read>;
  update?: Maybe<CustomersDocAccessFields_Role_Update>;
};

export type CustomersDocAccessFields_Role_Create = {
  __typename?: "CustomersDocAccessFields_role_Create";
  permission: Scalars["Boolean"];
};

export type CustomersDocAccessFields_Role_Delete = {
  __typename?: "CustomersDocAccessFields_role_Delete";
  permission: Scalars["Boolean"];
};

export type CustomersDocAccessFields_Role_Read = {
  __typename?: "CustomersDocAccessFields_role_Read";
  permission: Scalars["Boolean"];
};

export type CustomersDocAccessFields_Role_Update = {
  __typename?: "CustomersDocAccessFields_role_Update";
  permission: Scalars["Boolean"];
};

export type CustomersDocAccessFields_Wallet = {
  __typename?: "CustomersDocAccessFields_wallet";
  create?: Maybe<CustomersDocAccessFields_Wallet_Create>;
  delete?: Maybe<CustomersDocAccessFields_Wallet_Delete>;
  read?: Maybe<CustomersDocAccessFields_Wallet_Read>;
  update?: Maybe<CustomersDocAccessFields_Wallet_Update>;
};

export type CustomersDocAccessFields_Wallet_Create = {
  __typename?: "CustomersDocAccessFields_wallet_Create";
  permission: Scalars["Boolean"];
};

export type CustomersDocAccessFields_Wallet_Delete = {
  __typename?: "CustomersDocAccessFields_wallet_Delete";
  permission: Scalars["Boolean"];
};

export type CustomersDocAccessFields_Wallet_Read = {
  __typename?: "CustomersDocAccessFields_wallet_Read";
  permission: Scalars["Boolean"];
};

export type CustomersDocAccessFields_Wallet_Update = {
  __typename?: "CustomersDocAccessFields_wallet_Update";
  permission: Scalars["Boolean"];
};

export type CustomersFields = {
  __typename?: "CustomersFields";
  role?: Maybe<CustomersFields_Role>;
  wallet?: Maybe<CustomersFields_Wallet>;
};

export type CustomersFields_Role = {
  __typename?: "CustomersFields_role";
  create?: Maybe<CustomersFields_Role_Create>;
  delete?: Maybe<CustomersFields_Role_Delete>;
  read?: Maybe<CustomersFields_Role_Read>;
  update?: Maybe<CustomersFields_Role_Update>;
};

export type CustomersFields_Role_Create = {
  __typename?: "CustomersFields_role_Create";
  permission: Scalars["Boolean"];
};

export type CustomersFields_Role_Delete = {
  __typename?: "CustomersFields_role_Delete";
  permission: Scalars["Boolean"];
};

export type CustomersFields_Role_Read = {
  __typename?: "CustomersFields_role_Read";
  permission: Scalars["Boolean"];
};

export type CustomersFields_Role_Update = {
  __typename?: "CustomersFields_role_Update";
  permission: Scalars["Boolean"];
};

export type CustomersFields_Wallet = {
  __typename?: "CustomersFields_wallet";
  create?: Maybe<CustomersFields_Wallet_Create>;
  delete?: Maybe<CustomersFields_Wallet_Delete>;
  read?: Maybe<CustomersFields_Wallet_Read>;
  update?: Maybe<CustomersFields_Wallet_Update>;
};

export type CustomersFields_Wallet_Create = {
  __typename?: "CustomersFields_wallet_Create";
  permission: Scalars["Boolean"];
};

export type CustomersFields_Wallet_Delete = {
  __typename?: "CustomersFields_wallet_Delete";
  permission: Scalars["Boolean"];
};

export type CustomersFields_Wallet_Read = {
  __typename?: "CustomersFields_wallet_Read";
  permission: Scalars["Boolean"];
};

export type CustomersFields_Wallet_Update = {
  __typename?: "CustomersFields_wallet_Update";
  permission: Scalars["Boolean"];
};

export type CustomersReadAccess = {
  __typename?: "CustomersReadAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type CustomersReadDocAccess = {
  __typename?: "CustomersReadDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type CustomersUpdateAccess = {
  __typename?: "CustomersUpdateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type CustomersUpdateDocAccess = {
  __typename?: "CustomersUpdateDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type Link = {
  __typename?: "Link";
  address?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["JSON"]>;
  createdAt: Scalars["DateTime"];
  customer?: Maybe<Customer>;
  id?: Maybe<Scalars["String"]>;
  signature?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type Link_Address_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Link_Content_Operator = {
  contains?: InputMaybe<Scalars["JSON"]>;
  equals?: InputMaybe<Scalars["JSON"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["JSON"]>;
  not_equals?: InputMaybe<Scalars["JSON"]>;
};

export type Link_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Link_Customer_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  not_equals?: InputMaybe<Scalars["String"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Link_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  equals?: InputMaybe<Scalars["JSON"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  not_equals?: InputMaybe<Scalars["JSON"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
};

export type Link_Signature_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Link_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Link_Where = {
  AND?: InputMaybe<Array<InputMaybe<Link_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Link_Where_Or>>>;
  address?: InputMaybe<Link_Address_Operator>;
  content?: InputMaybe<Link_Content_Operator>;
  createdAt?: InputMaybe<Link_CreatedAt_Operator>;
  customer?: InputMaybe<Link_Customer_Operator>;
  id?: InputMaybe<Link_Id_Operator>;
  signature?: InputMaybe<Link_Signature_Operator>;
  updatedAt?: InputMaybe<Link_UpdatedAt_Operator>;
};

export type Link_Where_And = {
  address?: InputMaybe<Link_Address_Operator>;
  content?: InputMaybe<Link_Content_Operator>;
  createdAt?: InputMaybe<Link_CreatedAt_Operator>;
  customer?: InputMaybe<Link_Customer_Operator>;
  id?: InputMaybe<Link_Id_Operator>;
  signature?: InputMaybe<Link_Signature_Operator>;
  updatedAt?: InputMaybe<Link_UpdatedAt_Operator>;
};

export type Link_Where_Or = {
  address?: InputMaybe<Link_Address_Operator>;
  content?: InputMaybe<Link_Content_Operator>;
  createdAt?: InputMaybe<Link_CreatedAt_Operator>;
  customer?: InputMaybe<Link_Customer_Operator>;
  id?: InputMaybe<Link_Id_Operator>;
  signature?: InputMaybe<Link_Signature_Operator>;
  updatedAt?: InputMaybe<Link_UpdatedAt_Operator>;
};

export type Links = {
  __typename?: "Links";
  docs?: Maybe<Array<Maybe<Link>>>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPrevPage?: Maybe<Scalars["Boolean"]>;
  limit?: Maybe<Scalars["Int"]>;
  nextPage?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  pagingCounter?: Maybe<Scalars["Int"]>;
  prevPage?: Maybe<Scalars["Int"]>;
  totalDocs?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
};

export type LinksCreateAccess = {
  __typename?: "LinksCreateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type LinksCreateDocAccess = {
  __typename?: "LinksCreateDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type LinksDeleteAccess = {
  __typename?: "LinksDeleteAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type LinksDeleteDocAccess = {
  __typename?: "LinksDeleteDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type LinksDocAccessFields = {
  __typename?: "LinksDocAccessFields";
  address?: Maybe<LinksDocAccessFields_Address>;
  content?: Maybe<LinksDocAccessFields_Content>;
  customer?: Maybe<LinksDocAccessFields_Customer>;
  signature?: Maybe<LinksDocAccessFields_Signature>;
};

export type LinksDocAccessFields_Address = {
  __typename?: "LinksDocAccessFields_address";
  create?: Maybe<LinksDocAccessFields_Address_Create>;
  delete?: Maybe<LinksDocAccessFields_Address_Delete>;
  read?: Maybe<LinksDocAccessFields_Address_Read>;
  update?: Maybe<LinksDocAccessFields_Address_Update>;
};

export type LinksDocAccessFields_Address_Create = {
  __typename?: "LinksDocAccessFields_address_Create";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Address_Delete = {
  __typename?: "LinksDocAccessFields_address_Delete";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Address_Read = {
  __typename?: "LinksDocAccessFields_address_Read";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Address_Update = {
  __typename?: "LinksDocAccessFields_address_Update";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Content = {
  __typename?: "LinksDocAccessFields_content";
  create?: Maybe<LinksDocAccessFields_Content_Create>;
  delete?: Maybe<LinksDocAccessFields_Content_Delete>;
  read?: Maybe<LinksDocAccessFields_Content_Read>;
  update?: Maybe<LinksDocAccessFields_Content_Update>;
};

export type LinksDocAccessFields_Content_Create = {
  __typename?: "LinksDocAccessFields_content_Create";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Content_Delete = {
  __typename?: "LinksDocAccessFields_content_Delete";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Content_Read = {
  __typename?: "LinksDocAccessFields_content_Read";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Content_Update = {
  __typename?: "LinksDocAccessFields_content_Update";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Customer = {
  __typename?: "LinksDocAccessFields_customer";
  create?: Maybe<LinksDocAccessFields_Customer_Create>;
  delete?: Maybe<LinksDocAccessFields_Customer_Delete>;
  read?: Maybe<LinksDocAccessFields_Customer_Read>;
  update?: Maybe<LinksDocAccessFields_Customer_Update>;
};

export type LinksDocAccessFields_Customer_Create = {
  __typename?: "LinksDocAccessFields_customer_Create";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Customer_Delete = {
  __typename?: "LinksDocAccessFields_customer_Delete";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Customer_Read = {
  __typename?: "LinksDocAccessFields_customer_Read";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Customer_Update = {
  __typename?: "LinksDocAccessFields_customer_Update";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Signature = {
  __typename?: "LinksDocAccessFields_signature";
  create?: Maybe<LinksDocAccessFields_Signature_Create>;
  delete?: Maybe<LinksDocAccessFields_Signature_Delete>;
  read?: Maybe<LinksDocAccessFields_Signature_Read>;
  update?: Maybe<LinksDocAccessFields_Signature_Update>;
};

export type LinksDocAccessFields_Signature_Create = {
  __typename?: "LinksDocAccessFields_signature_Create";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Signature_Delete = {
  __typename?: "LinksDocAccessFields_signature_Delete";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Signature_Read = {
  __typename?: "LinksDocAccessFields_signature_Read";
  permission: Scalars["Boolean"];
};

export type LinksDocAccessFields_Signature_Update = {
  __typename?: "LinksDocAccessFields_signature_Update";
  permission: Scalars["Boolean"];
};

export type LinksFields = {
  __typename?: "LinksFields";
  address?: Maybe<LinksFields_Address>;
  content?: Maybe<LinksFields_Content>;
  customer?: Maybe<LinksFields_Customer>;
  signature?: Maybe<LinksFields_Signature>;
};

export type LinksFields_Address = {
  __typename?: "LinksFields_address";
  create?: Maybe<LinksFields_Address_Create>;
  delete?: Maybe<LinksFields_Address_Delete>;
  read?: Maybe<LinksFields_Address_Read>;
  update?: Maybe<LinksFields_Address_Update>;
};

export type LinksFields_Address_Create = {
  __typename?: "LinksFields_address_Create";
  permission: Scalars["Boolean"];
};

export type LinksFields_Address_Delete = {
  __typename?: "LinksFields_address_Delete";
  permission: Scalars["Boolean"];
};

export type LinksFields_Address_Read = {
  __typename?: "LinksFields_address_Read";
  permission: Scalars["Boolean"];
};

export type LinksFields_Address_Update = {
  __typename?: "LinksFields_address_Update";
  permission: Scalars["Boolean"];
};

export type LinksFields_Content = {
  __typename?: "LinksFields_content";
  create?: Maybe<LinksFields_Content_Create>;
  delete?: Maybe<LinksFields_Content_Delete>;
  read?: Maybe<LinksFields_Content_Read>;
  update?: Maybe<LinksFields_Content_Update>;
};

export type LinksFields_Content_Create = {
  __typename?: "LinksFields_content_Create";
  permission: Scalars["Boolean"];
};

export type LinksFields_Content_Delete = {
  __typename?: "LinksFields_content_Delete";
  permission: Scalars["Boolean"];
};

export type LinksFields_Content_Read = {
  __typename?: "LinksFields_content_Read";
  permission: Scalars["Boolean"];
};

export type LinksFields_Content_Update = {
  __typename?: "LinksFields_content_Update";
  permission: Scalars["Boolean"];
};

export type LinksFields_Customer = {
  __typename?: "LinksFields_customer";
  create?: Maybe<LinksFields_Customer_Create>;
  delete?: Maybe<LinksFields_Customer_Delete>;
  read?: Maybe<LinksFields_Customer_Read>;
  update?: Maybe<LinksFields_Customer_Update>;
};

export type LinksFields_Customer_Create = {
  __typename?: "LinksFields_customer_Create";
  permission: Scalars["Boolean"];
};

export type LinksFields_Customer_Delete = {
  __typename?: "LinksFields_customer_Delete";
  permission: Scalars["Boolean"];
};

export type LinksFields_Customer_Read = {
  __typename?: "LinksFields_customer_Read";
  permission: Scalars["Boolean"];
};

export type LinksFields_Customer_Update = {
  __typename?: "LinksFields_customer_Update";
  permission: Scalars["Boolean"];
};

export type LinksFields_Signature = {
  __typename?: "LinksFields_signature";
  create?: Maybe<LinksFields_Signature_Create>;
  delete?: Maybe<LinksFields_Signature_Delete>;
  read?: Maybe<LinksFields_Signature_Read>;
  update?: Maybe<LinksFields_Signature_Update>;
};

export type LinksFields_Signature_Create = {
  __typename?: "LinksFields_signature_Create";
  permission: Scalars["Boolean"];
};

export type LinksFields_Signature_Delete = {
  __typename?: "LinksFields_signature_Delete";
  permission: Scalars["Boolean"];
};

export type LinksFields_Signature_Read = {
  __typename?: "LinksFields_signature_Read";
  permission: Scalars["Boolean"];
};

export type LinksFields_Signature_Update = {
  __typename?: "LinksFields_signature_Update";
  permission: Scalars["Boolean"];
};

export type LinksReadAccess = {
  __typename?: "LinksReadAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type LinksReadDocAccess = {
  __typename?: "LinksReadDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type LinksUpdateAccess = {
  __typename?: "LinksUpdateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type LinksUpdateDocAccess = {
  __typename?: "LinksUpdateDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createCustomer?: Maybe<Customer>;
  createLink?: Maybe<Link>;
  createUser?: Maybe<User>;
  deleteCustomer?: Maybe<Customer>;
  deleteLink?: Maybe<Link>;
  deletePreference?: Maybe<Preference>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars["Boolean"];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars["String"]>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars["Boolean"];
  updateCustomer?: Maybe<Customer>;
  updateLink?: Maybe<Link>;
  updatePreference?: Maybe<Preference>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars["Boolean"]>;
};

export type MutationCreateCustomerArgs = {
  data: MutationCustomerInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateLinkArgs = {
  data: MutationLinkInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationDeleteCustomerArgs = {
  id: Scalars["String"];
};

export type MutationDeleteLinkArgs = {
  id: Scalars["String"];
};

export type MutationDeletePreferenceArgs = {
  key: Scalars["String"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"];
};

export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars["Boolean"]>;
  email: Scalars["String"];
  expiration?: InputMaybe<Scalars["Int"]>;
};

export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars["String"]>;
};

export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
};

export type MutationUnlockUserArgs = {
  email: Scalars["String"];
};

export type MutationUpdateCustomerArgs = {
  autosave?: InputMaybe<Scalars["Boolean"]>;
  data: MutationCustomerUpdateInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type MutationUpdateLinkArgs = {
  autosave?: InputMaybe<Scalars["Boolean"]>;
  data: MutationLinkUpdateInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type MutationUpdatePreferenceArgs = {
  key: Scalars["String"];
  value?: InputMaybe<Scalars["JSON"]>;
};

export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars["Boolean"]>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars["String"]>;
};

export type Preference = {
  __typename?: "Preference";
  createdAt: Scalars["DateTime"];
  key: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  value?: Maybe<Scalars["JSON"]>;
};

export type Query = {
  __typename?: "Query";
  Access?: Maybe<Access>;
  Customer?: Maybe<Customer>;
  Customers?: Maybe<Customers>;
  Link?: Maybe<Link>;
  Links?: Maybe<Links>;
  Preference?: Maybe<Preference>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  docAccessCustomer?: Maybe<CustomersDocAccess>;
  docAccessLink?: Maybe<LinksDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars["Boolean"]>;
  meUser?: Maybe<UsersMe>;
};

export type QueryCustomerArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type QueryCustomersArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<Customer_Where>;
};

export type QueryLinkArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type QueryLinksArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<Link_Where>;
};

export type QueryPreferenceArgs = {
  key?: InputMaybe<Scalars["String"]>;
};

export type QueryUserArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<User_Where>;
};

export type QueryDocAccessCustomerArgs = {
  id: Scalars["String"];
};

export type QueryDocAccessLinkArgs = {
  id: Scalars["String"];
};

export type QueryDocAccessUserArgs = {
  id: Scalars["String"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"];
  email?: Maybe<Scalars["EmailAddress"]>;
  id?: Maybe<Scalars["String"]>;
  lockUntil?: Maybe<Scalars["DateTime"]>;
  loginAttempts?: Maybe<Scalars["Float"]>;
  password: Scalars["String"];
  resetPasswordExpiration?: Maybe<Scalars["DateTime"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  role: User_Role;
  updatedAt: Scalars["DateTime"];
};

export enum UserUpdate_Role_MutationInput {
  Admin = "admin",
  Customer = "customer",
}

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]>>>;
  contains?: InputMaybe<Scalars["EmailAddress"]>;
  equals?: InputMaybe<Scalars["EmailAddress"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]>>>;
  like?: InputMaybe<Scalars["EmailAddress"]>;
  not_equals?: InputMaybe<Scalars["EmailAddress"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  equals?: InputMaybe<Scalars["JSON"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  not_equals?: InputMaybe<Scalars["JSON"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
};

export enum User_Role {
  Admin = "admin",
  Customer = "customer",
}

export enum User_Role_Input {
  Admin = "admin",
  Customer = "customer",
}

export enum User_Role_MutationInput {
  Admin = "admin",
  Customer = "customer",
}

export type User_Role_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  equals?: InputMaybe<User_Role_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  not_equals?: InputMaybe<User_Role_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: "Users";
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPrevPage?: Maybe<Scalars["Boolean"]>;
  limit?: Maybe<Scalars["Int"]>;
  nextPage?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  pagingCounter?: Maybe<Scalars["Int"]>;
  prevPage?: Maybe<Scalars["Int"]>;
  totalDocs?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
};

export type UsersCreateAccess = {
  __typename?: "UsersCreateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UsersCreateDocAccess = {
  __typename?: "UsersCreateDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UsersDeleteAccess = {
  __typename?: "UsersDeleteAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UsersDeleteDocAccess = {
  __typename?: "UsersDeleteDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UsersDocAccessFields = {
  __typename?: "UsersDocAccessFields";
  email?: Maybe<UsersDocAccessFields_Email>;
  password?: Maybe<UsersDocAccessFields_Password>;
  role?: Maybe<UsersDocAccessFields_Role>;
};

export type UsersDocAccessFields_Email = {
  __typename?: "UsersDocAccessFields_email";
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: "UsersDocAccessFields_email_Create";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: "UsersDocAccessFields_email_Delete";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: "UsersDocAccessFields_email_Read";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: "UsersDocAccessFields_email_Update";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Password = {
  __typename?: "UsersDocAccessFields_password";
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: "UsersDocAccessFields_password_Create";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: "UsersDocAccessFields_password_Delete";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: "UsersDocAccessFields_password_Read";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: "UsersDocAccessFields_password_Update";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Role = {
  __typename?: "UsersDocAccessFields_role";
  create?: Maybe<UsersDocAccessFields_Role_Create>;
  delete?: Maybe<UsersDocAccessFields_Role_Delete>;
  read?: Maybe<UsersDocAccessFields_Role_Read>;
  update?: Maybe<UsersDocAccessFields_Role_Update>;
};

export type UsersDocAccessFields_Role_Create = {
  __typename?: "UsersDocAccessFields_role_Create";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Role_Delete = {
  __typename?: "UsersDocAccessFields_role_Delete";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Role_Read = {
  __typename?: "UsersDocAccessFields_role_Read";
  permission: Scalars["Boolean"];
};

export type UsersDocAccessFields_Role_Update = {
  __typename?: "UsersDocAccessFields_role_Update";
  permission: Scalars["Boolean"];
};

export type UsersFields = {
  __typename?: "UsersFields";
  email?: Maybe<UsersFields_Email>;
  password?: Maybe<UsersFields_Password>;
  role?: Maybe<UsersFields_Role>;
};

export type UsersFields_Email = {
  __typename?: "UsersFields_email";
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: "UsersFields_email_Create";
  permission: Scalars["Boolean"];
};

export type UsersFields_Email_Delete = {
  __typename?: "UsersFields_email_Delete";
  permission: Scalars["Boolean"];
};

export type UsersFields_Email_Read = {
  __typename?: "UsersFields_email_Read";
  permission: Scalars["Boolean"];
};

export type UsersFields_Email_Update = {
  __typename?: "UsersFields_email_Update";
  permission: Scalars["Boolean"];
};

export type UsersFields_Password = {
  __typename?: "UsersFields_password";
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: "UsersFields_password_Create";
  permission: Scalars["Boolean"];
};

export type UsersFields_Password_Delete = {
  __typename?: "UsersFields_password_Delete";
  permission: Scalars["Boolean"];
};

export type UsersFields_Password_Read = {
  __typename?: "UsersFields_password_Read";
  permission: Scalars["Boolean"];
};

export type UsersFields_Password_Update = {
  __typename?: "UsersFields_password_Update";
  permission: Scalars["Boolean"];
};

export type UsersFields_Role = {
  __typename?: "UsersFields_role";
  create?: Maybe<UsersFields_Role_Create>;
  delete?: Maybe<UsersFields_Role_Delete>;
  read?: Maybe<UsersFields_Role_Read>;
  update?: Maybe<UsersFields_Role_Update>;
};

export type UsersFields_Role_Create = {
  __typename?: "UsersFields_role_Create";
  permission: Scalars["Boolean"];
};

export type UsersFields_Role_Delete = {
  __typename?: "UsersFields_role_Delete";
  permission: Scalars["Boolean"];
};

export type UsersFields_Role_Read = {
  __typename?: "UsersFields_role_Read";
  permission: Scalars["Boolean"];
};

export type UsersFields_Role_Update = {
  __typename?: "UsersFields_role_Update";
  permission: Scalars["Boolean"];
};

export type UsersReadAccess = {
  __typename?: "UsersReadAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UsersReadDocAccess = {
  __typename?: "UsersReadDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UsersUnlockAccess = {
  __typename?: "UsersUnlockAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UsersUnlockDocAccess = {
  __typename?: "UsersUnlockDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UsersUpdateAccess = {
  __typename?: "UsersUpdateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UsersUpdateDocAccess = {
  __typename?: "UsersUpdateDocAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type CustomersAccess = {
  __typename?: "customersAccess";
  create?: Maybe<CustomersCreateAccess>;
  delete?: Maybe<CustomersDeleteAccess>;
  fields?: Maybe<CustomersFields>;
  read?: Maybe<CustomersReadAccess>;
  update?: Maybe<CustomersUpdateAccess>;
};

export type CustomersDocAccess = {
  __typename?: "customersDocAccess";
  create?: Maybe<CustomersCreateDocAccess>;
  delete?: Maybe<CustomersDeleteDocAccess>;
  fields?: Maybe<CustomersDocAccessFields>;
  read?: Maybe<CustomersReadDocAccess>;
  update?: Maybe<CustomersUpdateDocAccess>;
};

export type LinksAccess = {
  __typename?: "linksAccess";
  create?: Maybe<LinksCreateAccess>;
  delete?: Maybe<LinksDeleteAccess>;
  fields?: Maybe<LinksFields>;
  read?: Maybe<LinksReadAccess>;
  update?: Maybe<LinksUpdateAccess>;
};

export type LinksDocAccess = {
  __typename?: "linksDocAccess";
  create?: Maybe<LinksCreateDocAccess>;
  delete?: Maybe<LinksDeleteDocAccess>;
  fields?: Maybe<LinksDocAccessFields>;
  read?: Maybe<LinksReadDocAccess>;
  update?: Maybe<LinksUpdateDocAccess>;
};

export type MutationCustomerInput = {
  role: Customer_Role_MutationInput;
  wallet: Scalars["String"];
};

export type MutationCustomerUpdateInput = {
  role?: InputMaybe<CustomerUpdate_Role_MutationInput>;
  wallet?: InputMaybe<Scalars["String"]>;
};

export type MutationLinkInput = {
  address?: InputMaybe<Scalars["String"]>;
  content?: InputMaybe<Scalars["JSON"]>;
  customer?: InputMaybe<Scalars["String"]>;
  signature?: InputMaybe<Scalars["String"]>;
};

export type MutationLinkUpdateInput = {
  address?: InputMaybe<Scalars["String"]>;
  content?: InputMaybe<Scalars["JSON"]>;
  customer?: InputMaybe<Scalars["String"]>;
  signature?: InputMaybe<Scalars["String"]>;
};

export type MutationUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  lockUntil?: InputMaybe<Scalars["String"]>;
  loginAttempts?: InputMaybe<Scalars["Float"]>;
  password: Scalars["String"];
  resetPasswordExpiration?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role: User_Role_MutationInput;
};

export type MutationUserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  lockUntil?: InputMaybe<Scalars["String"]>;
  loginAttempts?: InputMaybe<Scalars["Float"]>;
  password?: InputMaybe<Scalars["String"]>;
  resetPasswordExpiration?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<UserUpdate_Role_MutationInput>;
};

export type UsersAccess = {
  __typename?: "usersAccess";
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: "usersDocAccess";
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: "usersJWT";
  collection: Scalars["String"];
  email: Scalars["EmailAddress"];
};

export type UsersLoginResult = {
  __typename?: "usersLoginResult";
  exp?: Maybe<Scalars["Int"]>;
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: "usersMe";
  collection?: Maybe<Scalars["String"]>;
  exp?: Maybe<Scalars["Int"]>;
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: "usersRefreshedUser";
  exp?: Maybe<Scalars["Int"]>;
  refreshedToken?: Maybe<Scalars["String"]>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: "usersResetPassword";
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type LinksQueryVariables = Exact<{ [key: string]: never }>;

export type LinksQuery = {
  __typename?: "Query";
  Links?: {
    __typename?: "Links";
    hasNextPage?: boolean | null;
    hasPrevPage?: boolean | null;
    docs?: Array<{
      __typename?: "Link";
      id?: string | null;
      address?: string | null;
      content?: any | null;
    } | null> | null;
  } | null;
};

export type GetLinkQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetLinkQuery = {
  __typename?: "Query";
  Link?: {
    __typename?: "Link";
    id?: string | null;
    address?: string | null;
    content?: any | null;
  } | null;
};

export type CreateLinkMutationVariables = Exact<{
  address: Scalars["String"];
  content: Scalars["JSON"];
  signature?: InputMaybe<Scalars["String"]>;
}>;

export type CreateLinkMutation = {
  __typename?: "Mutation";
  createLink?: {
    __typename?: "Link";
    id?: string | null;
    address?: string | null;
    content?: any | null;
    signature?: string | null;
  } | null;
};

export const LinksDocument = gql`
  query Links {
    Links {
      docs {
        id
        address
        content
      }
      hasNextPage
      hasPrevPage
    }
  }
`;
export const GetLinkDocument = gql`
  query getLink($id: String!) {
    Link(id: $id) {
      id
      address
      content
    }
  }
`;
export const CreateLinkDocument = gql`
  mutation createLink($address: String!, $content: JSON!, $signature: String) {
    createLink(
      data: { address: $address, content: $content, signature: $signature }
    ) {
      id
      address
      content
      signature
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    Links(
      variables?: LinksQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<LinksQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LinksQuery>(LinksDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Links",
        "query"
      );
    },
    getLink(
      variables: GetLinkQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetLinkQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetLinkQuery>(GetLinkDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getLink",
        "query"
      );
    },
    createLink(
      variables: CreateLinkMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<CreateLinkMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateLinkMutation>(CreateLinkDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "createLink",
        "mutation"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
