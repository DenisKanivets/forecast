import React, {Component} from 'react';
import {Link} from "react-router-dom";
import WeekWeatherCard from '../WeekWeatherCard';
import './detailedWeather.scss';
import {FaArrowLeft} from 'react-icons/fa';

class DetailedWeather extends Component {

    render() {
        return (
            <section className="main-section">
                <div className="container">
                    <div className='go-back'>
                        <Link className='go-back' to="/"><FaArrowLeft/> Back to start page</Link>
                    </div>
                    <h2 className='detailed-head'>Weather Forecast For a
                        Week: <b>{this.props.location.state.data.request[0].query}</b></h2>
                    <WeekWeatherCard data={this.props.location.state.data.weather}/>
                </div>
            </section>
        );
    }
}

export default DetailedWeather;

