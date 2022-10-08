import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Favorites = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch({type: 'FETCH_FAVORITES'})
    }, []);

    return (
    <> 
    <div>
        <h1> Favorites </h1>
    </div>
    
    {/* dispatch to our sagas to GET all favorited images
    dispatch to GET our categories

    useSelector?? to hold what image is currently being selected, 
    and then PUT/POST a category to a favorited image
    'submit favorite' button - dispatch another action to POST
    */}
    </>
    );
}

export default Favorites;