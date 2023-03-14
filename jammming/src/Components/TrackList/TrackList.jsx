import { Component } from "react";
import { Track } from "./Track/Track";

export class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.track.map(track => {
            return <Track track={track}
            key={track.id} />
          })
        }
      </div>
    )
  }
}
