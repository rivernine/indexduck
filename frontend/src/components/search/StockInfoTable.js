import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function StockInfoTable() {
  const columns = [
    {
      field: 'ticker',
      headerName: '티커',
      width: 90
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
      width: 150,
    },
    {
      field: 'bps',
      headerName: 'BPS',
      type: 'number',
      width: 100,
    },
    {
      field: 'per',
      headerName: 'PER',
      type: 'number',
      width: 100,
    },
    {
      field: 'pbr',
      headerName: 'PBR',
      type: 'number',
      width: 100,
    },
    {
      field: 'eps',
      headerName: 'EPS',
      type: 'number',
      width: 100,
    },
    {
      field: 'div',
      headerName: 'DIV',
      type: 'number',
      width: 100,
    },
    {
      field: 'dps',
      headerName: 'DPS',
      type: 'number',
      width: 100,
    },
  ]

  const rows = [
    { id: 1, ticker: '000660', market: 'KOSPI', cap: 75712245960000, bps: 71275, per: 14.9609375, pbr: 1.4599609375, eps: 6952, div: 1.1298828125, dps: 1170 }
  ];


  return (
    <div style={{ height: 200, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            disableColumnFilter
            rows={rows}
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
