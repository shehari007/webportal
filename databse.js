const { data } = require('jquery')
const {createPool} = require('mysql')


const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    connectionLimit: 10000
})

pool.query('SELECT * FROM mysql.agents', (err,res)=>{
     console.log(res)  
    //return res=>data.json
})

pool.query('SELECT * FROM mysql.student', (err,res)=>{
    //console.log(res)  
    const data=res.data
    console.log(data)
    
})

