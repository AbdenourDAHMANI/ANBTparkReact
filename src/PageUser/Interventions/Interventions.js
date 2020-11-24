import React, { Component } from 'react';
import styles from './Interventions.css';
import axios from 'axios';
import { TiArrowBack } from 'react-icons/ti';
import { IconContext } from "react-icons";


class Interventions extends Component {
  constructor() {
    super();
    this.state = {
      interventions: null
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8000/employe/interv/' + this.props.name).then(
      response => { this.setState({ interventions: response.data }); console.log(this.state.interventions) }
    )
  }

  render() {
    return (

      <div className={styles.interventions}>
        <div className={styles.taab}>
          <table>
            <tr>
              <th>N°</th>
              <th>date d'intervention</th>
              <th>Techinicien</th>
              <th>Spécification1</th>
              <th></th>

            </tr>

            <tbody>
              <tr>
            <td>01</td>
            <td>10 novembre 2019 10:08</td>
            <td>Abdelhak ouchar</td>
            <td>Erreur dans le disque dur</td>
            <td className="validate">
  

  <IconContext.Provider value={{ color: "#112569", className: "global-class-name", size: "4em" }}>
    <div className={styles.validate}>
      <TiArrowBack />
      validate
      </div>
  </IconContext.Provider>
        </td>
        </tr>
        <tr>
        <td>02</td>
            <td>14 novembre 2019 13:20</td>
            <td>Abdelhak ouchar</td>
            <td>Erreur dans l'installation du programme microsoft</td>
            <td className="validate">
  

  <IconContext.Provider value={{ color: "#112569", className: "global-class-name", size: "4em" }}>
    <div className={styles.validate}>
      <TiArrowBack />
      validate
      </div>
  </IconContext.Provider>
        </td>
        
        </tr>


   </tbody>
              
              
              
            


          </table></div>
      </div>
    )


  }


}
export default Interventions;