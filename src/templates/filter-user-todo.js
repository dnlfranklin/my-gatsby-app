import React from 'react';
import { graphql, Link } from "gatsby";

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const FilterUserTodo = ({ data, pageContext }) => {
  const edges = data.allFakeJson.edges;

  const { userId } = pageContext;

  return (
    <Layout>
      <SEO title="GraphQL" />
      <div className="p-4">
        <h1>GraphQL Source</h1>
        
        <div className="row my-3">
          <Link to="/todo" className="btn btn-light">All users</Link>
          <Link to="/todo" className="btn btn-dark disabled">User {userId}</Link>
        </div>

        <div className="row my-3">
          <Link to="/todo" className="btn btn-dark disabled">All</Link>
          <Link to={`/todo/user/${userId}/completed`} className="btn btn-light">completed</Link>
          <Link to={`/todo/user/${userId}/pending`} className="btn btn-light">Pending</Link>
        </div>

        <div className="row">
          {edges.map(item => (
              <div className="col-sm-3" key={item.node.id}>
                <div className={`card text-white ${item.node.completed ? 'bg-success' : 'bg-danger'} mb-3`}>
                  <div className="card-header">{item.node.completed ? 'Completed' : 'Pending'}</div>
                  <div className="card-body">
                    <h5 className="card-title">User: {item.node.userId}</h5>
                    <p className="card-text">#{item.node.id} - {item.node.title}</p>
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
  query($userId: Int) {
    allFakeJson(filter: {userId: {eq: $userId}}) {
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

export default FilterUserTodo;