export const createRouter = (Routes, Router) => {
  let routes = {};
  Object.keys(Routes).forEach((item) => {
    routes[item] = item;
  });
  return { routes, navigate: Router };
};
