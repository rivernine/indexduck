import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function StockHistoryTable() {
  const columns = [
    { 
      field: 'date', 
      headerName: '일자', 
      width: 100 
    },
    { 
      field: 'ind', 
      headerName: '개인', 
      width: 90 
    },
    {
      field: 'ins',
      headerName: '기관',
      // type: 'number',
      width: 90,
    },
    {
      field: 'for',
      headerName: '외국인',
      // type: 'number',
      width: 100,
    },
    {
      field: 'etc',
      headerName: '기타법인',
      // type: 'number',
      width: 110,
    },
    
  ]

  const rows = [
    { id: 1, date: '2021/10/01', ind: 9203, ins: -1475, for: 16437, etc: -15000},
    { id: 2, date: '2021/09/30', ind: 1503, ins: -1475, for: 137, etc: 15660},
    { id: 3, date: '2021/09/29', ind: 962203, ins: 156475, for: 6437, etc: 437000},
    { id: 4, date: '2021/09/28', ind: 927503, ins: 81475, for: -437, etc: 9000},
    { id: 5, date: '2021/09/27', ind: 339203, ins: 14755, for: -9437, etc: 23400},
    { id: 6, date: '2021/09/24', ind: 96203, ins: -775, for: -647, etc: -15000},
    { id: 7, date: '2021/09/23', ind: -29203, ins: -61475, for: -30437, etc: -606},
  ];
  

  return (
    <div style={{ height: '100%', width: '100%' }}>
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
