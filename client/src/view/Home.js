import React from 'react'
import { Box, Grid } from '@mui/material'
import pizza from '../images/pizza1.jpg'

function Home() {
    return (
        <>
            <Box >
                <Grid container spacing={1} sx={{ height: '20vh', background: 'red' }}>
                    <Grid item md={7} xs={7}>

                    </Grid>
                    <Grid item md={5} xs={5}>
                        <img
                            src={pizza}
                            width='100%'
                            height='auto'
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home