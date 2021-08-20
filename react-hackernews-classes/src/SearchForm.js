import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.searchTerm.trim());
  }

  handleChange(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="searchTerm"
            placeholder="Enter search term.."
            value={this.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }

}
export default SearchForm;
