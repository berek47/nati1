import AreaCards from "./areaCards/AreaCards"
import AreaCharts from "./areaCharts/AreaCharts"
import AreaTable from "./areaTable/AreaTable"
import AreaTop from "./areaTop/AreaTop"
import "./analytics.scss";
const Analytics = () => {
  return (
    <div className="analytics1">
      <AreaTop />
      <AreaCards/>
      <AreaCharts/>
      <AreaTable/>
    </div>
  )
}

export default Analytics  