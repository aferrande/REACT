import "./ChartGraphs.css";

const ChartGraphs = (props) => {
  let graphPercentage = "0%";

  if (props.maxValue > 0)
    graphPercentage = Math.round((props.value / props.maxValue) * 100) + "%";

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: graphPercentage }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartGraphs;
