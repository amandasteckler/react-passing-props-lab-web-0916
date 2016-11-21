const React = require('react');
const FruitBasket = require('./FruitBasket');
const Filter = require('./Filter')
const FilteredFruitList = require('./FilteredFruitList')

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filters: [],
      fruit: [],
      selectedFilter: null
    }
    this.fetchFilters = this.fetchFilters.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.fetchFruits = this.fetchFruits.bind(this)
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFruits() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ items: fruit}));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  render() {
    return (
      <FruitBasket handleChange={this.handleFilterChange} filter={this.state.selectedFilter} filters={this.state.filters} items={this.state.items} />
    );
  }

}

module.exports = App;
