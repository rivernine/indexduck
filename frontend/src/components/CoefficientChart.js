import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Tooltip, LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

export default function CoefficientChart(props) {
  const theme = useTheme();
  // console.log(props.data);
  return (
    <React.Fragment>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          // width={300}
          // height={400}
          data={props.data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} tick={{fontSize: 12, fill: theme.palette.text.secondary}}/>
          <YAxis stroke={theme.palette.text.secondary} width={1} tick={false} domain={['dataMin - 1000', 'dataMax + 1000']}>
            {/* <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label> */}
          </YAxis>
          {/* <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} /> */}
          <Line type="monotone" dataKey="closeVal" stroke="#8884d8" dot={false} />
          {/* <Line type="monotone" dataKey="amount2" stroke="#82ca9d" dot={false} /> */}
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}