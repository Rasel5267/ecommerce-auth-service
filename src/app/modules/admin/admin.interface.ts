import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IAdmin = {
  email: string;
  name: UserName;
  contactNo: string;
  address: string;
  profileImage: string;
};

export type AdminModel = Model<IAdmin, Record<string, unknown>>;

export type IAdminFilters = {
  searchTerm?: string;
  email?: string;
  contactNo?: string;
};
