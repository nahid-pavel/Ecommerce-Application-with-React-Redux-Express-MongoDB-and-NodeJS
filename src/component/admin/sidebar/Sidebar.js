import React from 'react';
import { Link } from 'react-router-dom';
import menuList from './menuList';

import './sidebar.css';

export default function Sidebar() {
    const [selectedFirstLevelMenu, setSelectedFirstLevelMenu] = React.useState("");
    console.log(menuList,'lists')
    return (
        <div className="menu">
            <ul className="list-unstyled components">
                {menuList?.map((firstLevel, index) => (
                    <li key={index} className="firstLevel-li">
                        <div
                            className="d-flex justify-content-between align-items-center"
                            onClick={() =>
                                setSelectedFirstLevelMenu(
                                    firstLevel?.label === selectedFirstLevelMenu
                                        ? ""
                                        : firstLevel?.label
                                )
                            }
                        ><div
                        style={{ width: "100%" }}
                        
                      >
                        <Link to={firstLevel?.to} className="sidebar-dropdown">
                          <i className={`${firstLevel?.icon} sidebar-icon`}></i>{" "}
                          {firstLevel?.label}
                        </Link>
                      </div>


                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}
