/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, message } from "antd";
import { LuLogOut, LuLogIn } from "react-icons/lu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(user);

  // logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            MEDBOOK
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link
                    to="/"
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="about">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <Link
                    to="/dfdf"
                    class="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/register"
                    class="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    Register
                  </Link>
                </li>

                <li class="nav-item" onClick={handleLogout}>
                  <Link to="/" class="nav-link " aria-current="page" href="#">
                    Logout
                  </Link>
                </li>

                {user && (
                  <li class="nav-item" onClick={handleLogout}>
                    <Link
                      to="/private-homepage"
                      class="nav-link "
                      aria-current="page"
                      href="#"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

                {/* {user?.name ? (
                  <>
                    <li class="nav-item">
                      <Link
                        to="/login"
                        class="nav-link "
                        aria-current="page"
                        href="#"
                      >
                        login
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li class="nav-item" onClick={handleLogout}>
                      <Link
                        to="/"
                        class="nav-link "
                        aria-current="page"
                        href="#"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                )} */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
