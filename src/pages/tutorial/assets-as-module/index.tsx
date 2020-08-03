import React from 'react';

import Page from "../../../components/Page";
import Layout from '../../../components/Layout';

const AssetsModule: React.FC = () => {
  return (
    <Layout>
      <Page title="Tutorials - Importing assets as module">
      <h4>Compile the scripts in common.js</h4>
      <ul>
          <li>Download the packages from npm or import from your assets</li>
          <li>Open gatsby-browser.js</li>
          <li>{'import "bootstrap/dist/css/bootstrap.min.css";'}</li>    
          <li>{'import "./src/assets/css/styles.css";'}</li>    
          <li>{'import "jquery/dist/jquery.min.js";'}</li>    
          <li>{'import "./src/assets/js/scripts.js";'}</li>    
        </ul> 
      </Page>
    </Layout>  
  );
}

export default AssetsModule;