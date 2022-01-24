import React, {Component} from 'react';

import moon from '../resources/moon.jpg'


class SearchResults extends Component {
    //this function helps when presenting the cards - if the title and description are the same, it doesn't show the description
    sameContent = (a, b) => {
        return (a === b) ? null : b
    }

    // This function determines if an image is present in the object and if not, renders a default image
    hasImage = (result) => {
        return (typeof result !== 'undefined') ? result[0].href : moon
    }

    // This determines if the title exists, much like the function above
    hasContent = (result) => {
        return (typeof result !== 'undefined') ? result[0].title : "No content"
    }

    // This determines the HTML to render and the card structure, mapping the images from the state onto each card
    getResults = (images) => {
        if (this.props.getResults !== undefined && this.props.getResults.length > 0) {
            return this.props.getResults.map(image =>
                <div className="cardborder">
                    <div className="leftbox">
                        <div className="image"><img src={this.hasImage(image.links)} alt=""/></div>
                    </div>
                    <div className="rightbox">
                        <div className="title">{this.hasContent(image.data)}</div>
                    </div>
                    <div className="clearfix">
                        <div className="bottombox">
                            <div className="desc">
                                {this.sameContent(image.data[0].title, image.data[0].description)}
                            </div>
                        </div>
                    </div>
                    <div className="creator">
                        {image.data[0].secondary_creator}
                    </div>
                </div>)
        } else {
            return <div className="noresult">no results yet</div>
        }
    }

//The Search field is rendered and the results are presented.
    render() {
        return (
            <div className="searchstuff">
                {this.getResults()}
            </div>
        )
    }
}

export default SearchResults
