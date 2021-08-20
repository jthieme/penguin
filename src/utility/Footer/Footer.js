import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props){

    return(
        <footer className="page-footer">
          {/* <div className="container">
            <div className="row">
              <div className="col m12">
                <button className="waves-effect waves-light btn-large">Login</button>
                <ul className="col m12">
                  <li><Link to="/" className="col m1 grey-text text-lighten-3">Link 1</Link></li>
                  <li><Link to="/" className="col m1 grey-text text-lighten-3">Link 1</Link></li>
                </ul>
              </div>

            </div>
          </div> */}
        <div className="footer-copyright">
          <div className="container left">
            <button className="waves-effect waves-light btn">Login</button>
            <span className="container center cw">
            © 2021 Penguin
            </span>
          </div>
        </div>
      </footer>
    )
}

export default Footer;