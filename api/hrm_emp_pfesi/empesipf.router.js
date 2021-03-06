const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createpfesi, updatepfesi, getempesipfByID, getempesipfBySlno } = require('../hrm_emp_pfesi/empesipf.controller');

router.post("/", checkToken, createpfesi);
router.patch("/", checkToken, updatepfesi);
router.get("/select/:id", checkToken, getempesipfBySlno);
router.get("/:id", checkToken, getempesipfByID);

module.exports = router;