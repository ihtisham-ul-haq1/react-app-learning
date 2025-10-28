import React from 'react'
import {useAuth} from "../contexts/AuthContextProvider.jsx";
import { useSelector } from "react-redux";

export const Menu = () => {
    const {isAuthenticated, user} = useAuth();
    const count = useSelector((state) => state.counter.value);

    return (
        <div>
            <p>The global counter value is: <strong>{count}</strong></p>
            {isAuthenticated && (
                <div>
                    <p style={{color: 'green', margin: 0}}>
                        Logged in as: <strong>{user.name}</strong>
                    </p>
                </div>
            )}

            <h1>This is Menu Page</h1>
        </div>
    )
}
