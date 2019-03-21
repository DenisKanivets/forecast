import React, {Component} from 'react';
import "./weekWeatherCard.scss";

class WeekWeatherCard extends Component {

    render() {
        let counterItems = 0;
        return this.props.data.map(item => {
            counterItems++;

            if (counterItems <= this.props.data.length) {
                return (
                    <div key={item.date} className="day-block">
                        <p><b>Date:</b> {item.date}</p>
                        <img src={item.hourly[4].weatherIconUrl[0].value} alt="weather icon"/>
                        <p>In Total - {item.hourly[4].weatherDesc[0].value}</p>
                        <p><b>Min Temperature:</b> {item.mintempC} °C</p>
                        <p><b>Max Temperature:</b> {item.maxtempC} °C</p>
                    </div>
                )
            }
        })
    }
}

export default WeekWeatherCard;
