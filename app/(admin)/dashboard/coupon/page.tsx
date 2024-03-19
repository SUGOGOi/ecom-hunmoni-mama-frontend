"use client"
import Navbar from '@/components/shared/navbar/navbar'
import Sidebar from '@/components/shared/sidebar/sidebar'
import React from 'react'
import style from "./page.module.scss"


const coupon = () => {
  return (
    
    <div className={style.container} >
      <div className={style.sidebarContainer}>
              <Sidebar />
        </div>
      <div className={style.main}>
        <Navbar/>
      </div>
    </div>
  )
}

export default coupon