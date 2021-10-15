import {useState, useEffect } from 'react'
import Cards from '../views/components/cards'
import Chart from './components/charts/ChartjsBarChart'
import PieChart from '../views/components/TablesAndForms/ChartjsDoughnutChart'
import DashboardStats from './components/Stats/DashboardStats'
import axios from 'axios'

const Home = () => {
  
  const [leadsData, setleadsData] = useState({});
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('')

  //fetch token from localStorage
  useEffect(() => {
    const fetchDashboard = async () => {
      const baseUrl = 'http://stormy-sierra-19463.herokuapp.com'
      const apiVersion = 'api/v1'
      const entity = 'dashboard'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/`
      const token = localStorage.getItem('token');
      console.log("in dashboard");
      try {
        console.log("in dashboard try");
        const response = await axios.get(endPoint,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log("lead", response.data.data);
        setleadsData(response.data.data);
      } catch (e) {
        console.log("in dashboard catch");
        if (e && e?.response && e?.response?.status === 400) {
          console.log(e.response.data.http_response)
        }
      }
    }
    fetchDashboard()
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      setUsername(user.username)
      setRole(user.role)
    }
  }, [axios, setleadsData])

  return (
    <div>
      <div className="welcome_note">
        <h2>Hi, { username }</h2>
        <h5>Here's whats happening in your account</h5>
      </div>
        <Cards leadsData = {leadsData}/>
     
        <div className="chart_container">
            <div className="chart_home">
            <Chart  />
            </div>
            <div className="pie_chart">
            <PieChart />
            </div>
        </div>
        <DashboardStats />
    </div>
  )
}

export default Home
