import { Menu } from "lucide-react"
import { pageTitles } from "../config/navigation"
import { useLocation } from "react-router"

function Topbar({showSidebar,setShowSidebar}){

    const location=useLocation();
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



        </div>
    )
}

export default Topbar