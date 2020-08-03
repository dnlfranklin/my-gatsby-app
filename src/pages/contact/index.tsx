import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import img from '../../images/gatsby-astronaut.png';

import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <h1>Submit your message</h1>  

        <div className="row mt-5">

          <div className="col-md-6">
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="email" placeholder="E-mail" required />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" id="message" rows={3} placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark  btn-block">Send</button>
            </form>
          </div>

          <div className="col-md-6">
            <img src={img} alt="gatsby-astrounaut" className="img-responsive" width="400" />
          </div>

        </div>


      </Container>
    </Layout>  
  );
}

export default Contact;