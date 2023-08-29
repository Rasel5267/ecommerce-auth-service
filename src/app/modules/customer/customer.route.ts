import express from 'express';

const router = express.Router();

// router.get(
//   '/:id',
//   auth(
//     ENUM_USER_ROLE.SUPER_ADMIN,
//     ENUM_USER_ROLE.ADMIN,
//     ENUM_USER_ROLE.FACULTY,
//     ENUM_USER_ROLE.FACULTY,
//     ENUM_USER_ROLE.STUDENT
//   ),
//   StudentController.getSingleStudent
// );

// router.patch(
//   '/:id',
//   validateRequest(StudentValidation.updateStudentZodSchema),
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   StudentController.updateStudent
// );

// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   StudentController.deleteStudent
// );

// router.get(
//   '/',
//   auth(
//     ENUM_USER_ROLE.SUPER_ADMIN,
//     ENUM_USER_ROLE.ADMIN,
//     ENUM_USER_ROLE.FACULTY,
//     ENUM_USER_ROLE.FACULTY,
//     ENUM_USER_ROLE.STUDENT
//   ),
//   StudentController.getAllStudents
// );

export const CustomerRoutes = router;
