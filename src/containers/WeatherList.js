/**
 * Created by sravankumarganji on 9/4/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart'
class WeatherList extends Component {
    constructor(props){
        super(props)
    }
    renderWeather(cityData,i){
        const temps = cityData.list.map(weather=>weather.main.temp)
        const pressure = cityData.list.map(weather=>weather.main.pressure)
        const humidity = cityData.list.map(weather=>weather.main.humidity)
        return (
            <tr key={i}>
                <td>
                    {cityData.city.name}
                </td>
                <td>
                    <Chart data={temps} color={'red'}/>
                </td>
                <td>
                    <Chart data={pressure} color={'green'}/>
                </td>
                <td>
                    <Chart data={humidity} color={'orange'}/>
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
                        Temparature
                    </th>
                    <th>
                        Pressure
                    </th>
                    <th>
                        Humidity
                    </th>
                </tr>
                </thead>
                <tbody>
                    {console.log(this.props)}
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
