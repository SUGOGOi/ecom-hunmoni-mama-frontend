"use client"

import React from 'react'
import style from "./page.module.scss"
import { usePathname } from 'next/navigation'
import Navbar from '@/components/shared/navbar/navbar'

const profilePage = () => {

  const pathname = usePathname();
  return (
    <div className="div">
      <Navbar/>
      <div className={style.container} >
        {pathname.split("/").pop()}
      </div>
    </div>
  )
}

export default profilePage