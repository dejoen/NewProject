const express= require('express')
const app =express()

const PORT =3000
const dotevn=require('dotenv').config()

console.log(process.env.PORT)
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
