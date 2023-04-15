import React from 'react';
import './Nav.css';


class Nav extends React.Component {
   render() {
      let navItem = this.props.navItem;
      return (
         <nav className="nav">
            <ul>
               {Object.keys(navItem).map((item, index) => {
                  return <li key={index}><a href="{nav[item]}">{item}</a></li>
               })}
            </ul>
         </nav>
      );
   }
}

export default Nav;