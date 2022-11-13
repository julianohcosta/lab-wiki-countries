import { Link, useParams } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import countries from '../countries.json';


function CountryDetails() {

  const { countryID } = useParams();

  const countrySelected = countries.find(country => country.alpha3Code === countryID);
  const borders = countrySelected.borders;
  const countriesBorders = countries.filter(country => borders.includes(country.alpha3Code));

  return (

    <div>
      <p className='fs-5 py-1 text-primary'>Country Detail</p>
      <div className='p-2'>
        <h1>{countrySelected.name.common}</h1>
        <hr />
      </div>

      <div className='d-flex '>
        <div className='d-flex container-fluid'>

          <table className='table'>
            <tbody>
            <tr>
              <th>Official name</th>
              <td>{countrySelected.name.official}</td>
            </tr>
            <tr>
              <th>Capital</th>
              <td>{countrySelected.capital[0]}</td>
            </tr>
            <tr>
              <th>Region</th>
              <td>{countrySelected.region}</td>
            </tr>
            <tr>
              <th>Subregion</th>
              <td>{countrySelected.subregion}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>{countrySelected.area} km²</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className='col-auto'><img
          src={`https://flagpedia.net/data/flags/w580/${countrySelected.alpha2Code.toLowerCase()}.png`} alt='flag'
          className='img-thumbnail' width='400px' /></div>
      </div>

      <p />

      <div className='d-flex'>
        <div className='container-fluid border'>
          <p>Borders</p>
          <ol>{countriesBorders.map(countryBorder => {
            return (
              <li key={countryBorder.alpha3Code}><Link to={`/country/${countryBorder.alpha3Code}`}
                                                       className='text-decoration-none'>{countryBorder.name.common}</Link>
              </li>
            );
          })}</ol>
        </div>
        <div id='map'>
          <GoogleMap latlng={countrySelected.latlng} />
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;