import React from 'react';

import styles from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={styles['main-header']}>
      <a href="/"><h1 className={styles['main-logo']}>PlaceHolder</h1></a>
      <nav className={styles['main-nav']}>
          <ul className={styles['nav-list']}>
              <li className={styles['nav-list_item']}><a href="/"><img src='/images/Account_icon.png' alt="Account" /></a></li>
              <li className={styles['nav-list_item']}><a href="/wishlist"><img src='/images/heart.png' alt="Whishlist" /></a></li>
              <li className={styles['nav-list_item']}><a href="/"><img src="/images/cart.png" className={styles['headerCartIcon']} alt="Cart"/></a></li>          
              </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
