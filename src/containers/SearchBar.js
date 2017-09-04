/**
 * Created by sravankumarganji on 9/3/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state ={
            term :''
        }
        this.onSearchChange = this.onSearchChange.bind(this)
    }
    onSearchChange(e){
        this.setState({term: e.target.value})
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="form-inline">
                <input style={{width:'50%'}}
                    type="text"
                       value={this.state.term}
                       onChange={this.onSearchChange}
                    name="searchName" id="searchId" className="form-control" placeholder="get a five days forecast in your favorite cities" aria-describedby="helpId" />
                <button type="submit" className="btn btn-primary">search</button>
            </form>

    );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch)
    
}

export default connect(null,mapDispatchToProps)(SearchBar);