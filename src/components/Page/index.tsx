import React from 'react';
import { Link } from 'gatsby';

import SEO from "../Seo";

import { Container, Content } from './styles';

interface PageProps {
  title?: string;
}

const Page: React.FC<PageProps> = ({title, children}) => {
  return (
    <Container>
      <SEO title={title} />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{title}</li>
        </ol>
      </nav>
      <Content>
        {children}
      </Content>
    </Container>  
  );
}

export default Page;