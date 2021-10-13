import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './interface/Person'
import nameList from './data/sampleData.json';
import companyList from './data/SampleData2.json';
import ListView from './components/ListView';
import SearchView from './components/SearchView';
import NameLocation from './components/NameLocation';
import CompanyLocation from './components/CompanyLocation';

import filterValues from './utils/filter';

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [searchField, setSearchField] = useState("");
  const [nameFilteredList, setNameFilteredList] = useState(nameList);
  const [companyFilteredList, setCompanyFilteredList] = useState(companyList);
  const searchTextChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
    setNameFilteredList(filterValues(nameList, event.target.value, searchField));
    setCompanyFilteredList(filterValues(companyList, event.target.value, searchField));
  }

  const searchFieldChanged = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSearchField(event.target.value);
    setNameFilteredList(filterValues(nameList, searchValue, event.target.value));
    setCompanyFilteredList(filterValues(companyList, searchValue, event.target.value));
  }


  let NameCompListView = ListView(NameLocation, { values: nameFilteredList });
  let CompLocationListView = ListView(CompanyLocation, { values: companyFilteredList });

  return (

    <div className="App">
      <SearchView searchTextChanged={searchTextChanged} searchValue={searchValue} searchFieldChanged={searchFieldChanged} searchField={searchField}></SearchView>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center' }}>
        <NameCompListView></NameCompListView>
        <CompLocationListView></CompLocationListView>
      </div>
    </div>
  );
}

export default App;
