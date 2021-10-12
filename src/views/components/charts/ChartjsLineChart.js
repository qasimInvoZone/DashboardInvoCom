import { Line } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import FilterDropDown from './FilterDropDown'
import CalenderDropDown from './CalenderIconDropDown'
import PickerHumanFriendly from '../datepicker/PickerHumanFriendly'
import CalenderComplete from './MeetCompHeader'


const ChartjsLineChart = ({
  tooltipShadow,
  gridLineColor,
  labelColor,
  warningColorShade,
  lineChartDanger,
  lineChartPrimary
}) => {
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 10
        }
      },
      hover: {
        mode: 'label'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: 'primary',
        titleFontColor: 'blue',
        bodyFontColor: 'blue'
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: labelColor
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            }
          }
        ]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },
    data = {
      labels: [14.10, 14.20,  14.30, 14.40, 14.50, 14.60, 15.00, 15.10, 15.20, 15.30]
    }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-end align-items-sm-center align-items-start flex-sm-row flex-column chart_header'>

        <CalenderComplete />
      </CardHeader>
      <CardBody>
        <div className="leads_chart_holder">
          <div className="leas_chart_stats">
            <h1>0</h1>
            <h5>Leads acquired</h5>
            <p>Aug 13 - Sep 30-Aug</p>
          </div>
          <div className="leads_chart">
          <Line data={data} options={options} height={450} plugins={plugins} />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsLineChart
