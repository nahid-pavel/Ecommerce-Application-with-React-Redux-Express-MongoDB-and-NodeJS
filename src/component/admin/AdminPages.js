import Dashboard from './dashboard/Dashboard';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHeader from './Header/AdminHeader';

import Sidebar from './sidebar/Sidebar';
import './adminPages.css';
import AdminProduct from './sidebar/AdminProduct';





export default function AdminPages() {
    return (
        <div className="main">
            <div className="sidebar width-15">
                <Sidebar />
            </div>


            <Switch>
            <div className="body">

                <div className="header-wrapper">
                    <AdminHeader />
                </div>
                <div className="body-inner  width-85">
                    
                    <Route path="/admin/dashboard" component={Dashboard} />
                    <Route path="/admin/Product" component={AdminProduct} />

                </div>
              </div>




                {/* <Redirect to="/error" /> */}
            </Switch>

           

        </div>

    )
}