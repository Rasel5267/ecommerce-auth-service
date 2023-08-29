// import { Request, Response } from 'express';
// import httpStatus from 'http-status';
// import { catchAsync } from '../../../shared/catchAsync';
// import { sendResponse } from '../../../shared/sendResponse';
// import pick from '../../../shared/pick';
// import { paginationFields } from '../../../constant/pagination';
// import { FacultyService } from './seller.service';
// import { sellerFilterableFields } from './seller.constant';
// import { ISeller } from './seller.interface';

// const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, sellerFilterableFields);
//   const paginationOptions = pick(req.query, paginationFields);
//   const result = await FacultyService.GetAllFaculties(
//     filters,
//     paginationOptions
//   );

//   sendResponse<ISeller[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Seller retrieved successfully',
//     meta: result.meta,
//     data: result.data,
//   });
// });

// const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await FacultyService.GetSingleFaculty(id);

//   sendResponse<ISeller>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Seller retrieved successfully',
//     data: result,
//   });
// });

// const updateFaculty = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const result = await FacultyService.UpdateFaculty(id, updatedData);

//   sendResponse<ISeller>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Seller updated successfully',
//     data: result,
//   });
// });

// const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await FacultyService.DeleteFaculty(id);

//   sendResponse<ISeller>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Seller deleted successfully',
//     data: result,
//   });
// });

// export const FacultyController = {
//   getAllFaculties,
//   getSingleFaculty,
//   updateFaculty,
//   deleteFaculty,
// };
