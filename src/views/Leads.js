import Cards from '../views/components/cards'
import ChartjsLine from '../views/components/charts/ChartjsLineChart' 
import LeadsTable from '../views/components/TablesAndForms/LeadsTable'
const Leads = () => {
  return (
    <div className="p-2 bg-white mt-1">
      <h2 className='m-2'><strong>Leads Overview</strong></h2>
     <div className='mt-2'>
        <Cards />
     </div>   
        <ChartjsLine />
        <LeadsTable />
    </div>
  )
}

export default Leads
