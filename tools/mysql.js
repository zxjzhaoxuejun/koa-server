// 建立了数据库的连接池
const mysql = require('mysql')
const config = require('../config')

const pool = mysql.createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.pass,
  database: config.mysql.db
})

//创建一个函数query，通过返回promise的方式
//以便可以方便用.then()来获取数据库返回的数据

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      //使用连接
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            // 使用连接执行查询
            resolve(rows)
          }
          //连接不再使用，返回到连接池
          connection.release()
        })
      }
    })
  })
}

// 创建用户表

let users = `create table if not exists users(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL COMMENT '用户名',
  pass VARCHAR(100) NOT NULL COMMENT '密码',
  PRIMARY KEY (id)
);`

let createTable = function(sql) {
  return query(sql, [])
}
// 建表
createTable(users)
// 注册用户
let insertData = value => {
  let _sql = `insert into users set name=?,pass=?;`
  console.log(value)
  return query(_sql, value)
}

// 查询所有注册用户
let findAllUsers = () => {
  let _sql = `select * from users;`
  return query(_sql)
}

// 通过名字查找用户
let findDataByName = name => {
  let _sql = `select * from users where name="${name}";`
  return query(_sql)
}

// 通过ID查找用户
let findUserId = id => {
  let _sql = `select * from users where id="${id}";`
  return query(_sql)
}

// 修改用户简介
let updataUser = value => {
  console.log(value)
  let _sql = `update users set describes=? where id=?`
  return query(_sql, value)
}

module.exports = {
  query,
  createTable,
  insertData,
  findDataByName,
  findAllUsers,
  findUserId,
  updataUser
}
