import React, { Component } from 'react';
import styles from './Interface.css';
import Nav from './Nav'
import InterventionAd from '../Intervention/InterventionAd';
import Technicien from '../Techniciens/Technicien';


class Interface extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedIndex: null };
    }
    taste() {

        
    }
    

    render() {

        
let Interventiona=[["first",["1","abdelhak ouchar","30/9/2019","2"]],["first",["2","abde","abde","abde"]],["first",["3","abde","abde","abde"]],["first",["4","abde","abde","abde"]]];
        let Buttons = ["Interventions en attentes", "Interventions en attentes assignées", "Interventions Validées", "Liste des techniciens", "Listes des machines", "Stats"];
        return (

            <div>
                <Nav />

                <div className={styles.blueback}>
                    <div className={styles.btngroup}>
                        { Buttons.map((item, index) =>
                            <button key={index} name={index} className={index === this.state.selectedIndex ? styles.buttonclicked : styles.button}
                                onClick={() => this.setState({ selectedIndex: index })}>{item}</button>
                        )}


                    </div>

                </div>

                <div className={styles.whiteback}>
              {
               (this.state.selectedIndex===3)  ? <Technicien  Intervention={Interventiona}/>:null
              } 
                {
               (this.state.selectedIndex===0)  ?  <div><InterventionAd/><InterventionAd/><InterventionAd/><InterventionAd/><InterventionAd/>
               <InterventionAd/><InterventionAd/><InterventionAd/><InterventionAd/>
               <InterventionAd/><InterventionAd/>  </div> :null
              } 
                </div>

            </div>
        )
    }

}
export default Interface;