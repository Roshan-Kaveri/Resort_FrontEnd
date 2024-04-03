import React, { useState } from "react";
// import '../components/home/Home_page.css';
import bg1 from "../assets/bg1.png";
import Himg from "../assets/Himg.png";
import Himg2 from "../assets/Him2.png";
import Himg3 from "../assets/Him3.jpg";
import { Link } from "react-router-dom";
import NavBar from "../components/login_page/NavBar";
import "../Home_page.css";
import { useLocation } from "react-router-dom";

function Home_page() {
  const queryParams = new URLSearchParams(window.location.search);
  const guestId = queryParams.get("guest_id");
  console.log("Guest ID:", guestId);
  const cabLink = guestId ? "/cab" : "/login";
  const foodLink = guestId ? "/Food" : "/login";
  const roomLink = guestId ? "/RoomBook" : "/login";

  return (
    <div className="Hc">
      <NavBar></NavBar>
      <div class="Hrectangle">
        <b
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: 30,
          }}
        >
          MANIPAL RESORT
        </b>
      </div>
      <div className="Hbg">
        <img src={bg1} alt="" />
        <b
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: 30,
          }}
        >
          WELCOME!!
        </b>
        <textarea placeholder="" className="Htext0"></textarea>
        <div class="Hrectangle1">
          <div className="Hc1">
            <div className="Himg">
              <img src={Himg} alt="" />
            </div>
            <textarea placeholder="" className="Htext"></textarea>
            <Link to={roomLink}>
              <h2 className="RoomBook">
                <b> Book A Room Now!</b>
              </h2>
            </Link>
          </div>
        </div>
        <div class="Hrectangle2">
          <div className="Hc2">
            <div className="Himg2">
              <img src={Himg2} alt="" />
            </div>
            <textarea placeholder="" className="Htext1"></textarea>
            <Link
              to={{
                pathname: cabLink,
                state: { guestId: guestId },
              }}
            >
              <h2 className="Cabservice">
                <b> Book A Cab Now!</b>
              </h2>
            </Link>
          </div>
        </div>
        <div class="Hrectangle3">
          <div className="Hc3">
            <div className="Himg3">
              <img src={Himg3} alt="" />
            </div>
            <textarea placeholder="" className="Htext2"></textarea>
            <Link to={foodLink}>
              <h2 className="FoodOrder">
                <b>Order Now!</b>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home_page;
