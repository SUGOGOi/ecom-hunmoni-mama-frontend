"use client"
import React, { useRef } from 'react'
import style from "./page.module.scss"
import Sidebar from '@/components/shared/sidebar/sidebar'
import Navbar from '@/components/shared/navbar/navbar'

const Dashboard = () => {
  return (
    <div className={style.container} >
      <div className={style.sidebarContainer}>
              <Sidebar />
        </div>
      <div className={style.main}>
        <Navbar />
        
      </div>
    </div>
  )
}

export default Dashboard