import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MoneyTransferConfirmation() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{ padding: 20 }}>
                <TextField
                    disabled
                    id="filled-disabled"
                    label="Alici Adi:"
                    defaultValue="Abdulkerim Karaman"
                    variant="filled"
                    style={{ width: '98%' }}
                />
                <TextField
                    disabled
                    id="filled-disabled"
                    label="IBAN:"
                    defaultValue="TR 7000 0000 1435 0000 3490 00"
                    variant="filled"
                    style={{ width: '98%' }}
                />
                <TextField
                    disabled
                    id="filled-disabled"
                    label="Aciklama:"
                    defaultValue="Okul taksit odemesi"
                    variant="filled"
                    style={{ width: '98%' }}
                />
                <Button style={{ width: '98%', marginLeft: 8, marginTop: 3, height: 60, backgroundColor: '#FF5733' }} variant="contained">
                    <Typography variant="button" fontWeight="bold">
                        Devam
                    </Typography>
                </Button>
            </div>
        </Box>
    );
}
