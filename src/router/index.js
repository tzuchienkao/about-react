import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import routes from './routes';

const Routers = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, idx) => {
          return (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              element={pageRender(route)}
            >
              {route?.childern
                ? route.childern.map((child, i) => {
                    return (
                      <Route
                        key={i}
                        path={child.path}
                        element={<child.component />}
                      />
                    )
                  })
                : <Route element={<Outlet />} />
              }
            </Route>
          )
        })}
      </Routes>
    </Router>
  )
}

const pageRender = (route) => {
  return route.layout
    ? <route.layout>
        <route.component />
      </route.layout>
    : <route.component />
}

export default Routers;
