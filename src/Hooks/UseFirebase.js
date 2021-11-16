import React, { useEffect, useState } from 'react';
import authenticationFirebase from "../Components/Login/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
authenticationFirebase()

const UseFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const userRegistration = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                // saved to db 
                savedUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    setError(error.message)
                });
                history.push('/')
                setError('')
            })
            .catch((error) => {
                setError(error.message)
                // ..
            }).finally(() => setIsLoading(false))
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                savedUser(user.email, user.displayName, 'PUT')
                const redirect_uri = location?.state?.from || '/';
                history.replace(redirect_uri)
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));


    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const redirect_uri = location?.state?.from || '/';
                history.replace(redirect_uri)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setIsLoading(false));
    }

    const savedUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://quiet-sands-27279.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    useEffect(() => {
        fetch(`https://quiet-sands-27279.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        userRegistration,
        logOut,
        loginUser,
        isLoading,
        error,
        admin,
        signInWithGoogle

    }
}


export default UseFirebase