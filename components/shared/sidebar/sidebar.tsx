import React, { useState } from "react";
import style from "./sidebar.module.scss";
import Link from "next/link";
import {
  MdDashboard,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoTicket } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import TopLoadingbar from "../top-loading-bar/topbar";

const Sidebar = () => {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      title: "Users",
      path: "/dashboard/user",
      icon: <MdSupervisedUserCircle />,
    },
    {
      title: "Products",
      path: "/dashboard/product",
      icon: <MdShoppingBag />,
    },
    {
      title: "Coupon",
      path: "/dashboard/coupon",
      icon: <IoTicket />,
    },
    {
      title: "Orders",
      path: "/dashboard/order",
      icon: <TbTruckDelivery />,
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.dashlogo}>Dashboard</div>
      <hr />
      <div className={style.main}>
        <ul>
          {menuItems.map((i) => (
            <li key={i.title}>
              <div
                className={`${style.linkContainer} ${
                  pathname === i.path && style.active
                }`}
              >
                <Link href={i.path} className={style.link}>
                  {i.icon}
                  {i.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
