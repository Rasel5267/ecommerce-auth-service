// /* eslint-disable @typescript-eslint/no-explicit-any */
// import mongoose, { SortOrder } from 'mongoose';
// import { paginationHelpers } from '../../../helpers/paginationHelper';
// import { IGenericResponse } from '../../../interfaces/common';
// import { IPaginationOptions } from '../../../interfaces/pagination';
// import { Seller } from './seller.model';
// import { sellerSearchableFields } from './seller.constant';
// import { ApiError } from '../../../errors/ApiError';
// import httpStatus from 'http-status';
// import { User } from '../user/user.model';
// import { ISeller, ISellerFilters } from './seller.interface';

// const GetAllFaculties = async (
//   filters: ISellerFilters,
//   paginationOptions: IPaginationOptions
// ): Promise<IGenericResponse<ISeller[]>> => {
//   // Extract searchTerm to implement search query
//   const { searchTerm, ...filtersData } = filters;
//   const { page, limit, skip, sortBy, sortOrder } =
//     paginationHelpers.calculatePagination(paginationOptions);

//   const andConditions = [];
//   // Search needs $or for searching in specified fields
//   if (searchTerm) {
//     andConditions.push({
//       $or: sellerSearchableFields.map(field => ({
//         [field]: {
//           $regex: searchTerm,
//           $options: 'i',
//         },
//       })),
//     });
//   }

//   if (Object.keys(filtersData).length) {
//     andConditions.push({
//       $and: Object.entries(filtersData).map(([field, value]) => {
//         const query = {
//           [field]: {
//             $regex: new RegExp(`^${value}$`, 'i'), // 'i' flag for case-insensitive
//           },
//         };
//         return query;
//       }),
//     });
//   }

//   // Dynamic  Sort needs  field to  do sorting
//   const sortConditions: { [key: string]: SortOrder } = {};
//   if (sortBy && sortOrder) {
//     sortConditions[sortBy] = sortOrder;
//   }
//   const whereConditions =
//     andConditions.length > 0 ? { $and: andConditions } : {};

//   const result = await Seller.find(whereConditions)
//     .sort(sortConditions)
//     .skip(skip)
//     .limit(limit);

//   const total = await Seller.countDocuments(whereConditions);

//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };

// const GetSingleSeller = async (id: string): Promise<ISeller | null> => {
//   const result = await Seller.findOne({ id: id })

//   return result;
// };

// const UpdateSeller = async (
//   email: string,
//   payload: Partial<ISeller>
// ): Promise<ISeller | null> => {
//   const isExist = await Seller.findOne({ email: email });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Seller not found !');
//   }

//   const { name, ...SellerData } = payload;
//   const updatedSellerData: Partial<ISeller> = { ...SellerData };

//   if (name && Object.keys(name).length > 0) {
//     Object.keys(name).forEach(key => {
//       const nameKey = `name.${key}` as keyof Partial<ISeller>;
//       (updatedSellerData as any)[nameKey] = name[key as keyof typeof name];
//     });
//   }

//   const result = await Seller.findOneAndUpdate(
//     { id: id },
//     updatedSellerData,
//     {
//       new: true,
//     }
//   );
//   return result;
// };

// const DeleteSeller = async (id: string): Promise<ISeller | null> => {
//   // check if the student is exist
//   const isExist = await Seller.findOne({ id: id });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Seller not found !');
//   }

//   const session = await mongoose.startSession();

//   try {
//     await session.startTransaction();
//     //delete student first
//     const Seller = await Seller.findOneAndDelete({ id: id }, { session });
//     if (!Seller) {
//       throw new ApiError(404, 'Failed to delete Seller');
//     }
//     //delete user
//     await User.deleteOne({ id: id }, { session });
//     await session.commitTransaction();
//     await session.endSession();

//     return Seller;
//   } catch (error) {
//     await session.abortTransaction();
//     await session.endSession();
//     throw error;
//   }
// };

// export const SellerService = {
//   GetAllFaculties,
//   GetSingleSeller,
//   UpdateSeller,
//   DeleteSeller,
// };
