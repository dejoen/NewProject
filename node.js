const express= require('express')
const app =express()
const session=require('express-session')
const {CyclicSessionStore} =require('@cyclic.sh/session-store')
const PORT =process.env.PORT || 8080
const dotevn=require('dotenv').config()

console.log(process.env.PORT)

const options = {
  table: {
    name: process.env.CYCLIC_DB,
  }
};

app.use(
  session({
    resave:false
    store: new CyclicSessionStore(options),
    
  })
);
/*app.get('/',(req,res)=>{
  res.send('hello word')
})*/
/*app.use((req,res,next)=>{
  console.log('Time Now:'+Date.now())
  //  res.sendStatus(Date.now())
  next()
},(req,res,next)=>{
  console.log('new time now'+Date.now())
  next()
})*/

app.get("/",(req,res)=>{
   let count =0
  req.session.view=count
   req.session.user='devjoe'
})
app.get("/user",(req,res)=>{
  res.send(req.session.user)
})
app.get('/user/:id',(req,res,next)=>{
  console.log(req.params.id)
  if(req.params.id==='0')
    next('route')
    else next()
},(req,res,next)=>{
  res.send('regular')
})
app.get('/user/:id',(req,res,next)=>{
  res.send('special')
})

app.listen(PORT,()=>{
  console.log(`app running on ${PORT}`)
})
