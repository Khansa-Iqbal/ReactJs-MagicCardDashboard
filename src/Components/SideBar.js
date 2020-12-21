// import React,{useContext} from 'react';
// import Drawer from '@material-ui/core/Drawer';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import { useTheme } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import clsx from 'clsx';
// import AppBar from '@material-ui/core/AppBar';
// import {useStyles} from '../SideBarStyle';

// export default function SideBar(){
//         const classes = useStyles();
//         const theme = useTheme();
//         const [open, setOpen] = React.useState(false);
      
//         const handleDrawerOpen = () => {
//           setOpen(true);
//         };
      
//         const handleDrawerClose = () => {
//           setOpen(false);
//         };
      
//         return (
//           <div >
//             {/* <CssBaseline /> */}
//             {/* <AppBar
//               position="fixed"
//               className={clsx(classes.appBar, {
//                 [classes.appBarShift]: open,
//               })}
//             > */}
//               <Toolbar>
//                 {/* <IconButton
//                   color="inherit"
//                   aria-label="open drawer"
//                   onClick={handleDrawerOpen}
//                   edge="start"
//                   className={clsx(classes.menuButton, open && classes.hide)}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Typography variant="h6" noWrap>
//                   Filter Cards
//                 </Typography> */}
//               </Toolbar>
//             {/* </AppBar> */}
//             {/* <Drawer
//               className={classes.drawer}
//               variant="persistent"
//               anchor="left"
//               open={open}
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//             >
//               <div className={classes.drawerHeader}>
//                 <IconButton onClick={handleDrawerClose}>
//                   {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                 </IconButton>
//               </div>
//               <Divider />
//             </Drawer> */}
//             </div>
//         )
// }