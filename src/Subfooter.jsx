import './Style.css';
import { pgdekho } from './Data';
import { Link } from 'react-router-dom';


export default function Subfooter() {
  return (
    <div className="sub_footer_container">

      {/* GRID parent */}
      <div className="subcontainer">
        {pgdekho.map((citydata, index) => (
          <div className="footer-link" key={index}>

            {/* City name */}
            <h4>{citydata.city}</h4>

            {/* Location list */}
            <ul>
              {citydata.location.map((loc, i) => (
                <li key={i}><Link to={`https://pgdekho.com/pg-in-${citydata.city}`}>{loc}</Link></li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </div>
  );
}



