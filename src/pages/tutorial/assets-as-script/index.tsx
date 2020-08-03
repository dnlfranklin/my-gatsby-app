import React from 'react';

import Page from "../../../components/Page";
import Layout from '../../../components/Layout';

const AssetsScript: React.FC = () => {
  return (
    <Layout>
      <Page title="Tutorials - Importing assets as script">
        <h4>Using CDN</h4>
        <ul>
          <li>Open gatsby-ssr.js</li>
          <li>
            Write the code:  <br/>
            {'import React from react;'} <br/>
            {'const onRenderBody = ({ setPostBodyComponents }) => {'} <br/>
            {'setPostBodyComponents(['} <br/>
            {'<script key="https://code.jquery.com/jquery-3.5.1.slim.min.js" src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" defer/>'} <br/>
            {'])'} <br/>
            {'}'} <br/>
            {'export { onRenderBody }'}
          </li>    
        </ul>

        <h4>Using static file</h4>
        <ul>
          <li>Open gatsby-ssr.js</li>
          <li>Crete folder static and put the scripts there</li>
          <li>
            Write the code:  <br/>
            {'import React from react;'} <br/>
            {'const onRenderBody = ({ setPostBodyComponents }) => {'} <br/>
            {'setPostBodyComponents(['} <br/>
            {'<script key="custom.js" src={"/custom.js"}/>,'} <br/>
            {'])'} <br/>
            {'}'} <br/>
            {'export { onRenderBody }'}
          </li>    
        </ul>

        <h4>Using safe script</h4>
        <ul>
          <li>Open gatsby-ssr.js</li>
          <li>Create your personal scripts</li>
          <li>
            Write the code:  <br/>
            {'import React from react;'} <br/>
            {'const onRenderBody = ({ setPostBodyComponents }) => {'} <br/>
            {'setPostBodyComponents(['} <br/>
            {'<script key="fun_javascript" dangerouslySetInnerHTML={{ __html: `console.log("Uhuu! Enjoy the time!")`,}}/>'} <br/>
            {'])'} <br/>
            {'}'} <br/>
            {'export { onRenderBody }'}
          </li>    
        </ul>
      </Page>
    </Layout>  
  );
}

export default AssetsScript;