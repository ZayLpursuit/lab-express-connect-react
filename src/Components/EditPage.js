
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";




const API=process.env.REACT_APP_API_URL
export default function EditPage(){

const [log,setLog]=useState([])
const navigate=useNavigate()
const {index}=useParams()

useEffect(()=>{
    axios.get(`${API}/logs/${index}`).then((res)=>{setLog(res.data)})
},[index])

function handleChange(e){
setLog({...log,[e.target.id]:e.target.value})
}

function handleSubmit(e){
    e.preventDefault()
    axios.put(`${API}/logs/${index}`,log).then(()=>navigate(`/logs/${index}`))
    
}

return (
    <div className="default-grid">

        <h1 className="column-2 new-header grey ">Edit Log Entry</h1>

            <form className="column-2 new-form" onSubmit={(e)=>handleSubmit(e)}>

                
                <label htmlFor="captainName">Captain's Name</label>
                <input type='text' id="captainName" className="" value={log.captainName}  required  onChange={(e)=>handleChange(e)}/>

                <label htmlFor="title">Title</label>
                <input type='text' id="title" className="" value={log.title}  required onChange={(e)=>handleChange(e)}/>

                <label htmlFor="post">Post</label>
                <textarea id="post" className="" value={log.post} required  onChange={(e)=>handleChange(e)}></textarea>

                <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today</label>
                <input type='checkbox' id="mistakesWereMadeToday" className="" value={log.mistakesWereMadeToday}   onChange={(e)=>handleChange(e)}/>


                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
                <input type='number' id="daysSinceLastCrisis" className="" value={log.daysSinceLastCrisis} required  onChange={(e)=>handleChange(e)}/>

              

                <button type="submit" className="sub def-btn">Submit</button>
               

                <Link to={`/logs`}>Back</Link>

            </form>
    </div>

)



}