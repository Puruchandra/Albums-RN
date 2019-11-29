import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//class based component
//we use class based component whenever our data is dynamic, and keeps on changing

class AlbumList extends Component {
  //initial state setup
  state = {albums: []};

  componentDidMount() {
    console.log('componentDidMount is AlbumList');
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbum() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    //console.log(this.state);
    //scrollview to make things scrollable
    return <ScrollView>{this.renderAlbum()}</ScrollView>;
  }
}

export default AlbumList;
