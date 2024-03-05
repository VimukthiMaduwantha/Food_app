import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import pizza from '../images/pizza1.jpg'

function Home() {
    return (
        <>
            <Box sx={{ marginTop: '5px' }} >
                <Grid container spacing={1} sx={{ height: '70vh' }} >
                    <Grid item md={7} xs={7} sx={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontFamily: 'Dancing Script, cursive', fontSize: { md: '75px', xs: '30px' }, fontWeight: 'bold', letterSpacing: '5px' }}>Flavours that</Typography>
                        <Typography sx={{ fontFamily: 'Dancing Script, cursive', fontSize: { md: '60px', xs: '25px' }, fontWeight: 'bold', letterSpacing: '5px' }}>speak Louder</Typography>
                        <Typography sx={{ fontFamily: 'Dancing Script, cursive', fontSize: { md: '45px', xs: '20px' }, fontWeight: 'bold', letterSpacing: '5px' }}>than word!</Typography>
                    </Grid>
                    <Grid item md={5} xs={5} sx={{ height: '70vh', overflow: 'hidden' }} >
                        <img
                            src={pizza}
                            width={500}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home