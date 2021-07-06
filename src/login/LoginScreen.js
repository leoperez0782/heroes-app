import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    const handleClick = () => {
        //history.push('/');
        //el replace hace que no se pueda volver atras
        //history.replace('/');
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Leonardo'
            }
        });

        history.replace(lastPath);
    }
    return (
        <div>
            <h1>Login Screen</h1>
            <hr></hr>

            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Login
            </button>
        </div>
    )
}
