const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO hrm_emp_category (
                    ecat_name,
                    emp_type,
                    des_type,
                    ecat_cont,
                    ecat_cont_period,
                    ecat_prob,
                    ecat_prob_period,
                    ecat_cl,
                    ecat_cl_max,
                    ecat_el,
                    ecat_el_max,
                    ecat_sl,
                    ecat_sl_max,
                    ecat_nh,
                    ecat_fh,
                    ecat_woff_allow,
                    ecat_doff_allow,
                    ecat_esi_allow,
                    ecat_confere,
                    ecat_confere_max,
                    ecat_lop,
                    ecat_lop_max,
                    ecat_mate,
                    ecat_mate_max,
                    ecat_status,
                    empstat_period,
                    cont_period,
                    cont_grace,create_users
                )
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.ecat_name,
                data.emp_type,
                data.des_type,
                data.ecat_cont,
                data.ecat_cont_period,
                data.ecat_prob,
                data.ecat_prob_period,
                data.ecat_cl,
                data.ecat_cl_max,
                data.ecat_el,
                data.ecat_el_max,
                data.ecat_sl,
                data.ecat_sl_max,
                data.ecat_nh,
                data.ecat_fh,
                data.ecat_woff_allow,
                data.ecat_doff_allow,
                data.ecat_esi_allow,
                data.ecat_confere,
                data.ecat_confere_max,
                data.ecat_lop,
                data.ecat_lop_max,
                data.ecat_mate,
                data.ecat_mate_max,
                data.ecat_status,
                data.empstat_period,
                data.cont_period,
                data.cont_grace,
                data.create_users
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    update: (data, callBack) => {

        pool.query(
            `UPDATE hrm_emp_category
                SET ecat_name = ?,
                    emp_type = ?,
                    des_type = ?,
                    ecat_cont = ?,
                    ecat_cont_period = ?,
                    ecat_prob = ?,
                    ecat_prob_period =?,
                    ecat_cl =?,
                    ecat_cl_max =?,
                    ecat_el =?,
                    ecat_el_max =?,
                    ecat_sl =?,
                    ecat_sl_max =?,
                    ecat_nh =?,
                    ecat_fh =?,
                    ecat_woff_allow =?,
                    ecat_doff_allow =?,
                    ecat_esi_allow =?,
                    ecat_confere =?,
                    ecat_confere_max =?,
                    ecat_lop =?,
                    ecat_lop_max =?,
                    ecat_mate =?,
                    ecat_mate_max =?,
                    ecat_status = ?,
                    empstat_period=?,
                    cont_period=?,
                    cont_grace=?,
                    edit_user=?
                WHERE category_slno = ?`,
            [
                data.ecat_name,
                data.emp_type,
                data.des_type,
                data.ecat_cont,
                data.ecat_cont_period,
                data.ecat_prob,
                data.ecat_prob_period,
                data.ecat_cl,
                data.ecat_cl_max,
                data.ecat_el,
                data.ecat_el_max,
                data.ecat_sl,
                data.ecat_sl_max,
                data.ecat_nh,
                data.ecat_fh,
                data.ecat_woff_allow,
                data.ecat_doff_allow,
                data.ecat_esi_allow,
                data.ecat_confere,
                data.ecat_confere_max,
                data.ecat_lop,
                data.ecat_lop_max,
                data.ecat_mate,
                data.ecat_mate_max,
                data.ecat_status,
                data.empstat_period,
                data.cont_period,
                data.cont_grace,
                data.edit_user,
                data.category_slno
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    deleteByID: (data, callBack) => {
        pool.query(
            `UPDATE hrm_emp_category SET ecat_status = 0 WHERE category_slno = ?`,
            [
                data.category_slno
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getData: (callBack) => {
        pool.query(
            `SELECT category_slno,
                    ecat_name,
                    employee_status.empstat_name,
                    employee_type.emptype_name,
                    if(ecat_status = 1 ,'Yes','No') status
            FROM hrm_emp_category 
            LEFT JOIN employee_status ON employee_status.emstats_slno  = hrm_emp_category.des_type
            LEFT JOIN employee_type ON employee_type.emptype_slno = hrm_emp_category.emp_type`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getDataById: (id, callBack) => {
        pool.query(
            `SELECT 
            category_slno,
            ecat_name,
            emp_type,
            des_type,
            ecat_cont,
            ecat_cont_period,
            ecat_prob,
            ecat_prob_period,
            ecat_cl,
            ecat_el,
            ecat_sl,
            ecat_sl_max,
            ecat_nh,
            ecat_fh,
            ecat_woff_allow,
            ecat_doff_allow,
            ecat_esi_allow,
            ecat_confere,
            ecat_confere_max,
            ecat_lop,
            ecat_lop_max,
            ecat_mate,
            ecat_mate_max,
            ecat_status,
            empstat_period,
           cont_period,
         cont_grace
        FROM hrm_emp_category
        WHERE category_slno = ?`,
            [
                id
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getSelect: (callBack) => {
        pool.query(
            `SELECT 
                category_slno,
                ecat_name
            FROM hrm_emp_category
            WHERE ecat_status = 1`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    }
}