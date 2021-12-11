import React from 'react';
import { useState } from 'react';


import styles from './MainHeader.module.css';
export default function MainHeader(){
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const onHover = (x) => {
    if(x==0){
      setHover(true);
    }
    else if(x==1){
      setHover1(true);
    }
    else{
    setHover2(true);
    }
    
  };

  const onLeave = (x) => {
    if(x==0){
      setHover(false);
    }
    else if(x==1){
      setHover1(false);
    }
    else{
    setHover2(false);
    }
  };

// const MainHeader = (props) => {
  return (
    <header className={styles['main-header']}>
      <a href="/"><h1 className={styles['main-logo']}>PlaceHolder</h1></a>
      <nav className={styles['main-nav']}>
        <div className='sidebar'>
        <div className='nav-list-box'>
        <div className='side-text'>
          <ul className={styles['nav-list']}>
              <li onMouseEnter={(e) => onHover(0)}
      onMouseLeave={(e) => onLeave(0)} className={styles['nav-list_item']}><a href="/"><img src='/images/Account_icon.png' alt="Account" /></a></li>
              {
                hover
                ?<div style={{position : "relative", top:"10px"}}>Profile</div>
                :null
                }
              <li onMouseEnter={(e) => onHover(1)}
      onMouseLeave={(e) => onLeave(1)} className={styles['nav-list_item']}><a href="/wishlist"><img src='/images/heart.png' alt="Wishlist" /></a></li>
              <li>{
                hover1
                ?<div>Wishlist</div>
                :null
                }</li>
              <li onMouseEnter={(e) => onHover(2)}
      onMouseLeave={(e) => onLeave(2)} className={styles['nav-list_item']}><a href="/"><img src="/images/cart.png" className={styles['headerCartIcon']} alt="Cart"/></a></li>          
              <li>{
                hover2
                ?<div>Cart</div>
                :null
                }</li>
              </ul>
        </div>
        </div>
        </div>      
    </nav>
    </header>
  )
 }

 