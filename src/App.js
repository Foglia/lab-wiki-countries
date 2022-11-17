import './App.css';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CountriesList' element={<CountriesList />} />
        <Route path='/CountryDetails' element={<CountryDetails />} />
      </Routes>
      <Routes>
       <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
