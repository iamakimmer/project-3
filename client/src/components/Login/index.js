//Login component

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, Container, Input, Form, FormGroup, Label } from 'reactstrap';



function Login() {
    return (
        <Container>
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <Card>
                        <CardBody>
                            <h1 className="text-center mb-3">
                                <FontAwesomeIcon icon="id-card" /> Register
                        </h1>


                            <Form>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input type="text" id="name" name="name" className="form-control" placeholder="Joseph Elder"
                                    // value="" 
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="username">Username </Label>
                                    <Input type="username" id="username" name="username" className="form-control" placeholder="JumbotronJoey"
                                    //value=""
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" id="password" name="password" className="form-control" placeholder="Create Password"
                                    //value=""
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password2">Confirm Password</Label>
                                    <Input type="password" id="password2" name="password2" className="form-control" placeholder="********"
                                    //value="" 
                                    ></Input>
                                </FormGroup>
                                <Button type="submit" className="btn btn-primary btn-block mt-5">
                                    Register
                            </Button>
                            </Form>
                            <p className="mx-auto mt-3">Already have an account? <a href="/users/login">Login</a></p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Container>
    );
}

export default Login;


