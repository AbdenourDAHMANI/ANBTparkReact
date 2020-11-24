import React, { Component } from 'react';
import styles from './Nav.css';


class Nav extends Component {



    render() {

        return  <div className={styles.nav}>
        <p className={styles.name}>Abdenour Dahmaniadazs</p>

        <div className={styles.prof}>
            <img className={styles.profile} src="/images/profile.jpg" alt="" />
        </div>

    </div>
    }
}
export default Nav;