import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/userNavigation/Header";
import Home from "./components/screens/UserModule/Home";
import GentsProducts from "./components/screens/UserModule/GentsProducts/GentsProducts";
import LadiesProducts from "./components/screens/UserModule/LadiesProducts/LadiesProducts";
import GentsOrderDetails from "./components/otherComponents/GentsProducts/GentsOrderDetails";
import GentsCheckOut from "./components/otherComponents/GentsProducts/GentsCheckOut";
import LadiesOrderDetails from "./components/otherComponents/LadiesProducts/LadiesOrderDetails";
import LadiesCheckOut from "./components/otherComponents/LadiesProducts/LadiesCheckOut";
import Working from "./components/screens/UserModule/extraScreens/Working";
import FeedBack from "./components/screens/UserModule/extraScreens/FeedBack";
import Footer from "./components/navigation/userNavigation/Footer";

// Admin Section
import Register from "./components/screens/AdminModule/Register";
import Login from "./components/screens/AdminModule/Login";
import ResetPassword from "./components/screens/AdminModule/ResetPassword";
import DashBoard from "./components/screens/AdminModule/components/DashBoard";
import GentsOrders from "./components/screens/AdminModule/components/GentsOrders";
import GentsOrderInfo from "./components/screens/AdminModule/components/GentsOrderInfo/GentsOrderInfo";
import LadiesOrders from "./components/screens/AdminModule/components/LadiesOrders";
import LadiesOrderInfo from "./components/screens/AdminModule/components/LadiesOrderInfo/LadiesOrderInfo";
import AdminHeader from "./components/navigation/adminNavigation/AdminHeader";
import AdminFooter from "./components/navigation/adminNavigation/AdminFooter";
import FeedBacks from "./components/screens/AdminModule/components/FeedBacks";
// Admin Section

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/gentsProducts"
          element={
            <>
              <Header />
              <GentsProducts />
              <Footer />
            </>
          }
        />
        <Route
          path="/ladiesProducts"
          element={
            <>
              <Header />
              <LadiesProducts />
              <Footer />
            </>
          }
        />
        <Route
          path="/gents-order-details"
          element={
            <>
              <Header />
              <GentsOrderDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/gents-check-out"
          element={
            <>
              <Header />
              <GentsCheckOut />
              <Footer />
            </>
          }
        />
        <Route
          path="/ladies-order-details"
          element={
            <>
              <Header />
              <LadiesOrderDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/ladies-check-out"
          element={
            <>
              <Header />
              <LadiesCheckOut />
              <Footer />
            </>
          }
        />
        <Route
          path="/working"
          element={
            <>
              <Header />
              <Working />
              <Footer />
            </>
          }
        />
        <Route
          path="/feedback"
          element={
            <>
              <Header />
              <FeedBack />
              <Footer />
            </>
          }
        />

        {/* Admin Routes */}

        <Route
          path="/admin/register"
          element={
            <>
              <Register />
            </>
          }
        />

        <Route
          path="/admin/login"
          element={
            <>
              <Login />
            </>
          }
        />

        <Route
          path="/admin/reset-password"
          element={
            <>
              <ResetPassword />
            </>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <>
              <AdminHeader />
              <DashBoard />
              <AdminFooter />
            </>
          }
        />

        <Route
          path="/admin/gents-orders"
          element={
            <>
              <AdminHeader />
              <GentsOrders />
              <AdminFooter />
            </>
          }
        />

        <Route
          path="/admin/gents-order-info/:id"
          element={
            <>
              <AdminHeader />
              <GentsOrderInfo />
            </>
          }
        />

        <Route
          path="/admin/ladies-orders"
          element={
            <>
              <AdminHeader />
              <LadiesOrders />
              <AdminFooter />
            </>
          }
        />

        <Route
          path="/admin/ladies-order-info/:id"
          element={
            <>
              <AdminHeader />
              <LadiesOrderInfo />
            </>
          }
        />

        <Route
          path="/admin/feedbacks"
          element={
            <>
              <AdminHeader />
              <FeedBacks />
              <AdminFooter />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
