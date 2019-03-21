import React, {Component} from 'react';
import "./dayWeatherCard.scss";

class DayWeatherCard extends Component {

    render() {
        let counterItems = 0;
        return this.props.data.hourly.map(item => {
            counterItems++;

            if (counterItems <= this.props.data.hourly.length) {
                return (
                    <div key={item.time} className="hour-block">
                        <p>{item.time}</p>
                        <img src={item.weatherIconUrl[0].value}
                             alt="weather icon"/>
                        <p>{item.weatherDesc[0].value}</p>
                        <p><b>Temperature:</b> {item.tempC} °C</p>
                        <p><b>Feels like:</b> {item.FeelsLikeC} °C</p>
                        <p><b>Winds speed:</b> {item.windspeedKmph} km</p>
                        <p><b>Humidity:</b> {item.humidity} %</p>
                        <p><b>Pressure:</b> {item.pressure} mb</p>
                    </div>
                )
            }
        })
    }
}

export default DayWeatherCard;
