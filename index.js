import {DistrictList} from "./districts.js";

DistrictList.map((item,i)=>{
    let Details1=`My District Name is ${item.name}`
    let Details2=`My District Code is ${item.code}`
    console.log(Details1)
    console.log(Details2)
})