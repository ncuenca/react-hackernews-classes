import React from "react";
import './App.css';
import SearchForm from './SearchForm';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.search = this.search.bind(this);
  }

  async search(term) {
    const url = `https://hn.algolia.com/api/v1/search?query=${term}`
    console.log(await axios.get(url));
    return await axios.get(url);
  }
  
  render() {return (
    <div className="App">
      <SearchForm search={this.search}/>
    </div>
  );
  }
}

export default App;
