
const { checkToken } = require("../../auth/token_validation");

const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./user.controller");
const router = require("express").Router();
//router.post("/", checkToken, createUser);
//router.post("/",createUser);


router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserByUserId);
router.post("/login", login);
router.patch("/", updateUsers);
router.delete("/", deleteUser);

module.exports = router;
