import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from '../Header';

import { Container, Main } from './styles';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />      
      <Main>{children}</Main>      
    </Container>
  )
}

export default Layout;
