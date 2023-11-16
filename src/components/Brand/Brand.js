import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <center>
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SNKRS</h4> */}
     

      {/* https://play-lh.googleusercontent.com/kWXy8EJ9rL4iH2lDxiDv0LYd6DeTPHLbzGXDHwZLvRy5UBhYHezTDm51onReoWZdzjPX */}
      <img
        src="https://play-lh.googleusercontent.com/kWXy8EJ9rL4iH2lDxiDv0LYd6DeTPHLbzGXDHwZLvRy5UBhYHezTDm51onReoWZdzjPX"
        alt="SNIKERS MX"
      />
    </div>
          </center>
  );
};

export default Brand;
