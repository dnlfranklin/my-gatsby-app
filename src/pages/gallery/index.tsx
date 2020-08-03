import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from "../../components/Seo";
import Layout from '../../components/Layout';

import { Container } from './styles';

const gallery: React.FC = () => {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(filter: {absolutePath: {regex: "/images/"}, extension: {eq: "jpg"}}, sort: {fields: name, order: ASC}) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `);
  
  console.log(gallery);

  return (
    <Layout>
      <SEO title="Gallery" />
      <Container>
        <h1>Gallery</h1>
        <div className="row">
          {gallery.nodes.map(image => (
            <div className="col-md-4 col-lg-3 col-sm-6 py-2" key={image.id}>
              <Img fluid={image.childImageSharp.fluid} alt={image.name} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default gallery;