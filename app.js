const express=require('express');
const app=express();
const screening=require('./routes/screening')
const connectDB=require('./db/connect')
const loginAuth=require('./routes/login')
const bodyParser=require('body-parser');


//middleware
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/screening-form.html')
  });

const urlencodedParser=bodyParser.urlencoded({extended:false})  


//routes
//app.get('/api/v1/data')            get all data
//app.post('/api/v1/data')           post data
//app.get('/api/v1/data/:id')        get data by id
//app.patch('/api/v1/data/:id')      edit data by id 
//app.delete('/api/v1/data/:id')     delete data of employee by id

//app.get('/user')                   add new user to database
//app.get('/user/login')             validate user login


app.use('https://covid19-screening-app23.herokuapp.com/api/v1/data',screening)   //screening form 
app.use('/https://covid19-screening-app23.herokuapp.com/user',urlencodedParser,loginAuth)  //user validation



const port=3000;
const start=async ()=>{
    try{
        await connectDB;
        app.listen(process.env.PORT ||port,console.log(`server listening`))
    }catch(error){
        console.log(error)
    }
}

start();