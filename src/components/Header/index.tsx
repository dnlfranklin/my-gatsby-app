import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Nav } from './styles';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({siteTitle}) => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        <Img fixed={logo.childImageSharp.fixed} alt={siteTitle} /> 
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home" activeClassName="text-warning">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todo" activeClassName="text-warning">GraphQL</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery" activeClassName="text-warning">Gallery</Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Header;