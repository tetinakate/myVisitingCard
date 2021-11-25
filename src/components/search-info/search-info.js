import React, { Component } from "react";
import './search-info.css';

export default class SearchInfo extends Component {
    state ={
        term: ''
    };
    onChangeSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onChangeSearch(term);
    }

    render() {
        //const { onHandleChangeSearch } = this.props;
        return (
            <div className='seacrh'>
                <input type='text' 
                        value={this.state.term}
                        placeholder='search some info'
                        className='form-control ds-input'
                        onChange={this.onChangeSearch} />
            </div>

        )
    }
}