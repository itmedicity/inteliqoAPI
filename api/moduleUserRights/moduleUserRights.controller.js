const { create, update, checkInsertVal, checkUpdateVal, getUserModuleRightByID, getuserModuleRights } = require('../moduleUserRights/moduleUserRights.service');

module.exports = {
    createModuleUserRight: (req, res) => {

        const body = req.body;
        const body_result = body;

        if (body_result.error) {
            return res.status(200).json({
                success: 2,
                message: body_result.error.details[0].message
            });
        }

        checkInsertVal(body, (err, results) => {
            const value = JSON.parse(JSON.stringify(results))
            if (Object.keys(value).length === 0) {
                // Insert the values
                create(body, (err, results) => {
                    if (err) {
                        return res.status(200).json({
                            success: 0,
                            message: err
                        });
                    }

                    return res.status(200).json({
                        success: 1,
                        message: "Data Created Successfully"
                    });

                });
            } else {
                return res.status(200).json({
                    success: 7,
                    message: "Employee Name Alrady Mapped"
                })
            }
        })
    },
    updateModuleUserRight: (req, res) => {

        const body = req.body;
        const body_result = body;
        if (body_result.error) {
            return res.status(200).json({
                success: 2,
                message: body_result.error.details[0].message
            });
        }

        checkUpdateVal(body, (err, results) => {
            const value = JSON.parse(JSON.stringify(results))
            if (Object.keys(value).length === 0) {
                update(body, (err, results) => {

                    if (err) {
                        return res.status(200).json({
                            success: 0,
                            message: err.sqlMessage
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
                        message: "Data Updated Successfully"
                    });

                });
            } else {
                return res.status(200).json({
                    success: 7,
                    message: "Employee Name Alrady Mapped"
                })
            }
        })
    },
    getUserModuleRightsByID: (req, res) => {
        const id = req.params.id;
        getUserModuleRightByID(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    getUserModuleRights: (req, res) => {

        getuserModuleRights((err, results) => {
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

}