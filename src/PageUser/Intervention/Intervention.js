
import React, { Component } from 'react';
import styles from './Intervention.css';

class Intervention extends Component {

    render() {
        return (
            <center> <div className={styles.intervention}>
                <label className={styles.lbl}>spécification :</label>
                <textarea id='spec' cols="50" rows="10" className={styles.specification}></textarea>
                <div className={styles.div3}>               <button className={styles.btn} onClick={()=>this.props.clicked(document.getElementById('spec').value)}>Demander une intervention </button></div>






            </div></center>

        )
    }
}

export default Intervention;