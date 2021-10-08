import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@material-ui/core/styles';

export default function CoefficientTable(props) {
  const theme = useTheme();
  return (
    <TableContainer sx=
      {{ 
        mt: 3, 
        border: 1,
        borderRadius: 2,
        borderColor: theme.palette.text.disabled,
      }}
    >
      <Table sx={{ width: '100%', height: '100%'}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ fontSize: '9pt', color: 'white'}}>CAP</TableCell>
            <TableCell align="center" style={{ fontSize: '9pt', color: 'white' }}>PER</TableCell>
            <TableCell align="center" style={{ fontSize: '9pt', color: theme.stock.ind }}>개인</TableCell>
            <TableCell align="center" style={{ fontSize: '9pt', color: theme.stock.ins }}>기관</TableCell>
            <TableCell align="center" style={{ fontSize: '9pt', color: theme.stock.for }}>외국인</TableCell>
            <TableCell align="center" style={{ fontSize: '9pt', color: theme.stock.etc }}>기타법인</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              style={{height: 20}}
            >
              <TableCell align="center" style={{ fontSize: '9pt', color: 'white' }}>
                {
                  props.cap >= 1000000000000
                  ? parseInt(props.cap / 100000000000) + '조' + parseInt((props.cap - Math.trunc(props.cap / 100000000000) * 100000000000) / 10000000) + '억'
                  : parseInt(props.cap / 100000000) + '억'
                } 
              </TableCell>
              <TableCell align="center" style={{ fontSize: '9pt', color: 'white' }}>{props.per.toFixed(1)}</TableCell>
              <TableCell align="center" style={{ fontSize: '9pt', color: 'white' }}>{(props.indVolCumCorrel*100).toFixed(1)}%</TableCell>
              <TableCell align="center" style={{ fontSize: '9pt', color: 'white' }}>{(props.insVolCumCorrel*100).toFixed(1)}%</TableCell>
              <TableCell align="center" style={{ fontSize: '9pt', color: 'white' }}>{(props.forVolCumCorrel*100).toFixed(1)}%</TableCell>
              <TableCell align="center" style={{ fontSize: '9pt', color: 'white' }}>{(props.etcVolCumCorrel*100).toFixed(1)}%</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}