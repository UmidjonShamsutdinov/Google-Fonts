import React from 'react'
import "./Utils.scss"
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'

const Utils = () => {
  return (
    <div>Utils</div>
  )
}



export const Container1 = ({children}:{children:React.ReactNode}) => {
    const containerData = useSelector((state:any)=>state.container_Data.sideValue)    
    return(
        <div className={!containerData ? `container1`: "container2"}>
            {children}
        </div>
    )
}

export default Utils