import React from 'react';
import {useSelector} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {Redirect,Route} from 'react-router-dom';



export default function PrivateRoute({component:Component,...rest}) {

    const {name,email} = useSelector((state)=>state.auth.profileData)

    console.log('children', Component)

    const loggedIn = ()=>{
        const token = localStorage.getItem("token");
        if(!token){
            return false
        }

       

        const decodedToken = jwt_decode(token);
        const currentTime = new Date().getTime()/1000;
        return decodedToken.exp > currentTime
    }

    

  
    return (
        <Route {...rest} exact 
           render={(props)=>
            
               name || email || loggedIn() ? 
                 <Component {...props} />
               :
                  
                <Redirect to={{pathname: '/login', state: {from: props.location}}} />  }
        
        
        
        />
            
        
    )
}
