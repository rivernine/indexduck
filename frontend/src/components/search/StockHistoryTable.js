import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    '& .super-app.negative': {
      color: '#456FC1',
      fontWeight: '600',
    },
    '& .super-app.positive': {
      color: '#FF574A',
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
      width: 90,
      cellClassName: (params) =>
      clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      }),
    },
    {
      field: 'etcVol',
      headerName: '기타법인',
      width: 90,
      cellClassName: (params) =>
      clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      }),
      menubar: null
    },
    
  ]

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }} className={classes.root}>
        <DataGrid 
            disableColumnFilter
            disableColumnMenu={true}
            rows={props.selectedHistory}
            rowsPerPageOptions={[100]}
            
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
