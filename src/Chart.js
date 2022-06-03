import logo from './logo.svg';
import './App.css';
import ReactApexChart from 'react-apexcharts';

function Chart() {

    return (
    <div className="App">
      <ReactApexChart 
      type="bar"
      width={500}
      height={500}
      series={[
          {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            colors:'#000'
        },
          {
            name: 'Net Profit1',
            data: [11, 22, 33, 44, 55, 66, 77, 60, 66],
            colors:'#0d25d6'
          },
          {
            name: 'Net Profit2',
            data: [21, 31, 41, 51, 61, 71, 81, 60, 66],
            colors:'#dd0'
          }
    ]}
      options={{
          //colors:'#000'
          theme:{
              mode:'dark'
          },
          //want all diff bar belong one time in single bar
          chart:{
              stacked:true,background:'blue'
          },
          //for border radius
          plotOptions:{
            bar:{
                borderRadius:14,
                columnWidth:80,
                dataLabels:{
                    //within the chart alignment
                    orientation:"vertical"
                }
            }
          },
          noData:{
              text:"empty chart",
              style:{
                  fontSize:30,
                  color:"red"
              }
          },
          tooltip:{
              followCursor:true
          },
          dataLabels:{
            formatter:(val)=>{
                return `$${val}`
            },
            style:{
                color:['#f00','#fff'],
                fontSize:16
            }
          },
          xaxis:{
              tickPlacement:'on',
              categories:['jan','feb','march','apr','may'],
              title:{
                  text:'months',
                  style:{
                      colors:['#ff0']
                  }

              }
          },
          yaxis:{
              labels:{
                  //add dollar symbol in y axis
                formatter:(val)=>{
                    return `$${val}`
                },
                style:{
                    colors:['#000']
                }
              },
              title:{
                text:'amt',
                style:{
                    colors:['#ff0']
                }
              },
              //want to show net profit in which area
              
          },
          legend:{
            show:true,
            position:'right'
        },
        title:{
            text:'Bar chart',
            style:{
                fontSize:30
            }
        },
        subtitle:{
            text:'this chart is ..',
            style:{
                color:'red'
            }
        },
        grid:{
            borderColor:"yellow"
        },
        //for hiding the content display in bar chart
        dataLabels:{
            enabled:false
        }
      }}
      />
      <ReactApexChart 
      type="pie"
      width={500}
      height={500}
      series={ [33,44,55,66,77]}
      options={{
          labels:['jan','feb','mar','apr','may'],
          tooltip:{
              y:{
                formatter:(val)=>{
                    return `$${val}`
                }
              }
          }
      }}
      />
    </div>
  );
}

export default Chart;
