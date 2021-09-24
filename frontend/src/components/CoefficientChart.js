import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Tooltip, LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Legend } from 'recharts';

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
          <YAxis stroke={theme.palette.text.secondary} width={1} tick={false} domain={['dataMin', 'dataMax']}>            
            {/* <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label> */}
          </YAxis>
          <Legend />
          {/* <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} /> */}
          <Line type="monotone" dataKey="종가" stroke="#DDDDDD" strokeWidth="3" dot={false} /> {/* white */}           
          <Line type="monotone" dataKey="개인" stroke="#20639B" dot={false} /> {/* blue */}
          <Line type="monotone" dataKey="기관" stroke="#3CAEA3" dot={false} /> {/* green */}
          <Line type="monotone" dataKey="외국인" stroke="#F6D55C" dot={false} /> {/* yellow */}
          <Line type="monotone" dataKey="기타법인" stroke="#ED553B" dot={false} /> {/* red */} 
          {/* <Line type="monotone" dataKey="amount2" stroke="#82ca9d" dot={false} /> */}
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}