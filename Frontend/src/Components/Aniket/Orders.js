import React, { Fragment } from "react";

import styles from "./Orders.module.css";
import { useHistory } from 'react-router';

const Orders = () => {

	const history = useHistory();
    const ok = localStorage.getItem('isLogin');
	if(ok==0){
        history.push("/login");
    }

     const tempOrders = [
  	{
  		product_id: 'M1',
  		product_title: 'Apple iPhone 11',
  		product_description:
  			'6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
  		product_price: 54000,
  		product_currency: '₹',
  		product_image: './images/Mobile_21.png',
  	},
  	{
  		product_id: 'M2',
  		product_title: 'OnePlus 9R 5G',
  		product_description:
  			'Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU that performs intense mobile computing at up to 3.2 GHz and also comes with an ultra-fast Qualcomm Adreno 650 GPU for superb on-device experiences.Loaded with Quad rear camera module that features a 48 MP Main camera, 16 MP Ultra Wide angle Camera, 5 MP Macro camera and a 2 MP Monochrome camera. The device also comes with a 16 MP front Camera.6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate. Powerful 4500 mAh with 65 Watt Warp charging capability.Oxygen OS based on Andriod 11',
  		product_price: 39999,
  		product_currency: '₹',
  		product_image: './images/4.png',
  	},
  	{
  		product_id: 'M3',
  		product_title: 'Mi 11X 5G Cosmic Black',
  		product_description:
  			'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool technology .Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera .Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology.Battery: 4520 mAH large battery with 33W fast charger in-box and Type-C connectivity',
  		product_price: 27999,
  		product_currency: '₹',
  		product_image: './images/5.png',
  	},
  ];

  return (
    <div className={styles["main-container"]}>
        <div className={styles["main-orderbox"]}>
        <h1>Your Orders</h1>
        <hr />
           <ul className={styles['list-items']}>
                {tempOrders.map(item=>{
                    return(
						
                        <li className={styles['list-item']}>
                            <img src={item.product_image} alt="" />
                            <div className={styles['details-container']}>
                                <h2>{item.product_title}</h2>
                                <hr />
                                <h3><small>price:</small> &#x20B9; {item.product_price}</h3>
								<div className={styles["pd-container"]}>
								<small>Ordered on: </small>
								</div>
                            </div>
				
                        </li>
						
                    );
                })}
           </ul>
        </div>
      
    </div>
  );
};

export default Orders;
