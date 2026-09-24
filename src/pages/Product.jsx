import { useEffect, useState } from "react";
import {api} from "../services/api.js"



function Products(){
const [productData,setProductData]=useState(null);
const [loading,setLoading]=useState(false);


const loadProductData=async()=>{
    setLoading(true);
    try{
    const data=await api.getProducts();
    setProductData(data);
    }
    catch(err){
   console.log("UserData laoding failed",err)
    }
    finally{
     setLoading(false);
    }
}

useEffect(()=>{
    loadProductData()
},[])

if(loading&&!productData){
    return(
        <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
    )
}

if(!productData){
    return(
        <div className="p-6 bg-white rounded-xl border border-gray-200">
           <div>
            <p>User data not available</p>
           </div>
        </div>
    )
}

    return(
       <div className="bg-white border border-gray-100 rounded-2xl overflow-x-auto">
                  <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 text-xs">
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Name</th>
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Category</th>
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Price</th>
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Stock</th>
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Status</th>

                </tr>
              </thead>


           <tbody>
            {productData.items.map((user)=>(
                <tr key={user.id} className="border-b border-gray-100">
                    <td className="px-5 py-4 font-light text-sm text-left">{user.name}</td>
                    <td className="px-5 py-4 font-light text-sm text-left">{user.category}</td>
                    <td className="px-5 py-4 font-light text-sm text-left">{user.price}</td>
                    <td className="px-5 py-4 font-light text-sm text-left">{user.stock}</td>
                    <td className="px-5 py-4 font-light text-sm text-left">{user.status}</td>
                    
                    

                </tr>
            ))}
           </tbody>


          </table>
       </div>
    )
}

export default Products;