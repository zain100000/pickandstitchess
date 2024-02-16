import React, { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import ReactDOM from "react-dom";
import "./Header.css";
import Loader from "../../otherComponents/Loader/Loader";

const AdminHeader = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Get the current date
  const currentDate = new Date();

  // Format the date in the desired format
  const formattedDate = format(currentDate, "dd-MMMM-yyyy");

  const CustomAlert = ({ message }) => {
    return (
      <div className="custom-alert-container">
        <div className="alert-content">
          <p>{message}</p>
        </div>
      </div>
    );
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const RegisterApiUrl = "http://localhost:5000/api/admin/logout";
      const response = await axios.post(RegisterApiUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 200 && response.status < 300) {
        setAlertMessage("Logout Successfully!");
        setShowAlert(true);
        window.location.href = "/admin/login";
      } else {
        setAlertMessage("Error Logout!");
        setShowAlert(true);
      }
    } catch (error) {
      setAlertMessage("An Error Occurred During Logout!");
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="AdminHeader">
      <div className="container-fluid " style={{ backgroundColor: "#999" }}>
        <div className="row text-center pt-2">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h6 className="text-white">Current Date</h6>
          </div>
        </div>

        <div className="row text-center pt-2">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h6 className="text-white">{formattedDate}</h6>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/dashboard">
                      DashBoard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/gents-orders">
                      Male Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/ladies-orders">
                      Female Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/feedbacks">
                      FeedBacks
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="logoutContainer">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i class="fas fa-user fa-lg text-white"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  {loading ? (
                    <Loader />
                  ) : (
                    <Link class="dropdown-item" onClick={handleLogout}>
                      Logout
                    </Link>
                  )}
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>
      {showAlert &&
        ReactDOM.createPortal(
          <CustomAlert message={alertMessage} onClose={handleAlertClose} />,
          document.body
        )}
    </section>
  );
};

export default AdminHeader;
