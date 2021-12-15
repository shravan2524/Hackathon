import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router';
import styles from "./MainHeader.module.css";
export default function MainHeader() {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [chk1,setchk1]=useState(false);
  const [chk2,setchk2]=useState(false);
  const history = useHistory();
  function logout(){
    localStorage.removeItem('email');
      localStorage.setItem('isLogin', 0);
      // history.push("/login");
      window.location.reload();

  }
  // const onHover = (x) => {
  //   if (x == 0) {
  //     setHover(true);
  //   } else if (x == 1) {
  //     setHover1(true);
  //   } else {
  //     setHover2(true);
  //   }
  // };

  // const onLeave = (x) => {
  //   if (x == 0) {
  //     setHover(false);
  //   } else if (x == 1) {
  //     setHover1(false);
  //   } else {
  //     setHover2(false);
  //   }
  // };

  const Listhandler=()=>{
    setchk1(prevchk=>{return !prevchk})
  }
  const MainListHandler=()=>{
    setchk2(prevchk=>{return !prevchk})
  }

  // const MainHeader = (props) => {
  return (
    <React.Fragment>
    <header className={styles["main-header"]}>
      <a href="/">
        <h1 className={styles["main-logo"]}>PlaceHolder</h1>
      </a>
      <nav className={styles["main-nav"]}>
        <div className="sidebar">
        <div className={styles['nav-list-box']}>
              <ul className={styles["nav-list"]}>
                <div className={styles["dropdown"]}>
                  <img
                    src="/images/Account_icon.png"
                    alt="Account"
                  />
                  <div className={styles["dropdown-content"]}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
                <li
                  className={styles["nav-list_item"]}
                >
                  <a href="/wishlist">
                    <img src="/images/heart.png" alt="Wishlist" />
                  </a>
                </li>
                <li
                  className={styles["nav-list_item"]}
                >
                  <a href="/Cart">
                    <img
                      src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-12.jpg"
                      alt="Cart"
                    />
                  </a>
                </li>
              </ul>
              <div>
            <button className={styles['logout-btn']} onClick={logout}>Log out</button>
          </div>

          <div>
            <button class={styles["toggle-button"]} onClick={MainListHandler}>
                <span class={styles["toggle-button__bar"]}></span>
                <span class={styles["toggle-button__bar"]}></span>
                <span class={styles["toggle-button__bar"]}></span>
            </button>
        </div>
        </div>
        </div>
      </nav>
    </header>
              <nav className={`${styles['mobile-nav']} ${!chk2 && styles['displayno']}`}>
              <ul className={styles['mobile-nav_items']}>
                <li className={styles['mobile-nav_item']} onClick={Listhandler}>
                  <a href="/#" className={styles['accounts']}>Account</a>
                </li>
                <ul className={`${styles['mobile-nav-sublist']} ${!chk1 && styles['displayno']}`}>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 2</li>
                  </ul>
                <li className={styles['mobile-nav_item']}>
                  <a href="/wishlist">Wishlist</a>
                </li>
                <li className={styles['mobile-nav_item']}>
                  <a href="/cart">Cart</a>
                </li>
              </ul>
            </nav>
  </React.Fragment>
  );
}
