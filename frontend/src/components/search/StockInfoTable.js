import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function StockInfoTable(props) {

  const columns = [
    {
      field: 'ticker',
      headerName: '티커',
      width: 70
    },
    {
      field: 'name',
      headerName: '이름',
      width: 130
    },
    {
      field: 'market',
      headerName: '분류',
      width: 90
    },
    {
      field: 'cap',
      headerName: '시가총액',
      type: 'number',
      width: 160,
    },
    {
      field: 'bps',
      headerName: 'BPS',
      type: 'number',
      width: 80,      
    },
    
    {
      field: 'per',
      headerName: 'PER',
      type: 'number',
      width: 80,
      valueFormatter: (params) => {
        return parseFloat(params.value).toFixed(2)
      },
    },
    {
      field: 'pbr',
      headerName: 'PBR',
      type: 'number',
      width: 80,
      valueFormatter: (params) => {
        return parseFloat(params.value).toFixed(2)
      },
    },
    {
      field: 'eps',
      headerName: 'EPS',
      type: 'number',
      width: 80,
    },
    {
      field: 'div',
      headerName: 'DIV',
      type: 'number',
      width: 80,
    },
    {
      field: 'dps',
      headerName: 'DPS',
      type: 'number',
      width: 80,
    },
  ]

  return (
    <div style={{ height: 200, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            disableColumnFilter
            disableColumnMenu={true}
            rows={props.selectedInfo}
            rowsPerPageOptions={[1]}
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

export default StockInfoTable