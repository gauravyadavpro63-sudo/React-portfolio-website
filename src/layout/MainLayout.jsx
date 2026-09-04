import {Outlet} from "react-router"


function Mainlayout(){
    return (
        <>
        <div className="min-h-screen bg-bg">
           {/* sidebar */}


           {/* rightarea */}

           <div>
          {/* topbar */}

          <main>
            <Outlet/>
          </main>


           </div>



        </div>
        </>
    )
}
export default Mainlayout;