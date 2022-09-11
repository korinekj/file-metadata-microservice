const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");

// Set Storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("upfile");

router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.json({
        msg: err,
      });
    } else {
      console.log(req.file);
      res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
      });
    }
  });
});

module.exports = router;
