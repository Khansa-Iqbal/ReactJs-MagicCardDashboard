 import React,{createContext, useState} from 'react';

 export const PageSizeFilterContext = React.createContext();
 export const PageSizeFilterProvider= (props)=>
 {
    const [pageSizeFilter, setPageSizeFilter] =  useState(8);
    return(
        <PageSizeFilterContext.Provider value={[pageSizeFilter, setPageSizeFilter]}>
        {props.children}
        </PageSizeFilterContext.Provider>
         );
 }

 /////////////////////////////

 export const ColorFilterContext = React.createContext();
 export const ColorFilterProvider= (props)=>
 {
    const [colorFilter, setColorFilter] =  useState('');
    return(
        <ColorFilterContext.Provider value={[colorFilter, setColorFilter]}>
        {props.children}
        </ColorFilterContext.Provider>
         );
 }

 /////////////////////////////

 export const RarityFilterContext = React.createContext();
 export const RarityFilterProvider= (props)=>
 {
    const [rarityFilter, setRarityFilter] =  useState('');
    return(
        <RarityFilterContext.Provider value={[rarityFilter, setRarityFilter]}>
        {props.children}
        </RarityFilterContext.Provider>
         );
 }

 /////////////////////////////

 export const SuperTypeFilterContext = React.createContext();
 export const SuperTypeFilterProvider= (props)=>
 {
    const [superTypeFilter, setSuperTypeFilter] =  useState('');
    return(
        <SuperTypeFilterContext.Provider value={[superTypeFilter, setSuperTypeFilter]}>
        {props.children}
        </SuperTypeFilterContext.Provider>
         );
 }