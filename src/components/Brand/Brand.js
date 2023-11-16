import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SNKRS</h4> */}
      <h1>Mi Imagen</h1>

      {/* https://play-lh.googleusercontent.com/kWXy8EJ9rL4iH2lDxiDv0LYd6DeTPHLbzGXDHwZLvRy5UBhYHezTDm51onReoWZdzjPX */}
      <img
        src="https://play-lh.googleusercontent.com/kWXy8EJ9rL4iH2lDxiDv0LYd6DeTPHLbzGXDHwZLvRy5UBhYHezTDm51onReoWZdzjPX"
        alt="SNIKERS MX"
      />
    </div>
  );
};

export default Brand;
