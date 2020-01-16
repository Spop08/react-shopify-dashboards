import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import { Table } from "react-bootstrap";

import MainNav from '../MainNav';
import Footer from '../Footer';

import '../styles.css';

class Pricing extends Component {
    render() {
      return (
        <div style={{background: 'white'}}>
        <MainNav  currentItem="pricing"/>

        <div className="mw-100 p-0 d-flex flex-column justify-content-center align-items-center home-back">
          <Container style={{height: '500px'}} 
                className="text-white d-flex flex-column justify-content-center align-items-center">
            <p><br/></p>
            <h2 className="text-large">Forever Free</h2>
            <p className="text-medium-p py-4">Eprolo believes success comes from helping other entrepreneurs succeed so we keep it free.</p>
          </Container>
        </div>

        <Container style={{marginTop: '100px'}}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Level</th>
                <th><img src="http://www.eprolo.com/img/vip1.png" alt="vip"/></th>
                <th><img src="http://www.eprolo.com/img/vip1.png" alt="vip"/></th>
                <th><img src="http://www.eprolo.com/img/vip3.png" alt="vip"/></th>
                <th><img src="http://www.eprolo.com/img/vip4.png" alt="vip"/></th>
                <th><img src="http://www.eprolo.com/img/vip5.png" alt="vip"/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total sales amount with UDS</td>
                <td>$0 - $3000</td>
                <td>$3000 - $5000</td>
                <td>$5000 - $10000</td>
                <td>$10000 - $20000	</td>
                <td>$20000</td>
              </tr>
              <tr>
                <td>Import Products</td>
                <td>200</td>
                <td>500</td>
                <td>1000</td>
                <td>2000	</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Multiple Items Order Discount</td>
                <td>$ 1 / Per Item</td>
                <td>$ 1 / Per Item</td>
                <td>$ 1 / Per Item</td>
                <td>$ 1 / Per Item	</td>
                <td>$ 1 / Per Item</td>
              </tr>
              <tr>
                <td>UDS Express Shipping</td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
              </tr>
              <tr>
                <td>UDS Express Shipping</td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
              </tr>
              <tr>
                <td>UDS Express Shipping</td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
              </tr>
              <tr>
                <td>UDS Express Shipping</td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
              </tr>
              <tr>
                <td>UDS Express Shipping</td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
                <td><img src="http://www.eprolo.com/img/yes.png" alt="check img"/></td>
              </tr>
            </tbody>
          </Table>
        </Container>

        <Footer />
      </div>
      )
    }
}

export default Pricing;