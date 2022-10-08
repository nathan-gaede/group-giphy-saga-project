import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
    
    const [search, setSearch] = useState('');
    const results = useSelector(store => store.search);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: "SEARCH_GIPHY"})
    // }, [])

    const searchGiphy = () => {
    dispatch ({ type: 'SEARCH_GIPHY', payload: search})
}

    return (
        <div>
        <h1>Search Page</h1>
        <h5>{JSON.stringify(results)}</h5>
        {/* <section>
            {results.map((tomato) => {
                return (
                    <div>
                        <h3>{tomato.images.downsized_medium.url}</h3> 
                        <img src={tomato.images.downsized_medium.url} />
                    </div>
                )
            })}
        </section> */}
        
        <input type="text" value={search} onChange = {(e)=> setSearch(e.target.value)}></input>
        <button onClick = {searchGiphy}>Search</button>
        </div>
    )


}







export default Search;