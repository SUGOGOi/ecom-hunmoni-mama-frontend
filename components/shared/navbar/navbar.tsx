"use client"

import style from "./navebar.module.scss"
import ecom from "../../../public/svg/e-com.svg"
import Link from "next/link"
import { FaSearch, FaShoppingCart, FaSignInAlt, FaUserCircle } from "react-icons/fa"
import Image from "next/image"

const user = {_id:"jjj"}

const Navbar = () => {
  return (
      <div className={style.container} >
      <div className={style.logo}><Link href="/"><Image src={ecom} width={70} height={70} alt="svg" /></Link></div>
          
          <div className={style.otherIcons}>
              <Link href="/search"><FaSearch/></Link>
              <Link href="/cart"><FaShoppingCart /></Link>
              {
                  user?._id?(<Link href={`/profile/{${user._id}}`} ><FaUserCircle/></Link>):(<Link href="/auth/login" ><FaSignInAlt/></Link>)
              }
          </div>
          
    </div>
  )
}

export default Navbar