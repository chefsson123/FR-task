import { useState } from 'react'
import './StatusSlider.css'

const StatusSlider = (props) => {

   
    const [status, setStatus] = useState(`${props.userStatus}`)
   
    const changeStatus = (event) => {
        setStatus(status => !status)
     
        
  
}

        
    return <label className="switch" onClick={changeStatus}>
   {status === "true" ? <input id="status" type="checkbox" checked/> : <input id="status" type="checkbox" />}
    <span className="slider round"></span>
   
  </label>
}

export default StatusSlider;