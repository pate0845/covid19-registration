
//Display all the data
const box=document.getElementById('container');
const getData=async ()=>{
    try{
        const {data:{Data}}=await axios.get('/api/v1/data')
        const allData=Data.map((obj)=>{
           return `
        <ul class="data" id="box">
           <li>First Name= ${obj.fName}</li>
            <li>Last name= ${obj.lName}</li>
            <li>Email= ${obj.Email}</li>
            <li>PhoneNumber= ${obj.PhoneNumber}</li>
            <li>Employee Id= ${obj.EmployeeId}</li>
            <li>VaccineStatus= ${obj.VaccineStatus}</li>
            <li>Symptoms= ${obj.Symptoms}</li>
            <li>Travel= ${obj.TravelStatus}</li>
            <li>Carrier= ${obj.Carrier}</li>
            <li>Date= ${obj. Date}</li>
            <a class="editLink" href="screening-form.html?id=${obj._id}" >
            <button  class="editButton" type="button">
            Edit
            </button>
            </a>
            <button class="deleteButton" type="button" data-id="${obj._id}">Delete</button>
            </ul>
        `}).join('')
        box.innerHTML=allData
    }catch(error){
        console.log(error)
    }
}

getData()

//delete data with id
const card=document.querySelector('.card');
card.addEventListener('click',async (e)=>{
    if(e.target.className==="deleteButton"){    
    const id=e.target.dataset.id
    try{
        await axios.delete(`/api/v1/data/${id}`)
        getData()
    }catch(error){
        console.log(error)
    }
}
})



