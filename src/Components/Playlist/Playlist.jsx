import { Component } from "react";
import { TrackList } from '../TrackList/TrackList';

export class Playlist extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange = event => {
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
      <div className="Playlist">
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} onAdd={this.props.onAdd} isRemoval={true} />
        <input onChange={this.handleNameChange} defaultValue={"New Playlist"} />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
