import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
function Nav() {
    const menuItems = [
        { key: "average", displayName: "CPU Time", isDefaut: true },
        { key: "memory", displayName: "Memory Working Set", isDefaut: false },
        { key: "avgRespTime", displayName: "Average Response Time", isDefaut: false },
        { key: "RequestInformation", displayName: "Request Information", isDefaut: false },
        { key: "home", displayName: "Home", isDefaut: false }
    ];

    return (
        <div>
            <header style={{ background: '#7bc2fb', padding: '20px' }}>
                <ul style={{ display: 'inline' }} >
                    {menuItems.map((menu, i) =>
                        <li key={i} style={{ display: 'inline', paddingRight: '50px' }}>
                            <Link to={'/' + menu.key} style={{ color: '#213366' }}>{menu.displayName}</Link>
                        </li>
                    )
                    }
                </ul>
            </header>
        </div>

    )
}
export default Nav;