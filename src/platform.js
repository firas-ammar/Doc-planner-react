import React from 'react';
import Platformbloc from './platformbloc';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import image from "./etoile.png";

const Platform = ({ t }) => {
  return (     
    <div style={{ background: '#e5faf8'}}>
    <Container className="flayer">
    
    <div  id="platform1 col-sm-4">
      <div className="description ">
        <h2 className="description-tlt">The world's biggest healthcare platform</h2>
          <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
          <img className="descriptiont-img" src={image} alt="image"/>
      </div>
    </div>

   
            <div className="descripe" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'spacebetween' }}>
                {t.map((el, index) => <Platformbloc key={index} elem={el}/>)}
            </div>
        </Container></div>
        
      
    )
}
export default Platform;

 