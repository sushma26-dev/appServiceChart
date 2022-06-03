import { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';

function ProductList() {

    const [valu, getvalu] = useState([]);
    const [cc, getcc] = useState('55');

    useEffect(() => {
        fetch('https://jacksonsuthip.github.io/nxtJS/url/CpuTime.json')
            .then((res) => res.json())
            .then((data) => {
                var aa = data.map((bb, i) =>
                    [bb.count, bb.TimeGenerated]
                    // bb.count
                )
                getvalu(aa)
            })
    }, [])
    // console.log("val are " + valu)
    
    // console.log("len are " + valu.length);
    if (valu.length > 1) {
        for (var i = 0; i <= valu.length; i++) {
            // console.log("val of 0in arrr " + valu[i][0])
            var neeew = valu[i][0];
            console.log("=="+neeew);
            document.write(neeew);
            getcc(valu);
            // getcc[valu[i][0]];
            // console.log("val of 1 arrr " + valu[i][1])
            // console.log("cc val is"+cc);
        }
    // console.log("value  is "+valu);
    }
    console.log("cc val is"+ cc);
    
    return (
        <div className="App">
            {/* {
                    valu.map((emp, i) =>
                            
                    
                    emp.map((c)=>
                    // console.log(emp)
                    // console.log("sub array "+c)
                    // console.log("sub array "+c[1])
                    )
                
                            
                    )
                } */}
            <ReactApexChart
                type="bar"
                width={500}
                height={500}
                series={[
                    {
                        name: "gg",
                        data: valu
                    }
                ]}
                options={{
                    xaxis: {
                        tickPlacement: 'on',
                        categories: ['jan', 'feb', 'march', 'apr', 'may'],
                        title: {
                            text: 'months',
                            style: {
                                colors: ['#ff0']
                            }

                        }
                    }
                }}
            />

        </div>
    );
}
export default ProductList;