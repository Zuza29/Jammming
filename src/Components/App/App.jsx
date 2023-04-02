import './App.css';
import React, { Component } from "react";
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistName: 'My playlist',
      playlistTracks: [{name: 'Curse my Name', artist: 'Blind Guardian', album: '123', id: 1}, {name: 'Battlefield', artist: 'Blind Guardian', album: '456', id: 2}],
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1' },
        { name: 'name1', artist: 'artist1', album: 'album1' },
        { name: 'name1', artist: 'artist1', album: 'album1' }],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  };

  savePlaylist = () => {
    const trackURIs = this.state.playlistTracks.map(track => track.uri)
  };

  updatePlaylistName = name => {
    this.setState({
      playlistName: name,
    })
  };

  search = query => {
    console.log(query)
  }

  addTrack = track => {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  };

  removeTrack = track => {
    const filtered = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({
      playlistTracks: filtered,
    })  }
  
  render() {
    return (
      <div className='App'>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist
              onSave={this.savePlaylist}
              onNameChange={this.updatePlaylistName}
              onRemove={this.onRemove} onAdd={this.onAdd} isRemoval={this.isRemoval}
              playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            
          </div>
        </div>
      </div>
    )
  }
}
