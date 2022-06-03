import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
function AppServiceNav() {
    const menuItems = [
        { key: "cpuperformance", displayName: "CPU Performance", isDefaut: false },
        { key: "memoryPercentage", displayName: "Memory Percentage", isDefaut: false },
        { key: "byteSend", displayName: "ByteSend", isDefaut: false },
        { key: "byteReceive", displayName: "ByteReceive", isDefaut: false },
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
export default AppServiceNav;