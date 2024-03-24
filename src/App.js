import logo from './logo.svg';
import './App.css';
import ButtonUsage from './component/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
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

  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{ padding: '10px' }}
      >
        <TextField style={{ width: '80%' }} id="outlined-basic" label="Alici Adi" variant="outlined" />
        <TextField style={{ width: '80%' }} id="outlined-basic" label="IBAN" variant="outlined" />
        <TextField style={{ width: '80%' }} id="outlined-basic" label="Aciklama" variant="outlined" />
        <TextField
          id="outlined-select-currency"
          style={{ width: '80%' }}
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button style={{ width: '80%', height: 60, backgroundColor: '#FF5733' }} variant="contained">
          <Typography variant="button" fontWeight="bold">
            Devam
          </Typography>
        </Button>
      </Box>
    </div>
  );
}

export default App;
