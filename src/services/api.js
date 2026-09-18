import {dashboardData,productsData,settingsData,usersData} from "../data/data.js"

const delay=(ms=500)=>{
    return new Promise((resolve)=>setTimeout(resolve,ms));
}


//Dashboard api
const getDashboard=async()=>{
    await delay();
    return dashboardData;
}

//User api
const getUsers=async()=>{
    await delay();
    return usersData.items
}

//Product api

const getProducts=async()=>{
    await delay();
    return productsData
}

//Order api
const getOrders=async()=>{
    await delay();
    return ordersData;
}
//Setting api
const getSettings=async ()=>{
    await delay();
    return settingsData
}

export const api={getDashboard,getUsers,getProducts,getSettings}