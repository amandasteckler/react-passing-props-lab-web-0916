const React = require('react');
const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange} />
      <FilteredFruitList
        filter={props.selectedFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: null,
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

module.exports = FruitBasket;
