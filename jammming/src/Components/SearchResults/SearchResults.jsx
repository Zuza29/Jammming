import { Component } from "react";
import { TrackList } from './TrackList/TrackList';


export class SearchResults extends Component {
  render() {
     const { searchResults } = this.props;
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={searchResults}>
        </TrackList>
      </div>
    );
  }
}
