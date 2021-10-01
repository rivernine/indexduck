import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Tooltip, LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Legend, Surface, Symbols } from 'recharts';
import _ from "lodash";

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
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} tick={{fontSize: 12, fill: theme.palette.text.secondary}}/>
          {/* <YAxis stroke={theme.palette.text.secondary} width={1} tick={false} domain={['dataMin - 1000', 'dataMax + 1000']}> */}
          <YAxis stroke={theme.palette.text.secondary} width={1} tick={false} domain={['dataMin - 0.05', 'dataMax + 0.05']}>            
            {/* <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label> */}
          </YAxis>
          <Legend />
          <Tooltip />
          {/* <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} /> */}
          
          <Line name="종가" type="monotone" dataKey="closeNorm" stroke={theme.stock.close} strokeWidth="2.2" dot={false} />
          <Line name="개인" type="monotone" dataKey="indVolCumNorm" stroke={theme.stock.ind} dot={false} /> 
          <Line name="기관" type="monotone" dataKey="insVolCumNorm" stroke={theme.stock.ins} dot={false} /> 
          <Line name="외국인" type="monotone" dataKey="forVolCumNorm" stroke={theme.stock.for} dot={false} /> 
          <Line name="기타법인" type="monotone" dataKey="etcVolCumNorm" stroke={theme.stock.etc} dot={false} /> 
          {/* <Line type="monotone" dataKey="amount2" stroke="#82ca9d" dot={false} /> */}
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}