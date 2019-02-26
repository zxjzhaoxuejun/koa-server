const Koa=require('koa')
const app=new Koa()

app.use(async(ctx,next)=>{
  ctx.body='hello koa'
  next()
  ctx.body+=`--233`
})

app.use(async(ctx,next)=>{
  ctx.body+='--ni'
  next()
  ctx.body+=`--ha2`
})

function delay(word){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(word)
    },2000)
  })
}

async function start(){
  const w1=await delay('孙悟空')
  console.log(w1)
  const w2=await delay('猪八戒')
  console.log(w2)
  const w3=await delay('沙悟净')
  console.log(w3)
}

start()

app.listen(2000)