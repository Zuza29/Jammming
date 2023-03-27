import "./TrackList.css";
import { Track } from "../Track/Track";
import { nanoid } from "nanoid";


export const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={nanoid()}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemoval={isRemoval}
          />
        );
      })}
    </div>
  );
};
