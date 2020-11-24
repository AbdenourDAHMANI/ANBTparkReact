import React, { Component } from 'react';
import styles from './PageUser.css';
import axios from 'axios';
import Intervention from './Intervention/Intervention'
import Interventions from './Interventions/Interventions';

let numIdEmploye = null

class Page extends Component {
    constructor(){
        super()
        this.state={
            name:null,
            poste:null,
            service:null,
            machine:null,
        
            page:1,


        }
    }
componentDidMount(){
    axios.get('http://localhost:8000/employe/'+ this.props.name)
    .then((response)=>{
        numIdEmploye=response.data[0].numid
        this.setState({name : response.data[0].nom+' '+response.data[0].prenom,poste:response.data[0].poste,
        service:response.data[0].service,
    }) }  ).then(
    axios.get('http://localhost:8000/employe/mach/'+ this.props.name)
    .then(respons=> this.setState({machine: respons.data[0].identpc +' - ' +respons.data[0].adrip+  respons.data[0] + ' - '+ respons.data[0].adrmac  + ' - '+respons.data[0].fabricant    })  ))

}


demandedintervention=()=> {

this.setState({page:2,})


}
consulterinterventions=()=>{
    this.setState({page:3,}) 
}
Click=(text)=>{ 
        let body ={
            numInterv:10 ,
            specification:text,
            numIdEmploye:numIdEmploye


        }
        axios.get('http://localhost:8000/employe',this.props.name)
        .then(
            (response)=>{
               
                console.log(response.data )
                axios.post('http://localhost:8000/intervention/addInterv',body)
                .then(response=>console.log(response))
            }
           )
        


    this.setState({page:1,}) }
    render() {
return(

    
    <div >
        
    <div className={styles.prof}>
        <img className={styles.profile} src="/images/profile.jpg" alt="" />
    </div>
    <div className={styles.name}>
        <p className={styles.nom}>    
        {/* {this.state.name}             */}
        DAHMANI Abdenour
        </p>

    </div>

    <div className={styles.poste}>
        <p className={styles.nomposte}>
            {/* {this.state.poste} */}
            POSTE
            </p>

    </div>
    <div className={styles.service}>
        <p className={styles.nomservice}>
            {/* {this.state.service} */}
            Service Technique
            </p>

    </div>


    <div className={styles.machine}>
        <p className={styles.nommachine}>
            {/* {this.state.machine} */}
            Dell LATITUDE 7720 xps 6eme génération
            </p>

    </div>

    <div className={styles.div1}><button className={styles.btn} onClick={this.demandedintervention}>Demander une intervention </button> </div>


    <div className={styles.div2}> <button className={styles.btn} onClick={this.consulterinterventions}>Consulter les interventions  </button> </div>
    {(this.state.page===2)?<Intervention clicked={this.Click}/>:null}
    {(this.state.page===3)?<Interventions name={this.props.name}/>:null}
    
    </div>)

    }


}

export default Page;