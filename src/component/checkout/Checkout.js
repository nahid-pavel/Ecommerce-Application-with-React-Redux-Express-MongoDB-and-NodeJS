import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, shallowEqual } from "react-redux";


export default function Checkout() {

    const history = useHistory();
    const { profileData } = useSelector(
        (state) => state?.auth,
        shallowEqual
    );

    useEffect(() => {
        if (!profileData?.isAuth) {
            history.push('/')
        }

    }, [profileData, history])


    return (


        <div>
            <h1> Welocme to checkout page</h1>
        </div>
    )
}
