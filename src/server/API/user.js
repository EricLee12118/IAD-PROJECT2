let db = require('../db/index')

exports.get = (req, res) => {
    var sql = 'select * from user' 
    db.query(sql, [req.query.name, req.query.password], (err, data) => {
        if(err) {
            return res.send({
                status: 400,
            })
        }
        
        if(data.length > 0) {
            res.send({
            status: 200,
            })
        }else{
            res.send({
            status: 202,
            })
        }
    })
}
