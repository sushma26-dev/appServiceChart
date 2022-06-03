import { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import 'antd/dist/antd.css';
import moment from 'moment';
import Nav from "./nav";
import AppServiceNav from "./appServiceNav";
function ByteSend() {

    const [valu, getvalu] = useState([]);
    const [TimeGenerated, gettime] = useState([]);

    useEffect(() => {
        fetch('https://jacksonsuthip.github.io/nxtJS/url/BytesSent.json')
            .then((res) => res.json())
            .then((data) => {
                var cpuPerf = data.map((cpuPerfVal, i) =>
                    cpuPerfVal.avg
                )
                getvalu(cpuPerf)
                var time = data.map((timeData, i) =>
                    timeData.TimeGenerated
                )
                gettime(time)
            })
    }, [])


    return (
        <div className="App">
            <AppServiceNav />
            <div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#f1f1f1' }} >
                    <p style={{ paddingTop: '2px' }}></p>
                    <span style={{ paddingLeft: '15px' }}>CPU Performance</span>
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
                type="line"
                width={800}
                height={400}
                series={[
                    {
                        name: "gg",
                        data: valu
                    }
                ]}
                options={{
                    colors:['blueviolet'],
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

                            rotate: -45,

                            rotateAlways: true,

                            hideOverlappingLabels: true,

                            formatter: function (value, tempDate, index) {

                                return moment.utc(value).format('DD MMM YY');

                            }

                        }
                        
                      
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
                            columnWidth: '30%',
                            dataLabels:{
                                //within the chart alignment
                                orientation:"vertical",
                                
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
export default ByteSend;