import React from 'react';
import "./Product.css";
import axios from 'axios';
import Modal from '../UI/Modal';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

export default function MainProductsPage(props) {
    const [msg, setMsg] = useState();
    const {data} = props;
    console.log("category_products, ", props.detail);
    const email = "shitalbokade5@gmail.com";
    const history = useHistory();
  const ok = localStorage.getItem('isLogin');
  if(ok==0){
    history.push("/login");
}

    const [products, setproducts] = useState([ {
        product_id : 'M1',
        product_title :'Apple iPhone 11',
        product_description:'6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
        product_price:54000,
        product_currency:'₹',
        product_wishlist : false,
        product_image:'./images/Mobile_21.png'
    },
    {
        product_id : 'M2',
        product_title :'OnePlus 9R 5G',
        product_description:'Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU that performs intense mobile computing at up to 3.2 GHz and also comes with an ultra-fast Qualcomm Adreno 650 GPU for superb on-device experiences.Loaded with Quad rear camera module that features a 48 MP Main camera, 16 MP Ultra Wide angle Camera, 5 MP Macro camera and a 2 MP Monochrome camera. The device also comes with a 16 MP front Camera.6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate. Powerful 4500 mAh with 65 Watt Warp charging capability.Oxygen OS based on Andriod 11',
        product_price:39999,
        product_currency:'₹',
        product_wishlist : false,
        product_image:'./images/4.png'
    },
    {
        product_id : 'M3',
        product_title :'Mi 11X 5G Cosmic Black',
        product_description:'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool technology .Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera .Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology.Battery: 4520 mAH large battery with 33W fast charger in-box and Type-C connectivity',
        product_price:27999,
        product_currency:'₹',
        product_wishlist : false,
        product_image:'./images/5.png'
    },
    {
        product_id : 'M4',
        product_title :'OnePlus 9 Pro 5G',
        product_description:'Rear Quad Camera Co-Developed by Hasselblad .48 MP Main camera. 50 MP Ultra Wide Angle Camera with Sensor size of 1/1.56 8 MP Telephoto Lens 2 MP Monochorme Lens 16 MP Front Camera.Qualcomm Snapdragon 888 Processor with Adreno 660 GPU.6.7 Inches Fluid AMOLED Display with 120Hz refresh rate with Latest LTPO technology.OnePlus Oxygen OS based on Andriod 11',
        product_price:69999,
        product_currency:'₹',
        product_wishlist : false,
        product_image:'./images/6.png'
    },
    {
        product_id : 'M5',
        product_title :'Apple iPhone 11',
        product_description:'6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
        product_price:54000,
        product_currency:'₹',
        product_wishlist : false,
        product_image:'./images/3.png'
    },
    {
        product_id : 'M6',
        product_title :'OPPO F19 Pro + 5G ',
        product_description:'6.43" inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels. Larger Screen to Body ratio of 90.8%, In-display Fingerprint 3.0.Mediatek Dimensity 800U 5G Supports Dual 5G or 4G Sim. Powerful 2.4 ghz Octa-core Processor, Support LPDDR4x memory and latest UFS 2.1 storage.4310 mAH Lithium Polymer Battery with 50W Flash Charging Technology.48MP Quad Camera ( 48MP Main + 8MP wide angle macro + 2MP portrait mono lens + 2MP Macro mono lens) - 16MP Front Camera.',
        product_price:25990,
        product_currency:'₹',
        product_wishlist : false,
        product_image:'./images/7.png'
    },
    {
        product_id : 'M7',
        product_title :'Vivo X60 Pro',
        product_description:'6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
        product_price:49000,
        product_currency:'₹',
        product_wishlist : false,
        product_image:'./images/8.png'
    },
    {
        product_id : 'M8',
        product_title :'Apple iPhone 12 Pro Max',
        product_description:'6.7-inch (17 cm diagonal) Super Retina XDR display .Ceramic Shield, tougher than any smartphone glass.A14 Bionic chip, the fastest chip ever in a smartphone.Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording .LiDAR Scanner for improved AR experiences, Night mode portraits.12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
        product_price:129900,
        product_currency:'₹',
        product_wishlist : false,
        product_image:'./images/9.png'
    },]);

    useEffect(() => {
        axios.post("https://web-store165.herokuapp.com/api/wishlist", {email} )
        .then((ee)=>{
            console.log(ee.data, "adnad");
            let temp = [];
                products.forEach(ele => {
                    ee.data.forEach(x => {
                        if(x._id == ele.product_id){
                            ele.product_wishlist = true;
                        } 
                    });
                    temp.push(ele);
                });
                setproducts(temp);
            console.log(temp, "Adada", ee.data);
        })
        .catch((err) => console.log(err));
    }, [])


    // setproducts(products_mobile);
    function addtocart(item, e){
        console.log("afjhsnkfln");
        axios.post("https://web-store165.herokuapp.com/api/addtocart", { email, item })
        .then((e) => {
            console.log(e.data);
            console.log(item);
            // alert("Added to Cart");
            setMsg({
                title:'Sucess',
                message:`${item.product_title} Added to Cart`
            })
        })
        .catch((err) => console.log(err));
    }
    function add_to_product_wishlist(item, e, ok){
        // console.log(item , e);
        // console.log("item");
        item.product_wishlist = ok;
        console.log(item , e);
        if(ok===true){
        axios.post("https://web-store165.herokuapp.com/api/addtowishlist", {item,email} )
        .then((ee)=>{
            console.log(ee.data, "adnad");
            let temp = [];
                products.forEach(ele => {
                    ee.data.forEach(x => {
                        if(x._id == ele.product_id){
                            ele.product_wishlist = true;
                        } 
                    });
                    temp.push(ele);
                });
                setproducts(temp);
            console.log(products, ok);
            // alert("Added to product_wishlist");
        })
        .catch((err) => console.log(err));
    }
    else{
        axios.post("https://web-store165.herokuapp.com/api/removefromwishlist", {item,email})
        .then((ee)=>{
            console.log(ee.data, "adnad");
            let temp = [];
                products.forEach(ele => {
                    ee.data.forEach(x => {
                        if(x._id == ele.product_id){
                            ele.wishlist = true;
                        } 
                    });
                    temp.push(ele);
                });
                setproducts(temp);
            console.log(products, "ok");
            // alert("Added to product_wishlist");
        })
        .catch((err) => console.log(err));
    }
    }

   
    const listItems = products.map((item) =>
    <div className="card" key={item.product_id} >
        <div style={{display : "flex"}}>
        <div className="card_img">
            <div className="circle"></div>
            <img src={item.product_image} alt='mobile-product'/>
        </div>
        <div style={{border:"1px solid #383737", height:"max-content", borderRadius : "2rem", padding:"0.4rem"}} >
            {/* <img src='./images/wishlit.png' onClick={(e) => add_to_product_wishlist(item, e)}  className='product_wishlistImg' alt={AiOutlineHeart} /> */}
            {/* <AiOutlineHeart onClick={(e) => add_to_product_wishlist(item, e)} size = {35} color='white' style={{position:"relative", top:"3px"}} /> */}
            {
                (item.product_wishlist===false)
                ? <AiOutlineHeart onClick={(e) => add_to_product_wishlist(item, e, true)} size = {35} color='grey' style={{position:"relative", top:"3px"}} />
                : <AiFillHeart onClick={(e) => add_to_product_wishlist(item, e, false)} size = {35} color='#FEA91E' style={{position:"relative", top:"3px"}} />
            }
            </div>
        </div>
        <div className="card_content">
            <div>
            <h2>{item.product_title}</h2>
            <p><span>{item.product_currency} </span>{item.product_price}</p>
            </div>
            
        </div>
        <div>
        <button onClick={(e) => addtocart(item, e)}>Add to Cart</button>
            </div>
    </div>
);

const msgHandler=()=>{
    setMsg(null);
}

return (
  <div className='main_content'>
      {msg &&
      <Modal 
        title={msg.title}
        message={msg.message}
        onConfirm={msgHandler}
      />
      }
      <h1>Mobiles</h1>
      {listItems}
  </div>
)
}
