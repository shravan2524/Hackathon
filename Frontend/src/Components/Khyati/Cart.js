import React from "react";
import "./Cart.css";
import axios from "axios";
import Modal from "../UI/Modal";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router';

export default function Cart() {
	const [msg, setMsg] = useState();
  const [products_mobile, setproducts_mobile] = useState([]);
  const [email, setemail] = useState("shitalbokade5@gmail.com");
  const [price, setprice] = useState();
  const [address, setaddress] = useState("");
  const [modal, setmodal] = useState(false);
  const history = useHistory();
  const ok = localStorage.getItem('isLogin');
  if(ok==0){
    history.push("/login");
}

  function closemodal(){
    setmodal(false);
  }
  function updateprice(data) {
    var tempprice = 0;
    for (var i = 0; i < data.length; i++) {
      tempprice += parseInt(data[i].price);
    }
    setprice(tempprice);
    console.log(tempprice, data);
  }
  useEffect(() => {
    console.log("kjhgfxcv");
    axios
      .post("https://web-store165.herokuapp.com/api/cart", { email })
      .then((e) => {
        console.log(e.data);
        setproducts_mobile(e.data);
        updateprice(e.data);
      })
      .catch((err) => console.log(err));
  }, []);


  function movetowishlist(item, e) {
    axios
      .post("https://web-store165.herokuapp.com/api/removefromcart", {
        item,
        email,
        movetowishlist: "true",
      })
      .then((e) => {
        console.log(e.data);
        console.log(item);
		setMsg({
			title:'Success!',
			message:`${item.name} moved to wishlist`
		})
        setproducts_mobile(e.data);
        updateprice(e.data);
      })
      .catch((err) => console.log(err));
  }

  function removefromcart(item, e) {
    console.log(item);
    axios
      .post("https://web-store165.herokuapp.com/api/removefromcart", {
        item,
        email,
        movetowishlist: "false",
      })
      .then((e) => {
        console.log(e.data);
        // alert("Removed from cart");
		setMsg({
			title:'Success!',
			message:`${item.name} removed from Cart`
		})
        setproducts_mobile(e.data);
        updateprice(e.data);
      })
      .catch((err) => console.log(err));
  }

  const msgHandler=()=>{
    setMsg(null);
}

  const listItems = products_mobile.map((item) => (
    <div className="CartCard" key={item._id}>
      <div className="Cartcard_img">
        <div className="Cardcircle"></div>
        <img src={item.image} alt="mobile-product" />
      </div>
      <div className="Cartcard_content">
        <div>
          <h2>{item.name}</h2>
          <p>
            <span>{item.currency} </span>
            {item.price}
          </p>
        </div>
        <div>
          <img
            src="./images/wishlist.png"
            className="CartwishlistImg"
            alt="wishlist-icon"
            onClick={(e) => movetowishlist(item, e)}
          />
          <img
            src="./images/dustbin.png"
            className="CartwishlistImg"
            onClick={(e) => removefromcart(item, e)}
          />
        </div>
      </div>
    </div>
  ));

  

  return (
    <div className="MainCartContainer">
      {msg && (
        <Modal title={msg.title} message={msg.message} onConfirm={msgHandler} />
      )}
      <div className="CartCardContainer">
        {listItems.length > 0 ? (
          listItems
        ) : (
          <p>Your cart is Empty ....Continue Shopping !</p>
        )}
      </div>
      {listItems.length > 0 ? (
        <div className="CartSummary">
          <div className="SummaryTitle summary">
            <h1>PRICE SUMMARY</h1>
          </div>
          <div className="SummaryContent summary">
            <h2>Total MRP (Incl. of taxes) </h2>
            <p>₹{price}</p>
          </div>
          <div className="SummaryContent_deliveryfee summary">
            <h2>Delivery Fee </h2>
            <p>₹ 100</p>
          </div>
          <div className="SummaryContent_total summary">
            <h2>Total </h2>
            <p>₹{price + 100}</p>
          </div>
          <div className="CartAddress">
            <h2>Address </h2>
            <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Enter Your Address"/>
          </div>
          <div className="PayButtonContainer">
          <button onClick={(e) => setmodal(true)}>Pay and order</button>
          {
            modal
            ? <Modal title="Success" onConfirm={closemodal} message="Your order has been placed" />
            : null
          }
          </div>
        </div>
      ) : null}
    </div>
  );
}
