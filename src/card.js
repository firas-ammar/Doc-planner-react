import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import logo from "./tofpat.png";
import logos from "./tofdoc.png";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Visits = (props) => {
  return (
    <Container id="paragraf">
      <Container>
        <Card>
          <CardBody className="card-body" id="patient-card">
            <CardText>
              <small className="text-muted">For patients</small>
            </CardText>
            <CardTitle>Find a doctor, book a visit and solve any health-related doubt</CardTitle>
            <CardImg className="cardimg" id="card-img" src={logo} alt="logo" />
            <UncontrolledDropdown >
              <DropdownToggle id="drop-down" caret>
                CHOOSE COUNTRY
                </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      </Container>
      <Container>
        <Card>
          <CardBody className="card-body" id="doctor-card">
            <CardText>
              <small className="text-muted">For doctors</small>
            </CardText>
            <CardTitle>Save time managing visits and cut no-shows by half</CardTitle>
            <CardImg className="cardimg" id="card-img" src={logos} alt="logos" />
          </CardBody>
        </Card>
      </Container>
    </Container>

  );
};

export default Visits;


