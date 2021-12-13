const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createQual, updateQual, getQualification, getQualifByID, getQualifBySlno } = require('../hrm_emp_qual/qualification.controller');

router.post("/", checkToken, createQual);
router.patch("/", checkToken, updateQual);
router.get("/select/:id", checkToken, getQualifBySlno);
router.get("/:id", checkToken, getQualifByID);
router.get("/", checkToken, getQualification);


module.exports = router;