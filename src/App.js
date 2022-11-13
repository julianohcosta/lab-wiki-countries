import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <div className='App'>

      <Navbar />

      <div className='container-fluid border m-0'>
        <div className='row'>

          <div className='col-auto' style={{ 'maxHeight': '100vh', 'overflow': 'scroll' }}>
            <CountriesList />
          </div>

          <div className='col'>
            <Routes>
              <Route path='country/:countryID' element={<CountryDetails />} />
            </Routes>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
