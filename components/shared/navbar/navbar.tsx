"use client"

import style from "./navebar.module.scss"
import ecom from "../../../public/svg/e-com.svg"
import Link from "next/link"
import { FaSearch, FaShoppingCart, FaSignInAlt, FaUserCircle } from "react-icons/fa"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Navbar = () => {

  const pathname = usePathname().split("/");

  const user = {
    _id:pathname,
  }
  return (
      <div className={style.container} >
      <div className={style.logo}><Link href="/"><Image src={ecom} width={70} height={70} alt="svg" /></Link></div>
          
          <div className={style.otherIcons}>
              <Link href="/search" className={style.Icons} ><FaSearch/></Link>
              <Link href="/cart" className={style.Icons} ><FaShoppingCart /></Link>
              {
                  user?._id?(<Link href={`/profile/{${user._id}}`}  className={style.Icons} ><FaUserCircle/></Link>):(<Link href="/auth/login"  className={style.Icons} ><FaSignInAlt/></Link>)
              }
          </div>
          
    </div>
  )
}

export default Navbar