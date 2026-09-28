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

     const handleSave=()=>{
        console.log("Settings save:",formData);
        setSaved(true);
        setTimeout(()=>{
            setSaved(false);
        },3000)
     }

     const handleReset=()=>{
        if(settingsData){
            setFormData(settingsData)
        }

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
           {/* general settings */}

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
                <h3 className="text-base font-medium text-gray-800">General Settings</h3>
                <p className="text-sm text-gray-400 mt-1">Configure baisc application settings</p>
            </div>
            </div> 
        </div>
    )
}


    return(
          <div className="space-y-6">
            {/* header */}

            <div className="text-xl font-medium text-slate-900">
                <h2>Settings</h2>
                <p className="text-sm text-gray-400 mt-1">Manage your application preferences.</p>
            </div>


            {/* general settings */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-base font-medium text-gray-800">General Settings</h3>
                    <p className="text-sm text-gray-400  mt-1">Configure basic application settings</p>
                </div>
            </div>
            
            <div className="p-6 space-y-6">
                {/* site name  */}
               
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 ">Site Name</label>
                <input type="text" name="siteName" value={formData.siteName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none foxcus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
               </div>

               {/* theme */}

               <div>
                <label className="block text-sm font-medium text-gray-700  mb-2">Theme</label>
                <select name="theme" value={formData.theme} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 
                    focus:ring-indigo-100">
                    <option value="Light">Light</option>
                     <option value="Dark">Dark</option>
                    <option value="System">System</option>

                </select>
               </div>

               {/* language */}

               <div>
                <label className="block text-sm font-medium text-gray-700  mb-2">Language</label>
                <select name="language" value={formData.language} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 
                    focus:ring-indigo-100">
                    <option value="Hindi">Hindi</option>
                     <option value="English">English</option>

                </select>
               </div>

               {/* timezone */}

                     <div>
                <label className="block text-sm font-medium text-gray-700  mb-2">TimeZone</label>
                <select name="timezone" value={formData.timezone} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 
                    focus:ring-indigo-100">
                    <option value="Asia">Asia</option>
                     <option value="Europe">Europe</option>
                    <option value="USA">USA</option>

                </select>
               </div>

            </div>
            

          </div>
    )
}

export default Settings;