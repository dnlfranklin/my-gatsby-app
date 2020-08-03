import React from 'react';
import { graphql, Link } from "gatsby";

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const FilterCompletedTodo = ({ data, pageContext }) => {
  const edges = data.allFakeJson.edges;

  const { completed } = pageContext;

  return (
    <Layout>
      <SEO title="GraphQL" />
      <div className="p-4">
        <h1>GraphQL Source</h1>
        
        <div className="row my-3">
          <Link to="/todo" className="btn btn-light">All</Link>
          <Link to="/todo/completed" className={`btn btn-${completed ? 'dark disabled' : 'light'}`}>completed</Link>
          <Link to="/todo/pending" className={`btn btn-${completed ? 'light' : 'dark disabled'}`}>Pending</Link>
        </div>

        <div className="row">
          {edges.map(item => (
              <div className="col-sm-3" key={item.node.id}>
                <div className={`card text-white ${item.node.completed ? 'bg-success' : 'bg-danger'} mb-3`}>
                  <div className="card-header">{item.node.completed ? 'Completed' : 'Pending'}</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      User: <Link to={`/todo/user/${item.node.userId}/${completed ? 'completed' : 'pending'}`} className="text-secondary">
                       {item.node.userId}
                      </Link>
                    </h5>
                    <p className="card-text">{item.node.title}</p>
                  </div>
                </div>
              </div>
            ))}      
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($completed: Boolean) {
    allFakeJson(filter: {completed: {eq: $completed}}) {
      edges {
        node {
          id
          title
          userId
          completed
        }
      }
    }
  }`;

export default FilterCompletedTodo;