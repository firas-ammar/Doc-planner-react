import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import logo from "./etoile.png";

const Example1 = (props) => {
    return (
<Container id="titre"> 
    <img width="40px" src={logo} alt="logo"/>
    <h2> Making the healthcare experience more human </h2>
    <Container  id="paragraf"> 
          <Container>
        <p> We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.         </p> 
          
        </Container>
            <Container>

                <p> We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.    </p>
      
             </Container>
    </Container>
</Container>
  )
}

export default Example1;
