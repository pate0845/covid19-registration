//login page
const login=document.getElementById('login');
const user=document.getElementById('user');
const password=document.getElementById('password')
const displayErr=document.getElementById('error');

const redirectPage=()=>{
    window.location.replace("https://covid19-screening-app23.herokuapp.com/cards.html")
}

login.addEventListener('click',async (e)=>{
    e.preventDefault();
    const User=user.value;
    const Password=password.value;
    var response;
    try{
        await axios.post('/user/login',{user:User,password:Password})
        .then((e)=>{response=e})
        user.value='';
        password.value='';
        if(response.data.login===true){
            redirectPage();
        }else{
            displayErr.innerHTML=`<span id="err">${response.data.msg}</span>`
            setTimeout(
            e=>displayErr.innerHTML=``
            ,2000)
        }
    }catch(error){
        console.log(error)
    }
})


