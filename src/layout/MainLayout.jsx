import {Outlet} from "react-router"
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Mainlayout(){
    return (
        <>
        <div className="min-h-screen bg-bg">
           {/* sidebar */}
          <Sidebar/>

           {/* rightarea */}

           <div className="md:ml-64 min-h-screen">
          {/* topbar */}
          <Topbar/>

          <main className="p-8">
            <Outlet/>
          </main>


           </div>



        </div>
        </>
    )
}
export default Mainlayout;