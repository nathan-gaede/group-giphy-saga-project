import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Favorites = () => {
    return (
    <> 
    <div>
        <h2> Favorites </h2>
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