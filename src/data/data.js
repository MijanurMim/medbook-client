import { BiHomeAlt2 } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";

export const userMenu = [
  {
    name: "Home",
    path: "/",
    icon: <BiHomeAlt2 />,
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: <FaClipboardList />,
  },
  {
    name: "Apply Doctor",
    path: "/apply-doctor",
    icon: <FaUserMd />,
  },
  {
    name: "Apply Patient",
    path: "/apply-patient",
    icon: <FaUserInjured />,
  },
  // {
  //   name: "Profile",
  //   path: "/profile",
  //   icon: <FaUserInjured />,
  // },
];

// Admin Menu
export const adminMenu = [
  {
    name: "Home",
    path: "/",
    icon: <BiHomeAlt2 />,
  },
  {
    name: "Doctors",
    path: "/admin/doctors",
    icon: <FaUserMd />,
  },
  {
    name: "Patients",
    path: "/admin/patients",
    icon: <FaUserInjured />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <FaClipboardList />,
  },
  // {
  //   name: "Profile",
  //   path: "/profile",
  //   icon: <CgProfile />,
  // },
];
