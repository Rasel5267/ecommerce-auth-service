import mongoose from 'mongoose';
import { IUser } from './user.interface';
import { User } from './user.model';
import { ApiError } from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { ICustomer } from '../customer/customer.interface';
import { Customer } from '../customer/customer.model';
import { IAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';

const CreateCustomer = async (
  customer: ICustomer,
  user: IUser
): Promise<IUser | null> => {
  // set role
  user.role = 'customer';

  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // Create customer using session
    const newCustomer = await Customer.create([customer], { session });

    if (!newCustomer.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create customer');
    }

    user.email = customer.email;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({
      email: newUserAllData.email,
    }).populate('customer', { session });
  }

  return newUserAllData;
};

const CreateAdmin = async (
  admin: IAdmin,
  user: IUser
): Promise<IUser | null> => {
  // set role
  user.role = 'admin';

  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // Create customer using session
    const newCustomer = await Admin.create([admin], { session });

    if (!newCustomer.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    user.email = admin.email;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({
      email: newUserAllData.email,
    }).populate('admin');
  }

  return newUserAllData;
};

export const UserService = {
  CreateCustomer,
  CreateAdmin,
};
