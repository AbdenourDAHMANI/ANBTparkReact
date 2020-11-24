import React, { Component } from 'react';
import styles from './Technicien.css';



class Technicien extends Component {
    render() {

        return (


            <div className={styles.divv}>

                <table> <tbody>
                    <tr>
                        <th>images</th><th>N°</th>
                        <th>Nom</th>
                        <th>date de recruitement</th>
                        <th>Spécification1</th>
                    </tr>



                    {this.props.Intervention.map((item, index) => {
                        return (<tr key={index}>
                            <td> <div className={styles.prof}>
                                <img className={styles.profile} src="/images/profile.jpg" alt="" />
                            </div></td>
                            {item[1].map((item1, index2) => <td key={index2}> {item1}</td>)}


                        </tr>)
                    })

                    }



                </tbody>
                </table>




            </div>












        )

    }
}
export default Technicien;