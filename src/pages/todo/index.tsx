import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

interface TodoProps {
  node: {
    id: number;
    title: string;
    userId: number;
    completed: boolean;  
  }
}

const Todo: React.FC = () => {
  
  const query = useStaticQuery(graphql`
    query{
      allFakeJson{
        edges {
          node {
            id
            title
            userId
            completed
          }
        }
      }
    }
  `); 

  const data: TodoProps[] = query.allFakeJson.edges;

  return (
    <Layout>
      <SEO title="GraphQL" />
      <div className="p-4">
        <h1>GraphQL Source</h1>
        
        <div className="row my-3">
          <Link to="/todo" className="btn btn-dark disabled">All</Link>
          <Link to="/todo/completed" className="btn btn-light">completed</Link>
          <Link to="/todo/pending" className="btn btn-light">Pending</Link>
        </div>

        <div className="row">
          {data.map(item => (
            <div className="col-sm-3" key={item.node.id}>
              <div className={`card text-white ${item.node.completed ? 'bg-success' : 'bg-danger'} mb-3`}>
                <div className="card-header">{item.node.completed ? 'Completed' : 'Pending'}</div>
                <div className="card-body">
                  <h5 className="card-title">
                    User: <Link to={`/todo/user/${item.node.userId}`} className="text-secondary">{item.node.userId}</Link>
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

export default Todo;