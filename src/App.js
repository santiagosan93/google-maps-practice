import React, { Component } from 'react';
import FlatList from './components/flat_list'
import MapItem from './components/map_item'
import flats from './flats_db'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flats: flats,
      selected: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(flatCenter, name){
    this.setState({
      selected: {
        center: flatCenter,
        name: name,
        zoom: 11
      }
    })
  }

  render() {
    if (this.state.selected === null) {
      return(
        <div>
          <FlatList flats={this.state.flats} handleClick={this.handleClick} selected={this.state.selected}/>
          <MapItem center={{lat: 40, lng: 0}} zoom={3}/>
        </div>
      )
    }else {
      return(
        <div>
          <FlatList flats={this.state.flats} handleClick={this.handleClick} selected={this.state.selected}/>
          <MapItem center={this.state.selected.center} zoom={this.state.selected.zoom}/>
        </div>
      )
    }
  }
}



export default App;
