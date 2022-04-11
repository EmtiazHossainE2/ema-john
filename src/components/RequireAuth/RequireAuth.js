import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.init';
import { onAuthStateChanged } from "firebase/auth";

const RequireAuth = ({ children }) => {
    const [myUser, setMyUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setMyUser(user);
            }
        });
    }, [])

    let location = useLocation();
    const [user] = useAuthState(auth)

    if (user || myUser.email) {
        return children;
    }
    if (!user || !myUser.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

};

export default RequireAuth;