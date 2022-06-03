import { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import 'antd/dist/antd.css';
import moment from 'moment';
import Nav from "./nav";
import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";
function ReqInfn() {

    const [valu, getvalu] = useState([]);
    const [countvalue, getcount] = useState([]);
    const [TimeGenerated, gettime] = useState([]);

    useEffect(() => {
        fetch('https://jacksonsuthip.github.io/nxtJS/url/request.json')
            .then((res) => res.json())
            .then((data) => {
                var memAvg = data.map((memAvgVal, i) =>
                    memAvgVal.avg_duration
                )
                getvalu(memAvg)
                var count = data.map((countVal, i) =>
                    countVal.count
                )
                getcount(count)
                var time = data.map((timeData, i) =>
                    timeData.operation_Name
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
                    <span style={{ paddingLeft: '15px' }}>Request</span>
                    <span style={{ paddingLeft: '10px' }}></span>
                    <span style={{ paddingLeft: '10px' }}></span>
                    <div
                        style={{
                            boxShadow: '0px 6px 6px 1px #ebebeb',
                            backgroundColor: 'white',
                            margin: '15px',
                            paddingLeft: '170px'
                        }}
                    >
                        <ReactApexChart
                            type="line"
                            width={1000}
                            height={400}
                            series={[
                                {
                                    name: "avg duration",
                                    data: valu,
                                    colors: '#000'
                                },
                                {
                                    name: "count",
                                    data: countvalue,
                                    colors: '#0d25d6'
                                }
                            ]}
                            options={{

                                // chart: {
                                //     stacked: true
                                // },
                                xaxis: {
                                    tickPlacement: 'on',
                                    categories: TimeGenerated,
                                    title: {
                                        // text: 'Time Generated',
                                        style: {
                                            colors: ['#ff0']
                                        }

                                    },

                                },
                                yaxis: {

                                    title: {
                                        // text: 'Average',
                                        style: {
                                            colors: ['#ff0']
                                        }

                                    }

                                },

                                legend: {
                                    show: true,
                                    position: 'top'
                                },
                                plotOptions: {
                                    bar: {
                                        borderRadius: 10,
                                        dataLabels: {
                                            //within the chart alignment
                                            orientation: "vertical"

                                        }
                                    }
                                },
                                dataLabels: {
                                    enabled: false
                                }
                            }}
                        />
                        {/* <ReactApexChart
                            type="pie"
                            width={500}
                            height={500}
                            series={[33, 44]}
                            options={{
                                labels: ['jan', 'feb'],

                            }}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ReqInfn;