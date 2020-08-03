exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query{
      allFakeJson {
        distinct(field: userId)
      }
    }
  `);

  actions.createPage({
    path: 'todo/pending',
    component: require.resolve(`./src/templates/filter-completed-todo.js`),
    context: { completed: false },
  });

  actions.createPage({
    path: 'todo/completed',
    component: require.resolve(`./src/templates/filter-completed-todo.js`),
    context: { completed: true },
  });

  data.allFakeJson.distinct.forEach(userId => {
    actions.createPage({
      path: `todo/user/${userId}`,
      component: require.resolve(`./src/templates/filter-user-todo.js`),
      context: { userId: Number(userId )},
    });

    actions.createPage({
      path: `todo/user/${userId}/completed`,
      component: require.resolve(`./src/templates/filter-user-completed-todo.js`),
      context: { 
        userId: Number(userId ), 
        completed: true,
      },
    });

    actions.createPage({
      path: `todo/user/${userId}/pending`,
      component: require.resolve(`./src/templates/filter-user-completed-todo.js`),
      context: { 
        userId: Number(userId ), 
        completed: false,
      },
    });
  });
}