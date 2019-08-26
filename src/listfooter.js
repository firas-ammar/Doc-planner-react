import React from 'react';
import Firstfooter from './firstfooter';
import { Container, Row, Col } from 'reactstrap';



const Treefooter = ({ a }) => {
    return (

        <footer>
            <Container >

                <div class="baspage" style={{ display:'flex' }}>
                    <p><small>We are leaders in 10 countries:</small>

                        <div className="abc" style={{ display:'flex', justifyContent:'spacebetween' }}>
                            {a.map((el, index) => <Firstfooter key={index} city={el} />)}
                        </div>
                        <small>and</small>
                        <a href="#"> <small>Chile.</small></a></p>
                </div>
                <center><div class="cookies">
                    <p><small>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</small></p>
                    <p><small>www.docplanner.com © 2019</small></p>
                </div></center>

            </Container>
        </footer>
    )
}
export default Treefooter;
