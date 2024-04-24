import { useState } from 'react'
// import './App.css'
import Header from './Header'
import SideBar from './SideBar'

function LayOutWrapper({children}) {
return(
  <div style={{flex:1,display:'flex'}}>
    {/* <Header/> */}
    <SideBar/>
    <div style={{flex:1}}>
    {children}
    </div>
  </div>
)
 
}

export default LayOutWrapper
