import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Beercard from './components/BeerCard';

const axios = require('axios');

class App extends Component {
  constructor() {
    super();

    this.state = {
      arrayOfBeer: []
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then( res => {
        const arrayOfBeer = res.data
        this.setState({ arrayOfBeer });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ol>{this.state.arrayOfBeer.map((beer, index) => {
          return (
            <Beercard key={index} image_url={beer.image_url} name={beer.name}
            first_brewed={beer.first_brewed} tagline={beer.tagline} 
            abv={beer.abv} description={beer.description} />
          )
        })}</ol>
        </header>
      </div>
    );
  }
}

export default App;
