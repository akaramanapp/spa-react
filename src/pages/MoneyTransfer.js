import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function MoneyTransfer() {
  const navigate = useNavigate();
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  const handleClick = () => {
    // Yönlendirme işlemi
    navigate('/confirmation');
  };

  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{ padding: 20 }}
      >
        <TextField style={{ width: '98%' }} id="outlined-basic" label="Alici Adi" variant="outlined" />
        <TextField style={{ width: '98%' }} id="outlined-basic" label="IBAN" variant="outlined" />
        <TextField style={{ width: '98%' }} id="outlined-basic" label="Aciklama" variant="outlined" />
        <TextField
          id="outlined-select-currency"
          style={{ width: '98%' }}
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label + ' ' + option.value}
            </MenuItem>
          ))}
        </TextField>
        <Button onClick={handleClick} style={{ width: '98%', height: 60, backgroundColor: '#FF5733' }} variant="contained">
          <Typography variant="button" fontWeight="bold">
            Devam
          </Typography>
        </Button>
      </Box>
    </div>
  );
}

export default MoneyTransfer;
