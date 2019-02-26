const CONF = {
    //启动端口
    port: '3000',
    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'koa',
        pass: 'z13203073508',
        char: 'utf8mb4'
    },
}

module.exports = CONF
