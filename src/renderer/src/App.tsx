import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout/Layout';
import { routes } from './components/routes';
import ClockInRecordList from './pages/ClockIn_Record_List/ClockIn_Record_List';

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
          <Route path='clockin-record' element={<ClockInRecordList/>}/>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;