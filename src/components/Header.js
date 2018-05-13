/**
 * Created by sravankumarganji on 9/5/17.
 */

import React from 'react';


function Header(props) {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img width='50px' style={{marginTop:'-15px'}} alt="weather report" src="src/images/g-logo-withbackground.gif" />
                    </a>
                        <h4 class="navbar-text" style={{color:'grey'}}>Weather Forecast Report</h4>
                </div>
                <div>
                {props.children}
                </div>
            </div>
        </nav>
    );
}
export default Header;
