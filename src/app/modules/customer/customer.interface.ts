import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type ICustomer = {
  email: string;
  name: UserName;
  contactNo: string;
  address: string;
  profileImage: string;
};

export type CustomerModel = Model<ICustomer, Record<string, unknown>>;

export type ICustomerFilters = {
  searchTerm?: string;
  email?: string;
  contactNo?: string;
};
