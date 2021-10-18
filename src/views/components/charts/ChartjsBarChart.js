import Flatpickr from 'react-flatpickr'
import { Calendar, Filter} from 'react-feather'
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
 import FilterDropDown from './FilterDropDown'
 import CalenderComplete from './MeetCompHeader'

 const ChartjsBarChart = ({ tooltipShadow, gridLineColor, labelColor, successColorShade }) => {
  const options = {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      tooltips: {
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            scaleLabel: {
              display: false
            },
            ticks: {
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: labelColor
            }
          }
        ]
      }
    },
    data = {
      labels: ['DEC 21', 'JAN 21', 'FEB 21', 'MAR 21', 'APR 21', '1MAY 21'],
      datasets: [
        {
          data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
          backgroundColor: 'rgb(225, 166, 221)',
          borderColor: 'transparent',
          barThickness: 20
          
        }
       
      ]
    }
  
   
  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column chart_header'>
        <CardTitle className="chart_title"> 
          <h2> Overview </h2> 
        </CardTitle>
        <div className='d-sm-flex'>
          <div>
          <ul className="p-0">
            <FilterDropDown /></ul>
          </div>
          <div >
          <CalenderComplete />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="stats">
          <div className="stat_1">
          <div className="dot_1"></div>
          <h2>1.7K</h2>
          <p>Replied</p>
          </div>

          <div className="stat_2">
          <div className="dot_2"></div>
          <h2>2.4K</h2>
          <p>Unanswered</p>
          </div>
        </div>
        <div style={{ height: '400px' }}>
          <Bar data={data} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsBarChart
