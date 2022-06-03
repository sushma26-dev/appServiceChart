import { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import 'antd/dist/antd.css';
import moment from 'moment';
import Nav from "./nav";
function MemoryWorking() {

    const [valu, getvalu] = useState([]);
    const [TimeGenerated, gettime] = useState([]);

    useEffect(() => {
        fetch('https://jacksonsuthip.github.io/nxtJS/url/MemoryWorkingSet.json')
            .then((res) => res.json())
            .then((data) => {
                var memAvg = data.map((memAvgVal, i) =>
                    memAvgVal.avg
                )
                getvalu(memAvg)
                var time = data.map((timeData, i) =>
                    timeData.TimeGenerated
                )
                gettime(time)
            })
    }, [])


    return (
        <div className="App">
            <Nav />
            <div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#f1f1f1' }} >
                    <p style={{ paddingTop: '2px' }}></p>
                    <span style={{ paddingLeft: '15px' }}>Memory Working Set</span>
                    <span style={{ paddingLeft: '10px' }}></span>
                    <span style={{ paddingLeft: '10px' }}></span>
                    <div
                        style={{
                            boxShadow: '0px 6px 6px 1px #ebebeb',
                            backgroundColor: 'white',
                            margin: '15px',
                            paddingLeft : '250px'
                        }}
                    >
            <ReactApexChart
                type="bar"
                width={800}
                height={400}
                series={[
                    {
                        name: "gg",
                        data: valu
                    }
                ]}
                options={{
                    colors:['#000'],
                    xaxis: {
                        tickPlacement: 'on',
                        categories: TimeGenerated,
                        title: {
                            text: 'Time Generated',
                            style: {
                                colors: ['#ff0']
                            }

                        },
                        labels: {

                            show: true,

                            // rotate: -45,

                            // rotateAlways: true,

                            hideOverlappingLabels: true,

                            formatter: function (value, tempDate, index) {

                                return moment.utc(value).format('DD MMM YY');

                            }

                        },
                        
                        // title: {
                        //     text: 'Time Generated',
                        //     style: {
                        //         colors: ['#ff0']
                        //     }

                        // }
                    },
                    yaxis: {

                        title: {
                            text: 'Average',
                            style: {
                                colors: ['#ff0']
                            }

                        }

                    },
                    plotOptions:{
                        bar:{
                            borderRadius:10,
                            dataLabels:{
                                //within the chart alignment
                                orientation:"vertical"
                            }
                        }
                      }                    
                }}
            />
</div>
                </div>
            </div>
        </div>
    );
}
export default MemoryWorking;