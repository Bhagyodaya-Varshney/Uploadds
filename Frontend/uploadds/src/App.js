import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import { HomeScreen } from './Home/homeScreen';
import { Dashboard } from './Dashboard/dashboard';

function App() {
  return <>
  <Routes>
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/home' element={<Dashboard/>}/>
    <Route path='/recentUpload' element={<Dashboard/>}/>
  </Routes>
  <Toaster/>
  </>
}

export default App;
