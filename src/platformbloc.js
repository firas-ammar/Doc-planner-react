import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const Platformbloc = ({ elem }) => {
    return (
        <div className=".col-sm-6" style={{padding:"20px"}}>
            <Card className="tache">
                <CardImg  src={elem.symbo} className="symbole" alt="symbo" />
                <CardBody>
                    <CardTitle className="description-tlt">{elem.leader}</CardTitle>
                    <CardText className="symb-text">{elem.texte}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Platformbloc;