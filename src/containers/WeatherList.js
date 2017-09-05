/**
 * Created by sravankumarganji on 9/4/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart'
class WeatherList extends Component {
    renderWeather(cityData,i){
        const temps = cityData.list.map(weather=>((weather.main.temp-273.15)*1.8)+32)
        const pressure = cityData.list.map(weather=>weather.main.pressure)
        const humidity = cityData.list.map(weather=>weather.main.humidity)
        return (
            <tr key={i}>
                <td>
                    {cityData.city.name}
                </td>
                <td>
                    <Chart data={temps} color={'red'} units={'F'}/>
                </td>
                <td>
                    <Chart data={pressure} color={'green'} units={'hPa'}/>
                </td>
                <td>
                    <Chart data={humidity} color={'orange'} units={'%'}/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>
                        City
                    </th>
                    <th>
                        Temparature(F)
                    </th>
                    <th>
                        Pressure(hPa)
                    </th>
                    <th>
                        Humidity(%)
                    </th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     return{
//         weather : state.weather
//     }
// }
function mapStateToProps({weather}) {
    return{
        weather
    }
}

export default connect(mapStateToProps)(WeatherList);
