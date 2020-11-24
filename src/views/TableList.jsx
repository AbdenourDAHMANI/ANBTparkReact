
import React from "react";
import axios from 'axios';


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {

  componentDidMount(){
axios.get('http://localhost:8000/employe/').then(response=>this.setState({data:response.data}))

axios.get('http://localhost:8000/admin/techniciens')
.then(response => {

    this.setState({ techniciens: response.data });
})


  }

  constructor(){


    super();
    this.state={data:[],techniciens:[]}
  }
  render() {
    return (
      <>
        <div className="content">
        <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Liste des Techniciens</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>prénom</th>
                        <th>email</th>
                        <th>enFonction</th>
                      </tr>
                    </thead>
                    
                      

<tbody>



<tr>
          <td>OUCHAR</td>
          <td>Abdelhak</td>
          <td>ga_ouchar@esi.dz</td>
          <td>oui</td>
</tr>

<tr>
          <td>KADI</td>
          <td>FOUAD</td>
          <td>gk_fouad@esi.dz</td>
          <td>oui</td>
</tr>

<tr>
          <td>ZELLAT</td>
          <td>Abdelkhalek</td>
          <td>ha_zellat@esi.dz</td>
          <td>oui</td>
</tr>

<tr>
          <td>test</td>
          <td>test</td>
          <td>gtest@esi.dz</td>
          <td>non</td>
</tr>

<tr>
          <td>DERRAS</td>
          <td>khalil</td>
          <td>gk_derras@esi.dz</td>
          <td>non</td>
</tr>

   
{
                        // this.state.techniciens.map((item,index)=>
                       
                        //      <tr>
                        //       <td key={index}>{item.nom}</td>
                        //       <td key={index + '1'}>{item.prenom}</td>
                        //       <td key={index+ '2' }>{item.email}</td>
                        //       <td key={index+ '3' }>{item.service}</td>

                        //       </tr>
                            

                        
                        // )


                    }
                </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Liste des Employés</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>prénom</th>
                        <th>email</th>
                        <th className="text-center">enFonction</th>
                      </tr>
                    </thead>
                    <tbody>
                      



            

                    <tr>
          <td>DAHMANI</td>
          <td>Abdenour</td>
          <td>ga_dahmani@esi.dz</td>
          <td>oui</td>
</tr>
<tr>
          <td>emplye2</td>
          <td>employe2</td>
          <td>employe2</td>
          <td>oui</td>
</tr>


<tr>
          <td>emplye1</td>
          <td>employe1</td>
          <td>employe1</td>
          <td>oui</td>
</tr>

<tr>
          <td>emplye3</td>
          <td>employe3</td>
          <td>employe3</td>
          <td>non</td>
</tr>


                      
                    {
                        // this.state.data.map((item,index)=>
                       
                        //      <tr>
                        //       <td key={index}>{item.nom}</td>
                        //       <td key={index + '1'}>{item.prenom}</td>
                        //       <td key={index+ '2' }>{item.email}</td>
                        //       <td key={index+ '3' }>{item.service}</td>

                        //       </tr>
                            

                        
                        // )


                    }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
        </div>
      </>
    );
  }
}

export default Tables;
