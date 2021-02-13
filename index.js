const koa=require('koa')
const app=new koa();

const Router=require('koa-router')
const router=new Router();

router.get('/',ctx=>ctx.body="hello")
app.use(router.allowedMethods())
app.use(router.routes())

app.listen(4000)