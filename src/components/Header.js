import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import logo from '../assets/image/logo.png'
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core/styles'
import {ViewSequential,ViewParallel} from 'mdi-material-ui'
import Paper from '@material-ui/core/Paper'

const width = window.innerWidth*0.8
const useStyles = makeStyles({
    root:{
        position:"fixed",
        top:'10%',
        left:'10%',
    },
    item:{
        alignSelf:'center',
        textAlign:'center'
    },
    logo:{
        minWidth:'4rem',
        minHeight:'4rem',
        backgroundImage:`url(${logo})`,
        backgroundSize:'cover'
    },
    view:{
       
    },
    paper:{
        width:`${width}px`,
        height:'120px'
    }

})

export default function Header({drawerOpen,hanldeClickDrawer}) {
    const classes = useStyles()
    return (
        <>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={6}>
                    <IconButton size='medium' className={classes.logo}></IconButton>
                </Grid>
                <Grid item xs={6} className={classes.item}>
                    <IconButton 
                        className={classes.view} 
                        onClick={()=>hanldeClickDrawer(true)}
                    >
                        <ViewSequential />
                    </IconButton>
                    <Drawer open={drawerOpen} onClose={()=>hanldeClickDrawer(false)}>
                        <Paper className={classes.paper}>
                            This is from paper
                        </Paper>
                    </Drawer>
                </Grid>
            </Grid>
        </>
    )
}
