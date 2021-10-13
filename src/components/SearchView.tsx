import React from 'react';


function SearchView(props: any) {
    return (
        <div>
            <select onChange={(event) => props.searchFieldChanged(event)} value={props.searchField}>
                <option value="">Select</option>
                <option value="name">Name</option>
                <option value="location">Location</option>
            </select>
            <input type="text" value={props.searchValue} onChange={(event) => {

                props.searchTextChanged(event);
                console.log(props.searchValue);
            }}></input>
        </div>
    );
}

export default SearchView;
