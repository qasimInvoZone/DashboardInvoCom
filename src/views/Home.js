import Cards from '../views/components/cards'
import Chart from './components/charts/ChartjsBarChart'
import PieChart from '../views/components/TablesAndForms/ChartjsDoughnutChart'
import DashboardStats from './components/Stats/DashboardStats'

const Home = () => {
  return (
    <div>
      <div className="welcome_note">
        <h2>Hi, Admin</h2>
        <h5>Here's whats happening in your account</h5>
      </div>
        <Cards />
     
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
