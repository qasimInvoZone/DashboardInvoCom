import {useState, useEffect } from 'react'
import Cards from '../views/components/cards'
import ChartjsLine from '../views/components/charts/ChartjsLineChart' 
import LeadsTable from '../views/components/TablesAndForms/LeadsTable'
import axios from 'axios'
const Leads = () => {
  const [leadsData, setleadsData] = useState({});
  //fetch token from localStorage
  useEffect(() => {
    const fetchDashboard = async () => {
      const baseUrl = 'http://localhost:3000'
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
        console.log("lead", response.data.http_response.data);
        setleadsData(response.data.http_response.data);
      } catch (e) {
        console.log("in dashboard catch");
        if (e && e?.response && e?.response?.status === 400) {
          console.log(e.response.data.http_response)
        }
      }
    }
    fetchDashboard()
  }, [axios, setleadsData])
  return (
    <div className="p-2 bg-white mt-1">
      <h2 className='m-2'><strong>Leads Overview</strong></h2>
     <div className='mt-2'>
        <Cards leadsData = {leadsData}/>
     </div>   
        <ChartjsLine />
        <LeadsTable />
    </div>
  )
}

export default Leads
