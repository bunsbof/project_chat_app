const express = require("express");
const { accessChat } = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware")

const router = express.Router()

router.route('/').post(protect, accessChat);
// router.route('/').get(protect, fetchChats);
// router.route('/group').post(protect, createGroupChat);
// router.route('/rename').put(protect, renameGroupChat);
// router.route('/removegroup').delete(protect, removeGroup);
// router.route('/addgroup').put(protect, addToGroup);

module.exports = router