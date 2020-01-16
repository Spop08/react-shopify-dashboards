import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Card } from "react-bootstrap";

import MainNav from '../MainNav';
import Footer from '../Footer';

import './styles.css';
import '../styles.css';

class Home extends Component {
    render() {
      return (
        <div style={{background: 'white'}}>
        <MainNav />

        <div className="mw-100 p-0 d-flex flex-column justify-content-center align-items-center home-back">
          <Container style={{height: '620px'}} 
                className="text-white d-flex flex-column justify-content-center align-items-center">
            <p><br/></p>
            <h2 className="text-large">Start Building Your Brand With UDS</h2>
            <p className="text-medium-p py-4">Free Forever Shopify Dropshipping APP</p>
            <button className="banner-button">Add UDS to Shopify</button>
          </Container>
        </div>

        <Container className="shadow" style={{marginTop: '-100px'}}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className="adv-date">	
                <span>30K+</span>
                <p>30000 users and growing</p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="adv-date">	
                <span>30K+</span>
                <p>30000 users and growing</p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="adv-date">	
                <span>30K+</span>
                <p>30000 users and growing</p>
              </div>
            </Grid>
          </Grid>
        </Container>
        
        <Container style={{marginTop: '100px'}}>
          <Grid container spacing={3}>
            <Grid item xs={6} className="d-flex flex-column justify-content-center">
              <h2 className="text-medium-h">How does UDS work?</h2>
              <h3 className="text-small">1.Install UDS App to your Shopify store.</h3>
              <h3 className="text-small">2.Find a product on UDS, push it to your shopify site.</h3>
              <h3 className="text-small">3.Receive order from customer, pay for the order to UDS.</h3>
              <h3 className="text-small">4.UDS ships order to customer from UDS warehouse.</h3>
            </Grid>
            <Grid item xs={6}>
              <div>	
                <img className="w-100" src="https://shopifyfile.oss-us-west-1.aliyuncs.com/attached/website/imac.png" alt=""/>
              </div>
            </Grid>
          </Grid>
        </Container>
        
        <Container style={{marginTop: '100px'}}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div>	
                <img className="w-100" src="https://shopifyfile.oss-us-west-1.aliyuncs.com/attached/website/iphone.png" alt=""/>
              </div>
            </Grid>
            <Grid item xs={6} style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
              <h2 className="text-medium-h">Why choose Us?</h2>
              <h3 className="text-small">1.We know how to manage your daily orders efficiently from years of dropshipping experiences.</h3>
              <h3 className="text-small">2.Fulfill your orders in bulk and get all your orders shipped from one place, we also do all supply management and quality control for you in the whole process.</h3>
              <h3 className="text-small">3.All packages will be shipped under your company name, we offer customized packing to help you build your brand.</h3>
            </Grid>
          </Grid>
        </Container>
        
        <Container style={{textAlign: 'center', marginTop: '100px'}}>
          <h2 className="main-large-1">UDS Integretes The Following Advantages</h2>
          <div>	
            <img src="https://shopifyfile.oss-us-west-1.aliyuncs.com/attached/website/introduce_img.jpg" alt=""/>
          </div>
        </Container>
        
        <Container style={{textAlign: 'center', marginTop: '100px'}}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Card style={{ width: '18rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px' }}>
                <Card.Img variant="top" src="http://www.eprolo.com/img/xm_4.jpg" style={{width: '90px', height: 'auto'}}/>
                <Card.Body>
                  <Card.Title>KVGP Clothescessories</Card.Title>
                  <Card.Text>
                  The UDS App is a very great App for increasing sales for your business. The App makes ordering so simple and straightforward, all we do is click a button and its smooth sailing. Our products get to our customers in quick time and and that is what we like. We would recommend the UDS App to anyone who wants to grow their business.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ width: '18rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px' }}>
                <Card.Img variant="top" src="http://www.eprolo.com/img/xm_4.jpg" style={{width: '90px', height: 'auto'}}/>
                <Card.Body>
                  <Card.Title>Joris Aerts</Card.Title>
                  <Card.Text>
                  My Shopify store has few hundreds of products and over 40 suppliers from Aliexpress, I lost many clients because some orders are shipped from 2+ Aliexpress suppliers,my clients received many packages from one order. Now i work with UDS and it won`t happen again.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ width: '18rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px' }}>
                <Card.Img variant="top" src="http://www.eprolo.com/img/xm_4.jpg" style={{width: '90px', height: 'auto'}}/>
                <Card.Body>
                  <Card.Title>Jared Nuskey</Card.Title>
                  <Card.Text>
                  So excited to share my story! i know about UDS from their Aliexpress store,i was told they have this App when i start ordering a lot from their store. Most crazy thing is i have one most selling item prepared stock in their US warehouse for free, and it only takes 3-5 days delivery to my clients with my logo on the package!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ width: '18rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px' }}>
                <Card.Img variant="top" src="http://www.eprolo.com/img/xm_4.jpg" style={{width: '90px', height: 'auto'}}/>
                <Card.Body>
                  <Card.Title>Ambaar</Card.Title>
                  <Card.Text>
                  I used this app to add great products to my store. It is very easy to use and add. I would love to have an even bigger choice as I would use only this app. The free worldwide shipping is something I never expected and cannot wait to use my logo on the packages and the best is the app is always free.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
        </Container>
        
        <Footer />
      </div>
      )
    }
}

export default Home;