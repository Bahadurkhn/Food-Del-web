// import React, { useContext, useState } from "react";
// import "./FoodItem.css"
// import assets from "../../assets/assets";

// import { StoreContext } from "../../context/StoreContext";

// export const FoodItem = ({ id, name, price, description, image }) => {
  // Use a local state for itemCount instead of passing 0 directly
  // const [itemCount, setItemCount] = useState(0);

  // return (
  //   <div className="food-item">
  //     <div className="food-item-img-container">
  //       <img className="food-item-image" src={image} alt="" />
  //       {!itemCount ? 
  //         <img
  //           className="add"
  //           onClick={() => setItemCount((prev) => prev + 1)}
  //           src={assets.add_icon_white} style={{ width: '24px', height: '24px', objectFit: 'contain' }}
  //           alt=""
  //         />
  //        :<div className="food-item-counter">
  //           <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }}/> 
            {/* <button onClick={() => setItemCount((prev) => Math.max(prev - 1, 0))}></button> */}
            // <p>{itemCount}</p>

            // <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }}/>

            {/* <button onClick={() => setItemCount((prev) => prev + 1)}></button> */}
//           </div>
//         }
//       </div>

//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img
//             src={assets.rating}
//             alt=""
//             style={{ width: "24px", height: "24px", objectFit: "contain" }}
//           />
//         </div>

//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;


 import React, { useContext } from "react";
 import "./FoodItem.css"
 import assets from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

 export const FoodItem = ({ id, name, price, description, image }) => {

 
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return(
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id]
            ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} style={{ width: '24px', height: '24px', objectFit: 'contain' }}  alt="" />
          :<div className="food-item-counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} style={{ width: '24px', height: '24px', objectFit: 'contain' }}  alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} style={{ width: '24px', height: '24px', objectFit: 'contain' }}  alt="" />
          </div>
          }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating} style={{ width: '24px', height: '24px', objectFit: 'contain' }} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
     )}
     export default FoodItem;
