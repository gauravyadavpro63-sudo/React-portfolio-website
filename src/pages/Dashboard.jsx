import { useEffect, useState } from "react";
import {api} from "../services/api.js"
import {ListOrdered, User, UserCheck, Users} from "lucide-react"


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

    const statsItems=[
        {
            label:"Total Users",
            value:dashboardData.stats.totalUsers.toLocaleString(),
            icon:Users
        },
        {
            label:"Active  Users",
            value:dashboardData.stats.activeUsers.toLocaleString(),
            icon:UserCheck
        },
        {
            label: "Total orders",
            value:dashboardData.stats.totalOrders,
            icon:Users
        },
        {
           label:"Total Revenue",
           value: `Rs ${dashboardData.stats.revenue.toLocaleString()}`,
           icon:ListOrdered
        }
    ]

    
    return(
        <>
        <div>
            {/* card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
             {statsItems.map((item,idx)=>(
                <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-between">
                    <div className="space-y-2">
                         <p className="text-xs font-light text-text-primary uppercase">{item.label}</p>
                         <p  className="text-2xl font-light text-gray-900">{item.value}</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-50 rounded-flex items-center justify-center">
                        <item.icon/>
                    </div>
                </div>
             ))}
            </div>
         
            {/* Grid layout */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* left part */}
            <div className="col-span-2 h-70 bg-white border border-gray-200 rounded-xl mt-8 p-6">
            <p className="text-sm font-light uppercase">Revenue Overview</p>
            </div>
            {/* right part */}
            <div className="col-span-1 bg-white border border-gray-200 rounded-xl mt-8 p-6">
                <p className="text-sm font-light uppercase">Recent Orders</p>
                <div className="h-50 overflow-y-auto">
                    {dashboardData.recentOrders.map((order,idx)=>(
                        <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 pr-2">
                            <div>
                                <p className="text-sm font-light text-text-primary">{order.customer}</p>
                                <p className="text-xs font-light flex gap-2">
                                    <span>Rs {order.amount}</span>
                                    <span>{order.date}</span>
                                </p>
                            </div>
                            {/* status */}
                            <span className={`text-[10px] px-2 py-1 rounded-full bg-gray-100 ${
                                order.status==="Completed"?"bg-green-100 text-green-500":
                                order.status==="Pending"? "bg-orange-100 text-orange-400":
                                "bg-blue-100 test-blue-400"
                            }`}>
                                {order.status}</span>
                        </div>
                    ))}
                </div>
            </div>
           </div>


        </div>
        </>
    )
}

export default Dashboard;
