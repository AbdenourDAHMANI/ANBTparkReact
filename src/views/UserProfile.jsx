/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          
          
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                  <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Nom</label>
                          <Input
                            placeholder="Nom"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Prénom</label>
                          <Input
                            placeholder="Prénom"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Direction</label>
                          <Input
                            placeholder="Direction"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Service
                          </label>
                          <Input placeholder="Service" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Poste</label>
                          <Input
                          placeholder="Poste"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                     
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                      <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                      <FormGroup>
                          <label>Password</label>
                          <Input
                            placeholder="Password"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                    
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit" >
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            
        
        </div>
      </>
    );
  }
}

export default UserProfile;
