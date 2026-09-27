import { useState,useEffect } from "react";
import {api} from "../services/api.js"


function Settings(){

     const [settingsData,setSettingsData]=useState(null);
     const [loading,setLoading]=useState(false);
     const [formData,setFormData]=useState({
        siteName: "",
        theme:"light",
        notification:true,
        language:"English",
        timezone:"Asia/Lucknow",
        twoFactor:false
     })

     const [saved,setSaved]=useState(false);

     const handleChange=(e)=>{
        const {name,value,type,checked}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:type==="checkbox"?checked:value
        }))
        setSaved(false);
     }

     const loadSettingData=async()=>{
        setLoading(true)
            try{
              const data=await api.getSettings();
              setSettingsData(data);
            }
            catch(err){
            console.error("userdata loading failed",err);
            }
            finally{
            setLoading(false);
            }
        
     }

     useEffect(()=>{
        loadSettingData()
     },[]);


     if(loading&&!settingsData){
        return(
            <div className="flex items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        )
     }
     
     
if(!settingsData){
    return(
        <div className="p-6 bg-white rounded-xl border border-gray-200">
           <div>
            <p>Setting  data not available</p>
           </div>
        </div>
    )
}


    return(
          <div>

          </div>
    )
}

export default Settings;