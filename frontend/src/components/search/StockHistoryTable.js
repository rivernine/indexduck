import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    '& .super-app.negative': {
      color: 'rgba(157, 255, 118, 0.49)',
      fontWeight: '600',
    },
    '& .super-app.positive': {
      color: '#d47483',
      fontWeight: '600',
    },
  },
});

export default function StockHistoryTable(props) {
  const classes = useStyles();
  const columns = [
    { 
      field: 'date', 
      headerName: '일자', 
      width: 100 
    },
    { 
      field: 'indVol', 
      headerName: '개인', 
      width: 90,
      cellClassName: (params) =>
      clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      }),
    },
    {
      field: 'insVol',
      headerName: '기관',
      width: 90,
      cellClassName: (params) =>
      clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      }),
    },
    {
      field: 'forVol',
      headerName: '외국인',
      width: 100,
      cellClassName: (params) =>
      clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      }),
    },
    {
      field: 'etcVol',
      headerName: '기타법인',
      width: 110,
      cellClassName: (params) =>
      clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      }),
    },
    
  ]

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }} className={classes.root}>
        <DataGrid 
            disableColumnFilter
            rows={props.selectedHistory}
            columns={columns.map((column) => ({
              ...column,
              sortable: false,
            }))}
            />
        </div>
      </div>
    </div>
  );
}
