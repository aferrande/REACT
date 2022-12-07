import "./Chart.css";
import ChartGraphs from "./ChartGraphs";

const Chart = (props) => {
  const dataValues = props.dataPoints.map((data) => data.value);
  const totalMax = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartGraphs
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
