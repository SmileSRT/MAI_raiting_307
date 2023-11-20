import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {

    const [isAuth, setIsAuth] = useState(false);

    if (isAuth) {
        return(
            <Navigate to='/surveys'/>   
        )
    }
    else {
        return(
            <Navigate to='/auth'/>
        )
    }
}
export default Home;