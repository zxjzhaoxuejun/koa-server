const Api=require('../tools/mysql')
module.exports=async (ctx,next)=>{
 await Api.insertData(['zhha','123456']).then(async res => {
            console.log('注册成功', res)
            //注册成功
            ctx.state.data = {
              code: 200,
              message: '注册成功'
              // info: user
            }
          })
}