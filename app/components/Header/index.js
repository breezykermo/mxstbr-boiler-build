/**
 * The Header component, runs across the top
 */

import React, { PropTypes } from 'react';

import styles from './styles.css';

function Header(props) {
  return (
    <nav>
      <div className={styles.hero}>{props.header}</div>
      <div className={styles.pillContainer}>
        {props.routes ?
          props.routes.map(item => <div className={styles.pill}>{item}</div>)
          : null}
      </div>
    </nav>
  );
}

Header.propTypes = {
  header: PropTypes.string,
  routes: PropTypes.array,
};

export default Header;
