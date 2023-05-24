import React, { useState } from 'react'
import {
    Button, 
    TextField, 
    Grid, 
    Typography, 
    Container, 
    FormControlLabel, 
    Checkbox,
    ToggleButton, 
    ToggleButtonGroup,
    ThemeProvider,
    createTheme,
} from '@mui/material'


export default function SignUp() {

    // Add your form submission logic here

    return (
            <Container maxWidth="sm" sx={{bgcolor: 'white', height: '100vh', pt: 5}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign Up
                </Typography>
                <form >
                <Grid container spacing={2}>
                <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="text"
                                label="Email"
                                variant="outlined"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                variant="outlined"
                                name="password"
                            />
                        </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="I accept the terms and conditions"
                        />
                    </Grid>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>  
                    </Grid>              
                </form>
            </Container>
    );
}
