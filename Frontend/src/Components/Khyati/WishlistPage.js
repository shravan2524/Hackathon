import React from "react";
import "./Product.css";
import Modal from "../UI/Modal";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router';

export default function WishlistPage() {
  const email = "shitalbokade5@gmail.com";
  const history = useHistory();
  const ok = localStorage.getItem('isLogin');
  if(ok==0){
    history.push("/login");
}
  // const products_mobile = [
  //     {
  //         product_id : 'M1',
  //         product_title :'Apple iPhone 11',
  //         product_description:'6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
  //         product_price:54000,
  //         product_currency:'₹',
  //         product_image:'./images/Mobile_21.png'
  //     },
  //     {
  //         product_id : 'M2',
  //         product_title :'OnePlus 9R 5G',
  //         product_description:'Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU that performs intense mobile computing at up to 3.2 GHz and also comes with an ultra-fast Qualcomm Adreno 650 GPU for superb on-device experiences.Loaded with Quad rear camera module that features a 48 MP Main camera, 16 MP Ultra Wide angle Camera, 5 MP Macro camera and a 2 MP Monochrome camera. The device also comes with a 16 MP front Camera.6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate. Powerful 4500 mAh with 65 Watt Warp charging capability.Oxygen OS based on Andriod 11',
  //         product_price:39999,
  //         product_currency:'₹',
  //         product_image:'./images/4.png'
  //     },
  //     {
  //         product_id : 'M3',
  //         product_title :'Mi 11X 5G Cosmic Black',
  //         product_description:'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool technology .Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera .Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology.Battery: 4520 mAH large battery with 33W fast charger in-box and Type-C connectivity',
  //         product_price:27999,
  //         product_currency:'₹',
  //         product_image:'./images/5.png'
  //     },
  //     {
  //         product_id : 'M4',
  //         product_title :'OnePlus 9 Pro 5G',
  //         product_description:'Rear Quad Camera Co-Developed by Hasselblad .48 MP Main camera. 50 MP Ultra Wide Angle Camera with Sensor size of 1/1.56 8 MP Telephoto Lens 2 MP Monochorme Lens 16 MP Front Camera.Qualcomm Snapdragon 888 Processor with Adreno 660 GPU.6.7 Inches Fluid AMOLED Display with 120Hz refresh rate with Latest LTPO technology.OnePlus Oxygen OS based on Andriod 11',
  //         product_price:69999,
  //         product_currency:'₹',
  //         product_image:'./images/6.png'
  //     },
  //     {
  //         product_id : 'M5',
  //         product_title :'Apple iPhone 11',
  //         product_description:'6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
  //         product_price:54000,
  //         product_currency:'₹',
  //         product_image:'./images/3.png'
  //     },
  //     {
  //         product_id : 'M6',
  //         product_title :'OPPO F19 Pro + 5G ',
  //         product_description:'6.43" inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels. Larger Screen to Body ratio of 90.8%, In-display Fingerprint 3.0.Mediatek Dimensity 800U 5G Supports Dual 5G or 4G Sim. Powerful 2.4 ghz Octa-core Processor, Support LPDDR4x memory and latest UFS 2.1 storage.4310 mAH Lithium Polymer Battery with 50W Flash Charging Technology.48MP Quad Camera ( 48MP Main + 8MP wide angle macro + 2MP portrait mono lens + 2MP Macro mono lens) - 16MP Front Camera.',
  //         product_price:25990,
  //         product_currency:'₹',
  //         product_image:'./images/7.png'
  //     },
  //     {
  //         product_id : 'M7',
  //         product_title :'Vivo X60 Pro',
  //         product_description:'6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
  //         product_price:49000,
  //         product_currency:'₹',
  //         product_image:'./images/8.png'
  //     },
  //     {
  //         product_id : 'M8',
  //         product_title :'Apple iPhone 12 Pro Max',
  //         product_description:'6.7-inch (17 cm diagonal) Super Retina XDR display .Ceramic Shield, tougher than any smartphone glass.A14 Bionic chip, the fastest chip ever in a smartphone.Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording .LiDAR Scanner for improved AR experiences, Night mode portraits.12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
  //         product_price:129900,
  //         product_currency:'₹',
  //         product_image:'./images/9.png'
  //     },
  // ]
  const [msg, setMsg] = useState();
  const [products_mobile, setproducts_mobile] = useState([]);
  function remove(item, e) {
    console.log(item);
    axios
      .post("https://web-store165.herokuapp.com/api/removefromwishlist", { email, item })
      .then((e) => {
        console.log(e.data);
        // alert("Removed from Wishlist");
        setMsg({
            title:'Sucess',
            message:`${item.name} has been removed from wishlist`
        })
        setproducts_mobile(e.data);
      })
      .catch((err) => console.log(err));
  }
  function movetocart(item, e) {
    console.log(item);
    axios
      .post("https://web-store165.herokuapp.com/api/movetocart", { email, item })
      .then((e) => {
        console.log(e.data);
        // alert("Moved to Cart");
        setMsg({
            title:'Sucess',
            message:`${item.name} has been moved to cart`
        })
        setproducts_mobile(e.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .post("https://web-store165.herokuapp.com/api/getwishlist", { email })
      .then((e) => {
        console.log(e.data[0].wish);
        setproducts_mobile(e.data[0].wish);
      })
      .catch((err) => console.log(err));
  }, []);

  const msgHandler=()=>{
    setMsg(null);
}

  const listItems = products_mobile.map((item) => (
    <div className="card" key={item._id}>
      <div className="card_img">
        <div className="circle"></div>
        <img src={item.image} alt="mobile-product" />
      </div>
      <div className="card_content">
        <div>
          <h2>{item.name}</h2>
          <p>
            <span>{item.currency} </span>
            {item.price}
          </p>
        </div>
        
      </div>
      <div>
        <button onClick={(e) => remove(item, e)}>Remove from Wishlist</button>
      </div>
      <div>
        <button onClick={(e) => movetocart(item, e)}>Move to Cart</button>
      </div>
    </div>
  ));

  return (
    <div className="main_content">
      {msg && (
        <Modal title={msg.title} message={msg.message} onConfirm={msgHandler} />
      )}
      <h1>Your Wishlist</h1>
      {listItems.length > 0 ? listItems : <p>Your Wishlist is Empty !</p>}
    </div>
  );
}
