import React from 'react';
import { Link } from 'gatsby';

import SEO from "../../components/Seo";
import Layout from '../../components/Layout';

import { Container, Card, Col } from './styles';

const Home: React.FC = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Container className="container-fluid">
        <div className="row">

          <Col>
            <Card>
              <div className="card-body">
                <h5 className="card-title">Importing assets as module</h5>
                <p className="card-text">Importing assets into common.js bundle. It will use gatsby-browser.js</p>
                <Link to="/tutorial/assets-as-module" className="card-link btn btn-block btn-light">Go</Link>
              </div>
            </Card>               
          </Col>

          <Col>
            <Card>
              <div className="card-body">
                <h5 className="card-title">Import assets as script</h5>
                <p className="card-text">Importing assets directly in page. It will use gatsby-node.js</p>
                <Link to="/tutorial/assets-as-script" className="card-link btn btn-block btn-light">Go</Link>
              </div>
            </Card>               
          </Col>

        </div>
      </Container>   
    </Layout>
  )
}

export default Home;