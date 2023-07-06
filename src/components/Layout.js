import React from "react";
import "../styles/LayoutStyles.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdNotifications } from "react-icons/io";
import { adminMenu, userMenu } from "./../data/data";
import { LuLogOut } from "react-icons/lu";
import { Badge, message } from "antd";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // =========== doctor menu ===============
  const doctorMenu = [
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
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: <FaUserMd />,
    },
  ];

  //  rendering menu list base on user role
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>MEDBOOK</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      {menu.icon}
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <LuLogOut />
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="header">
              <div className="header-content" style={{ cursor: "pointer" }}>
                <Badge
                  count={user && user?.notification.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  <IoMdNotifications />
                </Badge>
                <Link to="/profile">{user?.name}</Link>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
