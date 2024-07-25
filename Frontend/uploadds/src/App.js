import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { HomeScreen } from './Home/homeScreen';
import {Dashboard} from './Dashboard/dashboard';
import ProtectedRoute from './context/protectRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
