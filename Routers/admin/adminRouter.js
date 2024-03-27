
const express = require("express");
const Router = express.Router();
const {
  createCategory,
  putCategory,
  getCategory,
  deleteCategory,
  getSingleCategory,
  loginInstrucor,
  createInstructor,
  putInstructor,
  getInstructor,
  deleteInstructor,
  getSingleInstructor,

} = require('../../controllers/admin/AdminController')
const {
  getUserControler,
  getcreateRole,
  getPermissionController,
  UserControler,
  createRole,
  PermissionController
}=require('../../controllers/admin/RoleSystem');

const { compilerFunction } = require('../../controllers/compiler')
const img_upload = require('../../multer/admin/fileupload');
const { requireSignIn } = require('../../middlewares/authMiddleware');
Router.route('/content/:_id').put(img_upload.single('img'), requireSignIn, putCategory);
Router.route('/content/:_id').delete(requireSignIn, deleteCategory);
Router.route('/content/:_id').get(requireSignIn, getSingleCategory);
Router.route('/content').post(img_upload.single('img'), requireSignIn, createCategory);
Router.get('/content', requireSignIn, getCategory);
Router.route('/instructorlogin').post(loginInstrucor);
Router.route('/instructor').post(createInstructor);
Router.route('/instructor').get(getInstructor);
Router.route('/instructor/:_id').delete(deleteInstructor);
Router.route('/instructor/:_id').put(putInstructor);
Router.route('/instructor/:_id').get(getSingleInstructor);

///compiler js Code ...................
Router.route('/permission').post(PermissionController);
Router.route('/permission').get(getPermissionController);

Router.route('/role').post(createRole);
Router.route('/role').get(getcreateRole);

Router.route('/user').post(UserControler);
Router.route('/user/:id').get(getUserControler);
//////////

Router.route('/compiler').get(compilerFunction);


module.exports = Router; 