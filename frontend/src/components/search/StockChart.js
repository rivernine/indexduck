import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';

import StockChartPeriodButton from './StockChartPeriodButton';
import StockChartTitle from './StockChartTitle';

export default function StockChart(props) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {
          props.selected === ""
            ? <StockChartTitle>Choose a stocks</StockChartTitle>
            : <StockChartTitle>{props.selected}</StockChartTitle>
        }
        <StockChartPeriodButton selected={props.selected} selectedValue={props.selectedValue} onChange={props.onChange}/>
      </Box>
      <React.Fragment>
        <ResponsiveContainer className="watermark" width="100%" height='90%'>
          <LineChart
            data={props.selectedChart}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <XAxis dataKey="date" stroke={theme.palette.text.secondary} tick={{ fontSize: 12, fill: theme.palette.text.secondary }} />
            <YAxis stroke={theme.palette.text.secondary} width={1} tick={false} domain={['dataMin - 0.05', 'dataMax + 0.05']}>
            </YAxis>
            <Legend />
            <Line name="종가" type="monotone" dataKey="closeNorm" stroke={theme.stock.close} strokeWidth="3" dot={false} />
            <Line name="개인" type="monotone" dataKey="indVolCumNorm" stroke={theme.stock.ind} dot={false} />
            <Line name="기관" type="monotone" dataKey="insVolCumNorm" stroke={theme.stock.ins} dot={false} />
            <Line name="외국인" type="monotone" dataKey="forVolCumNorm" stroke={theme.stock.for} dot={false} />
            <Line name="기타법인" type="monotone" dataKey="etcVolCumNorm" stroke={theme.stock.etc} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    </>
  );
}
