import React from "react";
import styles from "./ProductDs.module.css";
// import ReactStars from "react-rating-stars-component";
import { useHistory } from 'react-router';
const ProductDs = () => {
  const history = useHistory();
  const ok = localStorage.getItem('isLogin');
  if(ok==0){
    history.push("/login");
}
  return (
    <div className={styles["main-container"]}>
      <img src="./images/Mobile_21.png" alt="" />
      <div className={styles["details-container"]}>
        <h2>Apple iPhone 11</h2>
        {/* <ReactStars count={5} size={24} activeColor="#ffd700" /> */}
        <hr />
        <div className={styles["content-container"]}>
          <div>Price: <span>47,900</span></div>
          <ul className={styles['basic-details']}>
              <li>Size name: 64GB</li>
              <li>Colour: (PRODUCT)RED</li>
              <li>Pattern name: iPhone 11</li>
          </ul>
          <table>
              <tr>
                  <th>Model Name</th>
                  <td>IPhone 11</td>
              </tr>
              <tr>
                  <th>Wireless Carrier</th>
                  <td>Unlocked for All Carriers</td>
              </tr>
              <tr>
                  <th>Brand</th>
                  <td>Apple</td>
              </tr>
              <tr>
                  <th>Form Factor</th>
                  <td>Smartphone</td>
              </tr>
              <tr>
                  <th>Memory Storage Capacity</th>
                  <td>64 GB</td>
              </tr>
              <tr>
                  <th></th>
                  <td></td>
              </tr>
          </table>
        </div>
        <hr />
        <div className={styles.description}>
          <ul>  
            <li>6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display</li>
            <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
            <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
            <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
            <li>Face ID for secure authentication</li>
            <li>A13 Bionic chip with third-generation Neural Engine</li>
          </ul>
        </div>
        <button className={styles['addtocart']}>Add to Cart</button>
        <button className={styles['buy']}>Buy</button>
      </div>
    </div>
  );
};

export default ProductDs;
