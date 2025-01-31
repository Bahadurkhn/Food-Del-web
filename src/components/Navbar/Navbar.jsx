// import React, { useContext, useState } from "react";
// import "./Navbar.css";
// import assets from "../../assets/assets";
// import { Link, useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";

// export const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("menu");

//   const { getTotalCartAmount, setToken } = useContext(StoreContext);

//   const navigate = useNavigate();

//   // Get token from localStorage
//   const token = localStorage.getItem("token");

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(""); // Assuming setToken clears it from context
//     navigate("/");
//   };

//   return (
//     <div className="navbar">
//       <Link to="/">
//         <img
//           src={assets.logo}
//           alt=""
//           className="logo"
//           style={{ width: "120px" }}
//         />
//       </Link>
//       <ul className="navbar-menu">
//         <Link
//           to="/"
//           onClick={() => setMenu("home")}
//           className={menu === "home" ? "active" : ""}
//         >
//           Home
//         </Link>
//         <a
//           href="#explore-menu"
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           menu
//         </a>
//         <a
//           href="#app-download"
//           onClick={() => setMenu("mobile-app")}
//           className={menu === "mobile-app" ? "active" : ""}
//         >
//           mobile-app
//         </a>
//         <a
//           href="#footer"
//           onClick={() => setMenu("Contact-us")}
//           className={menu === "Contact-us" ? "active" : ""}
//         >
//           contact us
//         </a>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.Search} alt="" style={{ width: "60px" }} />
//         <div className="navbar-Search-icon">
//           <Link to="/cart">
//             <img src={assets.cart} alt="" style={{ width: "70px" }} />
//           </Link>
//           <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//         </div>

//         {!token ? (
//           <button onClick={() => setShowLogin(true)}>Sign in</button>
//         ) : (
//           <div className="navbar-profile">
//             <img src={assets.profile_image} alt="" />
//             <ul className="nav-profile-dropdown">
//               <li>
//                 <img src={assets.bag_icon} alt="" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={assets.logout_icon} alt="" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// // li onClick={()=>} navigate ('/myorders')}

import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} style={{ width: "120px" }} alt="" /></Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.Search} alt="" style={{ width: "60px" }} />
        <div className="navbar-Search-icon">
          <Link to="./cart"><img src={assets.Basket} style={{ width: "120px" }} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};
export default Navbar;
