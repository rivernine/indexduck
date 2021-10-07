import CoefficientChart from '../chart/CoefficientChart';
import Title from '../chart/Title';

export default function StockChart(props) {
  return (
    <>
      {
        props.selected === ""
          ? <Title>Choose a stocks</Title>
          : <Title>{props.selected}</Title>
      }
      <CoefficientChart class="mb-2" data={props.selectedChart} />
    </>
  );
}
