import Dashboard from './dashboard/Dashboard';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminHeader from './Header/AdminHeader';
import Sidebar from './sidebar/Sidebar';
import './adminPages.css';





export default function AdminPages() {
    return (
        <>
       
        <div>
        <Switch>
            <div className="header-wrapper">
                <AdminHeader />
            </div>
            <Redirect
                exact={true}
                from="/admin"
                to="/admin/dashboard"
            />
            <Route path="/admin/dashboard" component={Dashboard} />

            {/* <Redirect to="/error" /> */}
        </Switch>
        </div>
        <div className="profile-sidebar">
            <Sidebar />
        </div>

        
        </>
      
    )
}