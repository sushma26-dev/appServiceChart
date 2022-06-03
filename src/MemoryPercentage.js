import { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import 'antd/dist/antd.css';
import moment from 'moment';
import Nav from "./nav";
import AppServiceNav from "./appServiceNav";
function MemoryPercentage() {

    const [valu, getvalu] = useState([]);
    const [TimeGenerated, gettime] = useState([]);
    const [Average, getavg] = useState([]);

    useEffect(() => {
        fetch('https://jacksonsuthip.github.io/nxtJS/url/MemoryPercentage.json')
            .then((res) => res.json())
            .then((data) => {
                var aa = data.map((countData, i) =>
                    countData.count
                )
                getvalu(aa)
                var time = data.map((timeData, i) =>
                    timeData.TimeGenerated
                )
                gettime(time)
                var average = data.map((averagedata, i) =>
                    averagedata.avg
                )
                getavg(average)
            })
    }, [])


    return (
        <div className="App">
            <AppServiceNav />
            <div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#f1f1f1' }} >
                    <p style={{ paddingTop: '2px' }}></p>
                    <span style={{ paddingLeft: '15px' }}>Cpu Time</span>
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
                                    name: "count",
                                    data: valu,
                                    colors:'#000'
                                },
                                {
                                    name: "average",
                                    data: Average,
                                    colors:'#0d25d6'
                                }
                            ]}
                            options={{
                                // colors:['black'],
                                xaxis: {
                                    tickPlacement: 'on',
                                    categories: TimeGenerated,
                                    labels: {
                                        show: true,
                                        // rotate: -45,
                                        // rotateAlways: true,
                                        hideOverlappingLabels: true,
                                        formatter: function (value, tempDate, index) {
                                            return moment.utc(value).format('DD MMM YY');
                                        }
                                    },
                                    title: {
                                        text: 'Time Generated',
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
                                  },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MemoryPercentage;