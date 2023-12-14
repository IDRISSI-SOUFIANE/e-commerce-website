import "./header.css";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);

  const check = document.addEventListener("click", function (e) {
    var navbarList = document.querySelector("ul");
    var barIcon = document.querySelector(".barsclick");

    if (e.target !== navbarList && e.target !== barIcon) {
      navbarList.style.display = "none";
    }
  });
  console.log(check);

  const showMenu = () => {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  console.log(show);

  return (
    <div className="box container">
      <div className="navbar container-fluid d-inline-flex">
        <div className="brand ">
          <img src={logo} className="img-fluid" />
        </div>
        <ul
          className={`${
            show == true ? "active" : "no-active"
          } d-flex align-items-lg-center justify-content-between`}

          // className={`${}`}
        >
          <li>Home</li>
          <li>Women</li>
          <li>Men</li>
        </ul>

        <div className="icons container-fluid d-inline-flex align-items-center m-0">
          <a href="#" className="heart">
            <i className="bi bi-heart-fill text-white">
              <span className="information">3</span>
            </i>
          </a>
          <a href="#" className="bag">
            <i className="bi bi-bag-fill text-white">
              <span className="information">5</span>
            </i>
          </a>
        </div>

        <div className="barsclick">
          <i className="bars fa-solid fa-bars" onClick={showMenu}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
