import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout/Layout';
import { routes } from './components/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {routes.map(route => (
            <Route 
              key={route.key} 
              path={route.path} 
              element={<route.element />} 
            />
          ))}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;