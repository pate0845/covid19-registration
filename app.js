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
})

const urlencodedParser=bodyParser.urlencoded({extended:false})  


//routes
//app.get('/api/v1/data')            get all data
//app.post('/api/v1/data')           post data
//app.get('/api/v1/data/:id')        get data by id
//app.patch('/api/v1/data/:id')      edit data by id 
//app.delete('/api/v1/data/:id')     delete data of employee by id

//app.post('/user')                   add new user to database
//app.post('/user/login')             validate user login


app.use('/api/v1/data',screening)   //screening form 
app.use('covid19-screening-app23.herokuapp.com/user',urlencodedParser,loginAuth)  //user validation




const PORT=process.env.PORT || 5000;

const start=async ()=>{
    try{
        app.listen(PORT,'0.0.0.0',()=>{console.log(`Server listening at port ${PORT}`)});
        await connectDB();
    }catch(error){
        console.log(error)
    }
}

start();