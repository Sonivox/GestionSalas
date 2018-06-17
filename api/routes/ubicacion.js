'use strict'

var express = require('express');
var api = express.Router();
var multipart = require('connect-multiparty');

var UbicacionesController = require('../controllers/ubicaciones');
var md_auth = require('../middlewares/authenticated');
//var md_upload = multipart({uploadDir: './uploads/comments'});

//Metodos GET
api.get('/probando-ubicaciones', md_auth.ensuerAuth, UbicacionesController.probando);
/*api.get('/commentary-user/:user_id/:page?', md_auth.ensuerAuth, CommentaryController.getCommentaryUser);
api.get('/commentary/:id', md_auth.ensuerAuth, CommentaryController.getCommentary);
api.get('/get-image-comment/:imageFile', CommentaryController.getImageFile); */


//Metodos POST
/* api.post('/commentary', md_auth.ensuerAuth , CommentaryController.saveCommentary);
api.post('/commentary/:id', md_auth.ensuerAuth, CommentaryController.getCommentary);
api.post('/upload-image-comment/:id',[md_auth.ensuerAuth, md_upload], CommentaryController.uploadImage);
api.post('/comments/:page?', md_auth.ensuerAuth, CommentaryController.getComments); */

//Metodos DELETE
/* api.delete('/commentary-delete/:id', md_auth.ensuerAuth, CommentaryController.deleteCommentary); */

module.exports = api;