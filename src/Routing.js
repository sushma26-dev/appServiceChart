import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import AvgMemoryWorkPython from './AvgMemoryWorkPython';
import AvgRespTime from './AvgRespTime';
import ByteSend from './ByteSend';
import ByteReceive from './BytesReceived';
import Count from './Count';

import Cpu from './Cpu';
import Cpuperformance from './cpuperf';
import Home from './Home';
import MemoryPercentage from './MemoryPercentage';
import MemoryWorking from './MemoryWorking';
import ReqInfn from './ReqInfn';
//lazy load

function Routing() {
    

    return (
        <div>
            
            <HashRouter>
                

                <Routes>
                    <Route path='/average' element={<Count />} />
                    <Route path='/cpuperformance' element={<Cpuperformance />} /> 
                    <Route path='/memory' element={<MemoryWorking />} /> 
                    <Route path='/avgRespTime' element={<AvgRespTime />} /> 
                    <Route path='/memoryPercentage' element={<MemoryPercentage />} /> 
                    <Route path='/PythoMemoryPercentage' element={<AvgMemoryWorkPython />} />
                    <Route path='/RequestInformation' element={<ReqInfn />} /> 
                    <Route path='/byteSend' element={<ByteSend />} />  
                    <Route path='/byteReceive' element={<ByteReceive />} />  
                    <Route path='/home' element={<Home />} />  
                    <Route path='/' element={<Home />} />                      
                    
                    
                   
                </Routes>

                
            </HashRouter>



        </div>

    );
}

export default Routing;