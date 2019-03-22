import React, {Component} from 'react';
import axios from "axios";
import {FaSearch, FaReact} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import DayWeatherCard from '../DayWeatherCard';
import './mainWeather.scss';

class MainWeather extends Component {
    state = {
        city: '',
        data: null,
        status: false
    };

    handleChange = (e) => {
        this.setState({city: e.target.value});
    };

    enterCity = (e) => {
        e.preventDefault();
        const subCity = {
            city: this.state.city
        };
        axios.get("https://api.worldweatheronline.com/premium/v1/weather.ashx?key=314c240e44fd436d93f135946192003&q=" + subCity.city + "&num_of_days=7&format=json")
            .then(res => {
                if (res.data.data.request) {
                    this.setState({data: res.data, status: true})
                } else {
                    this.setState({status: false, city: ''});
                    alert('Wrong city name entered! Please, check for correct data.')
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        if (this.state.status === false) {
            return (
                <section className="main-section">
                    <div className="container">
                        <form onSubmit={this.enterCity}>
                            <input className='input' onChange={this.handleChange} type="text"
                                   placeholder="Enter city here..."
                                   value={this.state.city}/>
                            <button className='button' type="submit"><FaSearch/></button>
                        </form>
                        <p className="react-logo"><FaReact/></p>
                    </div>
                </section>
            );
        } else {
            return (
                <section className="main-section">
                    <div className="container">
                        <form onSubmit={this.enterCity}>
                            <input className='input' onChange={this.handleChange} type="text"
                                   placeholder="Enter city here..."
                                   value={this.state.city}/>
                            <button className='button' type="submit"><FaSearch/></button>
                        </form>
                        <span className='first-info'><b>Location:</b> {this.state.data.data.request[0].query}</span>
                        <span className='first-info'><b>Date:</b> {this.state.data.data.weather[0].date}</span>
                        <span
                            className='first-info'><b>Max temperature:</b> {this.state.data.data.weather[0].maxtempC} °C</span>
                        <span
                            className='first-info'><b>Min temperature:</b> {this.state.data.data.weather[0].mintempC} °C</span>
                        <br/>
                        <DayWeatherCard data={this.state.data.data.weather[0]}/>
                        <div>
                            <Link className='detailed'
                                  to={{pathname: "/detailed", state: {data: this.state.data.data}}}>Weather
                                Forecast For a Week</Link>
                        </div>
                    </div>
                </section>
            );
        }
    }
}

export default MainWeather;

