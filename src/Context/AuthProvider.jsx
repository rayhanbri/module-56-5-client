
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase-init';


const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }




    // ekto check kore nei kaj krockhe ki na 
    const userInfo = {
        createUser,
        signIn
    }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};



export default AuthProvider;