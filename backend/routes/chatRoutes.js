const express = require("express");
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeGroup } = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware")

const router = express.Router()

router.route('/').post(protect, accessChat);
router.route('/').get(protect, fetchChats);
router.route('/group').post(protect, createGroupChat);
router.route('/rename').put(protect, renameGroup);
router.route('/addgroup').put(protect, addToGroup);
router.route('/removegroup').put(protect, removeGroup);

module.exports = router