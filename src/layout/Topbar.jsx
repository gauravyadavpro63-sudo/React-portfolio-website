import { ChevronUp, Menu ,ChevronDown, User, Settings, LogOut } from "lucide-react"
import { pageTitles } from "../config/navigation"
import { useLocation ,useNavigate} from "react-router"
import { useState } from "react";

function Topbar({showSidebar,setShowSidebar}){

    const location=useLocation();
    const navigate=useNavigate();
    const [isopen,setIsopen]=useState(false);
    const pageTitle=pageTitles[location.pathname] || "Dashboard"
    return(
        <div className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200
             bg-white px-8 shadow-sm">

                {/* Page title */}
            <div className="flex items-center gap-4">
                <Menu onClick={()=>setShowSidebar(!showSidebar)}/>
                    <h1 className="text-xl font-light text-gray-900">
                      {pageTitle}
                    </h1>   
            </div>






              {/* Profile */}
              <div>
                <button className="flex items-center justify-center gap-4 cursor-pointer transition" onClick={()=>setIsopen(!isopen)}>
                    {/* letter */}
                    <div className="w-9 h-9 bg-primary/80 text-white rounded-full flex items-center justify-center">
                        GY
                    </div>
                    {/* text */}
                    <span>Gaurav Yadav</span>
                    {/* icon */}
                    <span className="text-gray-6000">
                        {isopen?<ChevronUp size={20}/>:<ChevronDown size={20}/>}
                    </span>
                </button>

                {/* dropdown box */}
                {isopen&&(
                    <div className="absolute right-1 top-20 w-74 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                    {/* admin flex box */}
                    <div className="flex items-center px-3 py-4 gap-2 border-b border-gray-200">
                    <div className="w-12 h-12 bg-primary-dark/80 rounded-full flex items-center justify-center
                         text-white shrink-0">
                      GA
                    </div>
                    <div>
                        <p className="text-sm text-text-primary font-medium">Gaurav Yadav</p>
                        <p className="text-sm text-gray-500">gyadav1905@gmail.com</p>
                    </div>
                    </div>
                    {/* menu content */}
                    <div className="border-b border-gray-200 space-y-2 py-2">
                     {/* profile */}
                      <button   onClick={()=>{setIsopen(false);navigate("/profile")}} className="w-full flex items-center gap-4 px-3 py-1.5 rounded hover:bg-gray-50 cursor-pointer">
                        <User size={18}/>
                        <span>Profile</span>
                      </button >

                     {/* settings */}
                     <button onClick={()=>{setIsopen(false),navigate("settings")}} className="w-full flex items-center gap-4 px-3 py-1.5 rounded hover:bg-gray-50 cursor-pointer">
                       <Settings size={18}/>
                       <span>Settings</span>
                     </button>

                    </div>
                   {/* logout button */}
                   <div className="py-2">
                    <button onClick={()=>{setIsopen(false); alert("logout comming")}} className="w-full flex items-center gap-4 px-3 py-1.5 rounded hover:bg-rose-50 cursor-pointer">
                     <LogOut size={18}/>
                     <span className="text-md text-text-primary font-light">Logout</span>
                    </button>
                   </div>
                    </div>

                )}
              </div>





        </div>
    )
}

export default Topbar