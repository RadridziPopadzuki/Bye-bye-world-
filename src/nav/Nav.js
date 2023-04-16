import React from 'react';
import './Nav.css';
import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom';

import App from '../app/App';
import About from '../about/About';
import Contacts from '../contacts/Contacts';


class Nav extends React.Component {
   render() {
      let navItem = this.props.navItem;
      return (
         <Router>
            <div>
               <nav className="nav">
                  <ul>
                     {Object.keys(navItem).map((item, index) => {
                        return <li key={index}><a className="item" href={navItem[item]}>{item}</a></li>
                     })}
                  </ul>
               </nav>

               <Routes>
                  <Route exact path="/app/App" element={<App />} />
                  <Route exact path="/about/About" element={<About />} />
                  <Route exact path="/contacts/Contacts" element={<Contacts />} />
               </Routes>
            </div>
         </Router>
      );
   }
}

export default Nav;