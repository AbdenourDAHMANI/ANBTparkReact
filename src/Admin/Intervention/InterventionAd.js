import React, { Component } from 'react';
import styles from './InterventionAD.css';

class InterventionAd extends Component {

render(){
return(
        <div className={styles.div1}  onClick={this.props.onClick}>
                        <div className={styles.profa}> 
        <img className={styles.profilea} src="/images/profile.jpg" alt="" />
    </div>
    <p className={styles.name}>Abdenozaur Dahmanadzdadi</p>

    <p className={styles.postea}>Directeur -   Service technique </p>
    <p className={styles.priority}>Priorité :  </p>
    <p className={styles.heure}>13:20 </p>
    <p className={styles.date}>  23/10/2018</p>
    



        </div>

)



}

}
export default InterventionAd;