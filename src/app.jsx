
import {BrowserRouter,Navigate,Route,Routes} from "react-router"
import MainLayout from "./layout/MainLayout"
import Dashboard from  "./pages/Dashboard"
import Users from "./pages/Users"
import Products from "./pages/Product"
import Orders from "./pages/Orders"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>


        <Route element={<MainLayout/>}>

        <Route path='/' element={<Navigate to={"/dashboard"} replace/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;``