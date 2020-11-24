import React, { useState } from "react";
import axios from 'axios';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Button,
    Collapse, Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
let Nint = null;
let Ntech = null;

class Interventions extends React.Component {

    componentDidMount() {


        axios.get('http://localhost:8000/admin/interventionsNonAffect')
            .then(response => {


                this.setState({ interventionsNonAffect: response.data });
            })



        axios.get('http://localhost:8000/admin/techniciens')
            .then(response => {

                this.setState({ techniciens: response.data });
            })




        axios.get('http://localhost:8000/admin/interventionsNonEffect')
            .then(response => {
                this.setState({ interventionsNonValid: response.data });
            })



        axios.get('http://localhost:8000/admin/interventionsNonValid')
            .then(response => {
                console.log(response.data)
                this.setState({ interventionsNonEffect: response.data });
            })





    }
    constructor() {
        super()
        this.state = {
            modal: false,
            techniciens: [],
            interventionsNonAffect: [],
            interventionsNonValid: [],
            interventionsNonEffect: [],
        }

    }

    tet(index) { Ntech = index; console.log(Ntech) }
    toggle() {


        ; this.setState({ modal: !this.state.modal })



    }
    toggleass(interv) {

        Nint = interv;
        console.log(interv);
        this.setState({ modal: !this.state.modal })



    }



    assigneint() {
        let data = {
            numInterv: Nint,
            numIdTech: Ntech
        }
        console.log(data.numInterv, data.numIdTech)
        if ((Nint) && (Ntech))
            axios.post('http://localhost:8000/admin/affecterIntervention', data).then(response => console.log(response))
        {



        }
    }

    render() {

        return (
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Interventions demandées</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>N°</th>
                                            <th>date demande </th>
                                            <th>Employé</th>
                                            <th className="text-center">specification</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody >

                                    <tr>

<td >1</td>
<td>2019-10-07 09:05:37</td>
<td>DAHMANI Abdenour</td>
<td className="text-center">Erreur disque dur</td>
<td className="text-right">
    <Button size='sm' color='info' onClick={() => this.toggleass(3)}>assigner</Button>
    <Modal size='lg' isOpen={this.state.modal} toggle={() => this.toggle()} >
        <ModalHeader toggle={() => this.toggle()}>Modal title</ModalHeader>
        <ModalBody>
            <Table hover dark   >
                <thead>
                    <tr >
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>


                   
                        <tr onClick={() => this.tet(3)}>

                            <td>01</td>
                            <td>OUCHAR</td>
                            <td>Abdelhak</td>
                            <td>ga_ouchar@esi.dz</td>
                        </tr>

                    
                    







                </tbody>
            </Table>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={() => this.assigneint()}>Assigner au téchnicien</Button>{' '}

        </ModalFooter>
    </Modal>
</td>

</tr>


                                        
                                        {/* {
                                            (this.state.interventionsNonAffect.length !== 0) ?


                                                this.state.interventionsNonAffect.map((item, index) =>
                                                    <tr>

                                                        <td >{item.numInterv}</td>
                                                        <td>{item.dateDemande}</td>
                                                        <td>{item.numIdEmploye}</td>
                                                        <td className="text-center">{item.specification}</td>
                                                        <td className="text-right">
                                                            <Button size='sm' color='info' onClick={() => this.toggleass(item.numInterv)}>assigner</Button>
                                                            <Modal size='lg' isOpen={this.state.modal} toggle={() => this.toggle()} >
                                                                <ModalHeader toggle={() => this.toggle()}>Modal title</ModalHeader>
                                                                <ModalBody>
                                                                    <Table hover dark   >
                                                                        <thead>
                                                                            <tr >
                                                                                <th>#</th>
                                                                                <th>First Name</th>
                                                                                <th>Last Name</th>
                                                                                <th>Username</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>


                                                                            {this.state.techniciens.map((item, index) =>
                                                                                <tr onClick={() => this.tet(item.numidtech)}>

                                                                                    <td>{item.numidtech}</td>
                                                                                    <td>{item.nom}</td>
                                                                                    <td>{item.prenom}</td>
                                                                                    <td>{item.email}</td>
                                                                                </tr>

                                                                            )
                                                                            }







                                                                        </tbody>
                                                                    </Table>
                                                                </ModalBody>
                                                                <ModalFooter>
                                                                    <Button color="primary" onClick={() => this.assigneint()}>Do Something</Button>{' '}

                                                                </ModalFooter>
                                                            </Modal>
                                                        </td>

                                                    </tr>
                                                ) : null
                                        }
 */}

                                        {


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
                                <CardTitle tag="h4">Interventions assignées </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>N°</th>
                                            <th>date demande </th>
                                            <th>Employé</th>
                                            <th>Date d'assignation</th>
                                            <th>Technicien</th>
                                        </tr>
                                    </thead>
                                    <tbody>



                                            <tr>

                                         <td>02</td>
                                                   <td>2019-10-13 15:19:05</td>
                                                     <td>Abdenour Dahmani</td>
                                                     <td >2019-10-23 18:02:43</td>
                                           <td >OUCHAR Abdenlhak</td>


                                            </tr>

                                        {

                                            // (this.state.interventionsNonValid.length !== 0) ?


                                            //     this.state.interventionsNonValid.map((item, index) => <tr>
                                            //         <td>{item.numInterv}</td>
                                            //         <td>{item.dateDemande}</td>
                                            //         <td>{item.numIdEmploye}</td>
                                            //         <td className="text-center">{item.dateAffect}</td>
                                            //         <td className="text-right">{item.numIdTech}</td>
                                            //     </tr>) : null


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
                                <CardTitle tag="h4">Interventions Valideés</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>date demande </th>
                                            <th>Employé</th>
                                            <th>specification</th>
                                            <th>Date d'assignation</th>
                                            <th>Technicien</th>
                                            <th className="text-center">Observation du technicien</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {

                                            (this.state.interventionsNonEffect.length !== 0) ?


                                                this.state.interventionsNonEffect.map((item, index) => <tr>

                                                    <td>{item.dateDemande}</td>
                                                    <td>{item.numIdEmploye}</td>
                                                    <td >{item.specification}</td>
                                                    <td className="text-center">{item.numInterv}</td>
                                                    <td className="text-right"></td>
                                                </tr>) : null


                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )


    }
}

export default Interventions;