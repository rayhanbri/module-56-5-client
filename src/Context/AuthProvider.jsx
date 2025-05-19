
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase-init';


const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }




    // ekto check kore nei kaj krockhe ki na 
    const userInfo = {
        createUser
    }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};



export default AuthProvider;