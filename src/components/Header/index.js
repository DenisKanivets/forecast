import React, {Component} from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {WiDaySunnyOvercast} from 'react-icons/wi'

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <section className='container main-flex'>
                    <Link to='/' className="logo"><WiDaySunnyOvercast/></Link>
                    <div className='flex-blocks'>
                        <h1>FORECAST REACT APP</h1>
                        <p>This is a small app, wrote on React and used weather API to show you weather in cities. Just
                            write city
                            name in search field and get this!</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;
