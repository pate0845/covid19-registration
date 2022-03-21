const submitBtn=document.getElementById('btn')
const firstName=document.getElementById('fname');
const lastName=document.getElementById('lname');
const email=document.getElementById('email');
const phoneNumber=document.getElementById('phone');
const employeeId=document.getElementById('employeeId');
const vaccineStatus=document.getElementById('vaccinated');
const symptoms=document.getElementById('symptoms');
const travelStatus=document.getElementById('contamination')
const carrier=document.getElementById('carrier')
const information=document.getElementById('correctInfoProvided')
const date=document.getElementById('date');



//Post Data
const submitForm=async(e)=>{
    e.preventDefault()
    const fName=firstName.value;
    const lName=lastName.value;
    const Email=email.value;
    const PhoneNumber=phoneNumber.value;
    const EmployeeId=employeeId.value;
    const VaccineStatus=vaccineStatus.value;
    const Symptoms=symptoms.value;
    const TravelStatus=travelStatus.value;
    const Carrier=carrier.value;
    const Information=information.checked;
    const Date=date.value;
    var d;
    try{
        await axios.post('/api/v1/data',{
            fName,lName,Email,PhoneNumber,EmployeeId,VaccineStatus,Symptoms,TravelStatus,Carrier
            ,Information,Date
        })
        .then((e)=>{d=e.data.msg})
        if(d){
            const e=document.getElementById('err')
            e.style=
                `margin:30px 0;
                text-align: center;
                font-size: 16px;
                color:red;`
            e.innerHTML=d;
            setTimeout(
                val=>e.innerHTML='',1500)
        }
        firstName.value='';
        lastName.value='';
        email.value='';
        phoneNumber.value='';
        employeeId.value='';
        vaccineStatus.value='';
        symptoms.value='';
        travelStatus.value='';
        carrier.value='';
        information.checked=false;
        date.value='';
    }catch(error){
        console.log(error)
    }
  
}
submitBtn.onclick=submitForm;


//converting boolean to String
const convertToString=(obj)=>{
    let newObj=obj;
    let key=Object.keys(newObj);
    for(let i=0;i<key.length;i++){
        if(newObj[key[i]]===true){
            newObj[key[i]]='yes';
        }
        if(newObj[key[i]]===false){
            newObj[key[i]]='no';
        }
    }
    return newObj;
}


//edit data api/v1/data/:{id}
const loadData=async () =>{
    try{
        let {data:{data}}=await axios.get(`/api/v1/data/${document.URL.split('?id=')[1]}`)
        data=convertToString(data);
        firstName.value=data.fName;
        lastName.value=data.lName;
        email.value=data.Email;
        employeeId.value=data.EmployeeId;
        phoneNumber.value=data.PhoneNumber;
        vaccineStatus.value=data.VaccineStatus;
        symptoms.value=data.Symptoms;
        travelStatus.value=data.TravelStatus
        information.checked=data.Information;
        carrier.value=data.Carrier;
        date.value=data.Date;
        const editBtn=document.getElementById('edit');
        editBtn.onclick=commitChange;
    }catch(error){
        console.log(error);
    }
}

//make a patch request
const commitChange=async ()=>{
    const fName=firstName.value;
    const lName=lastName.value;
    const Email=email.value;
    const PhoneNumber=phoneNumber.value;
    const EmployeeId=employeeId.value;
    const VaccineStatus=vaccineStatus.value;
    const Symptoms=symptoms.value;
    const TravelStatus=travelStatus.value;
    const Carrier=carrier.value;
    const Information=information.checked;
    const Date=date.value;
    try{
        let {data:{data}}=await axios.patch(`/api/v1/data/${document.URL.split('?id=')[1]}`,{
                fName:fName,
                lName:lName,
                Email:Email,
                PhoneNumber:PhoneNumber,
                EmployeeId:EmployeeId,
                VaccineStatus:VaccineStatus,
                Symptoms:Symptoms,
                TravelStatus:TravelStatus,
                Carrier:Carrier,
                Information:Information,
                Date:Date
         }) 
         if(data){
                window.location.replace('/cards.html');                
            }
    }catch(error){
        const e=document.getElementById('err')
            e.style=
                `margin:30px 0;
                text-align: center;
                font-size: 16px;
                color:red;`
            e.innerHTML=`Need to enter all the value`;
            setTimeout(
                val=>e.innerHTML='',1500)  
    }
}


const checkPage=()=>{
if(document.URL.split('?id=')[1]){
    const edit=document.getElementById('btn');
    edit.id='edit';
    edit.innerHTML='Edit'
    const edt=document.getElementById('login');
    edt.parentNode.removeChild(edt);
    loadData();
  }else{
      return;
  }
}

window.onload=checkPage();

