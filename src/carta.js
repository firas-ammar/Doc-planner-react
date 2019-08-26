
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const Carta = ({ element }) => {
    return (
<div >
            <Card>
                <CardBody>
                <CardImg  src={element.image} className="cartimg" alt="image cap"/>
                <div className="bloc1" style={{display: 'flex', justifyContent:'space-between'}}>
                    <CardTitle className="card-titre">{element.titre}</CardTitle>
                    <Button color="primary" size="sm">SEE OPENINGS</Button>{' '}
                    </div>
                </CardBody>
            </Card></div>


    );
};

export default Carta;