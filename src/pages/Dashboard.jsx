import { useEffect, useState } from "react";
import {api} from "../services/api.js"


function Dashboard(){
    const [dashboardData,setDashboardData]=useState(null);
    const [loading,setLoading]=useState(false);

    const loadDashboardData=async()=>{
        setLoading(true);
         try{
           const data=await api.getDashboard();
           setDashboardData(data);
         }
         catch(err){
          console.error("dashboard loading failed", err);
         }
         finally{
            setLoading(false);
         }
    }
    useEffect(()=>{
        loadDashboardData()
    },[])

    if(loading&&!dashboardData){
        return(
            <div className="flex items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin">

                </div>
            </div>
        )
    }

    if(!dashboardData){
        return(
            <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div>Dashboard data not available</div>
            </div>
        )
    }
    return(
        <>
        <div>Dashboard</div>
        </>
    )
}

export default Dashboard;