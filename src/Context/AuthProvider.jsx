import React, { Children } from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {
    // ekto check kore nei kaj krockhe ki na 
    const userInfo = {
        user:'rayhan bhai'
    }
    return (
        <AuthContext value={userInfo} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;