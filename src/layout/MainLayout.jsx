import {Outlet} from "react-router"
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useState } from "react";

function Mainlayout(){
    const [showSidebar,setShowSidebar]=useState(false);
    return (
        <>
        <div className="min-h-screen bg-bg">
            {/* Mobile overlay */}
            {showSidebar&&(
                <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={()=>setShowSidebar(false)}></div>
            )}
           {/* sidebar */}
          <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />

           {/* rightarea */}

           <div className="md:ml-64 min-h-screen">
          {/* topbar */}
          <Topbar
           showSidebar={showSidebar}
           setShowSidebar={setShowSidebar}
          />

          <main className="p-8">
            <Outlet/>
          </main>


           </div>



        </div>
        </>
    )
}
export default Mainlayout;