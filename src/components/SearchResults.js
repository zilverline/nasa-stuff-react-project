import React, { Component } from 'react';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = { focus: "" }
    this.handleClickItem = this.handleClickItem.bind(this);
  }

  renderPreview = (item) => {
    if (item.links !== undefined && item.links.length > 0) {
      let media_type = item.data[0].media_type

      if (media_type === "image") {
        return (
          <div className="preview">
            <img src={item.links[0].href} alt={item.data[0].title} />
            <small>{item.data[0].title}</small>
          </div>
        )
      }
      if (media_type === "video") {
        return (
          <div className="preview">
            <img src={item.links[0].href} alt={item.data[0].title} />
            <div className="play-btn" />
            <small>{item.data[0].title}</small>
          </div>
        )
      }
    }
  }

  renderData = (data) => {
    let data_view = {}

    Object.keys(data).forEach((key) => {
      let value_view = data[key];

      if (Array.isArray(data[key])) {
        value_view = data[key].join(", ");
      }

      data_view[key] = (
        <p>
          <label>{key}:</label>
          <span>{value_view}</span>
        </p>
      )
    });

    return (
      <React.Fragment>
        <h3>{data.title}</h3>
        {data_view["nasa_id"]}
        {data_view["keywords"]}
        {data_view["center"]}
        {data_view["secondary_creator"]}
        {data_view["date_created"]}
        <div className="description">{data.description}</div>
        <a className="details-link" href={"https://images.nasa.gov/details-" + data["nasa_id"]} target="_blank">View more details</a>
      </React.Fragment>
    )
  }

  handleClickItem = (event, id) => {
    if (event.target.className === "details-link") {
      return;
    }

    if (this.state.focus !== id) {
      this.setState({ focus: id });
    } else {
      this.setState({ focus: id + "unfocus" });
    }
  }

  render() {
    let searchResults = this.props.searchResults;

    if (searchResults.length > 0) {
      return (
        <div className="searchresults">
          {searchResults.map(item => (
            <React.Fragment key={item.href}>
              <div className={`card card-${item.data[0].media_type}`} onClick={(event) => this.handleClickItem(event, item.href)}>
                {this.renderPreview(item)}
                <div className="card-details" style={{ display: this.state.focus === item.href ? "inline-block" : "none" }}>
                  {this.renderData(item.data[0])}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )
    } else {
      return (
        <div className="noresult">no results yet</div>
      )
    }
  };

}

export default SearchResults;
