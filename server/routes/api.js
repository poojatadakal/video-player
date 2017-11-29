const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const db = 'mongodb://pooja:1234@ds123896.mlab.com:23896/video-tutorial'
mongoose.Promise = global.Promise;
mongoose.connection.openUri(db, function(err){
	if(err){
		console.error("Error! " + err);
	}
});

router.get('/', function(req, res){
	res.send("api is working");
});

router.get('/videos', function(req, res){
	console.log("request to get all records");
	Video.find({})
	.exec(function(err, videos){
		if(err){
			console.log("error retrieving videos");
		}else {
			res.json(videos);
		}
	});
});

router.get('/videos/:id', function(req, res){
	console.log("request to get single record");
	Video.findById(req.params.id)
	.exec(function(err, video){
		if(err){
			console.log("error retrieving video");
		}else {
			res.json(video);
		}
	});
});

router.post('/video', function(req, res){
	console.log("add a record");
	var newVideo = new Video();
		newVideo.title = req.body.title,
		newVideo.url = req.body.url,
		newVideo.description = req.body.description 
		newVideo.save(function(err, insertedVideo){
			if(err){
				console.log('Error saving video ');
			} else {
				res.json(insertedVideo);
			}
		});
	
});

router.put('/video/:id', function(req, res){
	console.log("update single record");
	Video.findByIdAndUpdate(req.params.id,
	{
		$set: { title: req.body.title, url: req.body.url, description: req.body.description }
	},
	{
		new: true
	},
	function(err, updatedVideo){
		if(err){
			console.log("Error updating record");
		}else {
			res.json(updatedVideo);
		}
	});

});

router.delete('/video/:id', function(req, res){
	console.log("delete single record");
	Video.findByIdAndRemove(req.params.id, function(err, deleteVideo){
		if(err){
			res.send("Error deleting record");
		}else {
			res.json(deleteVideo);
		}
	});
});

module.exports = router;