import React from 'react';
import Carta from './carta';
import { Container, Row, Col } from 'reactstrap';
import { wrap } from 'module';



const Treecard = ({ x }) => {
    return (
        <Container>

            <div className="mx-auto" style={{ display: 'flex', justifyContent: 'spacebetween', flexWrap:'wrap' }}>
                {x.map((el, index) => <Carta key={index} element={el}/>)}
            </div>
        </Container>

    )
}
export default Treecard;