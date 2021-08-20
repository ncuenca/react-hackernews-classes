import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Story from "./Story";

const BASE_URL = `https://hn.algolia.com/api/v1/search?query`

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stories: [] };
    this.search = this.search.bind(this);
  }

  async search(term) {
    const resp = await axios.get(`${BASE_URL}=${term}`);
    this.setState({ stories: resp.data.hits});
  }

  componentDidMount() {
    this.search("react");
  }

  render() {
    return (
      <div>
        <SearchForm search={this.search}/>
        <ul>
          {this.state.stories.map(s => (
            <Story title={s.title} url={s.url}/>
          ))}
        </ul>
      </div>
    )
  }

}

export default StoryList