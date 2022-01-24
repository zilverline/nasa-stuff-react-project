import React, {Component} from 'react';
import $ from "jquery";

import SearchForm from './SearchForm'
import SearchResults from './SearchResults'


export default class SearchContainer extends Component {
    //The NASA API is called and then the results go to the state
    fetchImages = (query = "") => {
        $.ajax({
            url: `https://images-api.nasa.gov/search?q=${query}`
        }).done(json => {
            this.props.setAppState('images', json.collection.items)
        })
    }

    render() {
        return (
            <div>
                <SearchForm fetchImages={this.fetchImages}/>
                <SearchResults getResults={this.props.images}/>
            </div>
        )
    }
}
