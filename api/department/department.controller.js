const { createDept, updateDept, deleteDept, getDept, getDeptById } = require('../department/department.service');
const { validateDepartment } = require('../../validation/validation_schema');

module.exports = {
    createDept: (req, res) => {
        const body = req.body;
        //validate department Inster function
        const body_result = validateDepartment.validate(body);
        if (body_result.error) {
            return res.status(200).json({
                success: 2,
                message: body_result.error.details[0].message
            });
        }
        // let body.dept_name = body_result
        body.dept_name = body_result.value.dept_name;
        body.dept_alias = body_result.value.dept_alias;

        createDept(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Department Master Created"
            });
        });
    },
    updateDept: (req, res) => {

        const body = req.body;
        const body_result = validateDepartment.validate(body);

        body.dept_name = body_result.value.dept_name;
        body.dept_alias = body_result.value.dept_alias;

        if (body_result.error) {
            return res.status(200).json({
                success: 3,
                message: body_result.error.details[0].message
            });
        }
        // console.log(body);
        updateDept(body, (err, results) => {

            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Record Not Found"
                });
            }

            return res.status(200).json({
                success: 2,
                message: "Department Updated Successfully"
            });

        });

    },
    deleteDept: (req, res) => {
        const body = req.body;
        deleteDept(body, (err, results) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    message: res.err
                });
            }

            if (!results) {
                return res.status(400).json({
                    success: 1,
                    message: "Record Not Found"
                });
            }

            return res.status(200).json({
                success: 2,
                message: "Record Deleted Successfully"
            });
        });
    },
    getDept: (req, res) => {
        getDept((err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "No Results Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getDeptById: (req, res) => {
        const id = req.params.id;
        getDeptById(id, (err, results) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(400).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
}