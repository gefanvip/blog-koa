const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

router.get('/api/:id',async (ctx, next) =>{
    ctx.body = ctx.params.id
    ctx.response.status = 200
    console.log(ctx)
    next()
})

//调用路由中间件
app.use(router.routes())

app.listen(3000,() =>{
    console.log('服务已经运行在本地3000端口！')
})