import * as React from 'react'
import Button from '@mui/material/Button'
import theme from '../../src/theme'


export default function LoginButton() {
  return (
    <Button type="button" variant="contained"       
    sx={{
        color: theme.palette.primary.main,
        backgroundColor: 'white',
      }}>Login</Button>
  )
}
