import { NavLink } from "react-router"
import { navigation } from "../config/navigation"
import { pageTitles } from "../config/navigation"


 function Sidebar({showSidebar,setShowSidebar}){
    return(
        <div className={`fixed left-0 top-0 z-50 min-h-screen w-64 bg-sidebar-bg text-white transform
        transition-transform duration-300 ease-in-out ${showSidebar?"translate-x-0":"-translate-x-full"}  md:translate-x-0`}>
           

         {/* logo */}
         <div className="border-b border-text-secondary/10 text-white px-8 py-5">
         <h1 className="text-xl font-semibold flex justify-center gap-3">
            Admin<span className="text-indigo-400 font-light"> Pannel</span></h1>
         </div>

         
         {/* menu */}
         <div className="mt-10">
            {navigation.map((group)=>
               <div key={group.title}>
                <p className="mb-3 px-4 text-xs uppercase text-gray-500 font-light">{group.title}</p>
                <div>
                    {group.items.map((item)=>
                        <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={()=>setShowSidebar(false)}
                        className={({isActive})=>`relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${
                            isActive
                            ?"bg-sidebar-active-light text-sidebar-text-active"
                            :"text-grey-300 hover:bg-gray-800"
                        }`}
                        >
                            {/* Indicator */}
                            {({isActive})=>(
                                <>
                            {isActive&&(
                                <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-indigo-500"></div>
                            )}
                            <item.icon/>
                            <span>{item.label}</span>
                            </>
                        )}
                        </NavLink>
                    )}
                </div>
               </div>
               
            
            )}

         </div>


        </div>
    )
 }

 export default Sidebar