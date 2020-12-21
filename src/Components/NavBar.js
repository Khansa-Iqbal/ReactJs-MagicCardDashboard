import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Drawer from '@material-ui/core/Drawer';
import FilterList from '@material-ui/icons/FilterList';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import {useStyles} from '../SideBarStyle';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {PageSizeFilterContext, ColorFilterContext, RarityFilterContext, SuperTypeFilterContext} from './FilterContext';

function NavBar (){
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {setOpen(true);};
    const handleDrawerClose = () => {setOpen(false);};

     const[pageSizeFilter, setPageSizeFilter] = useContext(PageSizeFilterContext);
     const[colorFilter, setColorFilter] = useContext(ColorFilterContext);
     const[rarityFilter, setRarityFilter] = useContext(RarityFilterContext);
     const[superTypeFilter, setSuperTypeFilter] = useContext(SuperTypeFilterContext);

     const colorHandleChange = (event) => {
        setColorFilter(event.target.value);
     };
    const rarityHandleChange = (event) => {
        setRarityFilter(event.target.value);
    };
    const superTypeHandleChange = (event) => {
        setSuperTypeFilter(event.target.value);
    };
    const pageSizeHandleChange = (event) => {
        setPageSizeFilter(event.target.value);
    };

    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}>
                <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <FilterList/>
                </IconButton>
                    <Typography variant="h4" color="inherit">
                        Magic Card Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider /><br/>

              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>COLOR</InputLabel>
                    <Select
                    value={colorFilter}
                    onChange={colorHandleChange}
                    label="Color"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Black">Black</MenuItem>
                    <MenuItem value="Blue">Blue</MenuItem>
                    <MenuItem value="Green">Green</MenuItem>
                    <MenuItem value="Red">Red</MenuItem>
                    <MenuItem value="White">White</MenuItem>
                    </Select>
             </FormControl><br/><br/> 
             
             <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>RARITY</InputLabel>
                    <Select
                    value={rarityFilter}
                    onChange={rarityHandleChange}
                    label="Rarity"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>                   
                    <MenuItem value="Rare">Rare</MenuItem>
                    <MenuItem value="Uncommon">Uncommon</MenuItem>
                    <MenuItem value="Common">Common</MenuItem>
                    </Select>
            </FormControl><br/><br/>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>SUPER TYPE</InputLabel>
                    <Select
                    value={superTypeFilter}
                    onChange={superTypeHandleChange}
                    label="SuperType"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Basic">Basic</MenuItem>
                    <MenuItem value="Host">Host</MenuItem>
                    <MenuItem value="Legendary">Legendary</MenuItem>
                    <MenuItem value="Ongoing">Ongoing</MenuItem>
                    <MenuItem value="Snow">Snow</MenuItem>
                    <MenuItem value="World">World</MenuItem>
                    </Select>
            </FormControl><br/><br/>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>PAGE SIZE</InputLabel>
                    <Select
                    value={pageSizeFilter}
                    onChange={pageSizeHandleChange}
                    label="PageSize"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="25">25</MenuItem>
                    <MenuItem value="50">50</MenuItem>
                    </Select>
            </FormControl>
            </Drawer>
        </div>
    )
}         
export default NavBar;


 
    
    


              
