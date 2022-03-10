import React from 'react';
import RegionFilter from './RegionFilter';
import SearchForm from './SearchForm';

const CountryFilters = (props) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <SearchForm searchString={props.searchString} handleInputSearch={props.handleInputSearch} />
            <RegionFilter regionFilter={props.regionFilter} handleRegionFilter={props.handleRegionFilter} />
        </div>
    );
}

export default CountryFilters;