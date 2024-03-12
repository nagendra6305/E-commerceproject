import { configureStore } from "@reduxjs/toolkit";
import  Slice  from './Createslice'


  const Store=configureStore({
reducer:{
    data:Slice
}
})

export default Store