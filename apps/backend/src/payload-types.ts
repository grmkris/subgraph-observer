/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    links: Link;
    users: User;
    customers: Customer;
  };
  globals: {};
}
export interface Link {
  id: string;
  content?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  signature?: string;
  address?: string;
  customer?: string | Customer;
  createdAt: string;
  updatedAt: string;
}
export interface Customer {
  id: string;
  role: 'admin' | 'customer';
  wallet?: string;
  createdAt: string;
  updatedAt: string;
}
export interface User {
  id: string;
  role: 'admin' | 'customer';
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}