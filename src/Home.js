import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import cloud1 from './cloud1.png';
import Amadis_Logo from './Amadis_Logo.svg';
function Home() {
    const menuItems = [
        { key: "average", displayName: "App Service", isDefaut: false },
        { key: "cpuperformance", displayName: "App Service Plan", isDefaut: false },
        // { key: "memory", displayName: "Memory Working Set", isDefaut: false },
        // { key: "avgRespTime", displayName: "Average Response Time", isDefaut: false }
    ];

    return (
        <div>
            <header style={{ background: '#7bc2fb', padding: '25px' }}>
            <img src={Amadis_Logo} style={{width: '100px'}} className="AppPhoto" alt=".." />
            <ul style={{ display: 'inline' }} >
                    {menuItems.map((menu, i) =>
                        <li key={i} style={{ display: 'inline', paddingRight: '80px', float: 'right'}}>
                            <Link to={'/' + menu.key} style={{ color: '#213366', fontSize:'30pz' }}><b>{menu.displayName}</b></Link>
                        </li>
                    )
                    }
                </ul>
            </header>
                <Row>
                    <Col span={5}></Col>
                    <Col span={18}>
                    <img src={cloud1} style={{height:'100%', width: '100'}} alt="logo" />
                    </Col>
                </Row>
        </div>

    )
}
export default Home;