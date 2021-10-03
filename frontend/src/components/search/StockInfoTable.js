import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useState, useEffect } from "react";

function StockInfoTable(props) {

  const [mounted, setMounted] = useState(false)
  const [stocks, setStocks] = useState(false)
  const [row, setRow] = useState(false)
  const columns = [
    {
      field: 'ticker',
      headerName: '티커',
      width: 90
    },
    {
      field: 'name',
      headerName: '이름',
      width: 150
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
      width: 85,
    },
    {
      field: 'per',
      headerName: 'PER',
      type: 'number',
      width: 85,
    },
    {
      field: 'pbr',
      headerName: 'PBR',
      type: 'number',
      width: 85,
    },
    {
      field: 'eps',
      headerName: 'EPS',
      type: 'number',
      width: 85,
    },
    {
      field: 'div',
      headerName: 'DIV',
      type: 'number',
      width: 85,
    },
    {
      field: 'dps',
      headerName: 'DPS',
      type: 'number',
      width: 85,
    },
  ]
  
  const rows = [
    { id: 1, ticker: '000660', name: 'SK 하이닉스', market: 'KOSPI', cap: 75712245960000, bps: 71275, per: 14.9609375, pbr: 1.4599609375, eps: 6952, div: 1.1298828125, dps: 1170 }
  ];

  function createData(ticker, name, market, cap, bps, per, pbr, eps, div, dps) {
    return { ticker, name, market, cap, bps, per, pbr, eps, div, dps }
  }

  if (!mounted) {
    // console.log(props.selected)
    // if (!props.selected){
    //   fetch('/getStockInfo?ticker=' + props.selected)
    //     .then(res => res.json())
    //     .then(json => {
    //       var result = [];
    //       console.log(json)
    //       for (const item of json) {
    //         result.push(createData(item.ticker, item.name, item.market, item.cap, item.bps, item.per, item.pbr, item.eps, item.div, item.dps));
    //       }
    //       setRow(result)
    //     })
    // }
  }

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

export default StockInfoTable