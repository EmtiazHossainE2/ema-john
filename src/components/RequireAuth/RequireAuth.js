// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';

// const RequireAuth = ({ children }) => {
//     const { user } = useFirebase()
//     console.log(user);
//     let location = useLocation();
//     if (!user) {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//     return children
// };

// export default RequireAuth;