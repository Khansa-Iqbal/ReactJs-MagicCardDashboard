import React,{ useContext, useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid' ;
import TextField from '@material-ui/core/TextField';
import MagicCard from './MagicCard';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import SortByAlpha from '@material-ui/icons/SortByAlpha';
import Pagination from './Pagination';
import {PageSizeFilterContext, ColorFilterContext, RarityFilterContext, SuperTypeFilterContext} from './FilterContext';


function CardList(){
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const[sortType, setSortType]= useState('asc');
    const [currentCard, setCurrentCard]= useState(1);

    
    const ascending= 'asc';
    const descending='desc';

     const[pageSizeFilter] =useContext(PageSizeFilterContext);
     const[colorFilter] =useContext(ColorFilterContext);
     const[rarityFilter] =useContext(RarityFilterContext);
     const[superTypeFilter] =useContext(SuperTypeFilterContext);

    useEffect( ()=>{
    axios.get('https://api.magicthegathering.io/v1/cards')
    .then(response =>
        {
            setCards(response.data.cards)
            setLoading(false);
            console.log(' pageSizeFilter   '+ pageSizeFilter)
            console.log(' colorFilter   '+  colorFilter )
            console.log(' rarityFilter   '+  rarityFilter )
            console.log(' superTypeFilter   '+ superTypeFilter )
        }       
        )
    .catch(error => {
        console.log(error)
        console.log('Could not fetch data from the API!')
        setLoading(false);
    })
    },[])

   const  handleSearchChange =(e)=>{
        setFilter( e.target.value)
    }

    const sortedCards = cards.sort((a,b) => {
        const isReversed = (sortType==='asc') ? 1 : -1;
        return isReversed*a.name.localeCompare(b.name)
    });
    const toggleSort =() =>
    {(sortType==='desc')? setSortType(ascending): setSortType(descending);}
  
    //Get current cards
    const indexOfLastCard = currentCard*pageSizeFilter;
    const indexOfFirstCard = indexOfLastCard - pageSizeFilter;
    const currentCards = sortedCards.slice(indexOfFirstCard, indexOfLastCard)

    //Change page
    const paginate= pageNumber => setCurrentCard(pageNumber);

    console.log("hhhhhhhh  " + colorFilter );

    if(loading)
    {
        return(<h1>Loading the cards...  This might take a few seconds.</h1>
            )
    }
    else {
       return(
           <div>
               {}
               {sortedCards ? (
                <div>
                    <div>
                    <TextField style ={{padding: 24}}
                    id = "searchInput"
                    placeholder = "Search for the cards"
                    margin = "normal"
                    variant="filled"
                    onChange = {handleSearchChange} 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    </div>
                    <div>
                        <Button
                            onClick ={toggleSort}
                            variant="contained"
                            color="primary"
                            endIcon={<SortByAlpha/>}
                            >
                            Sort
                        </Button>
                    </div>
                    <Grid container spacing ={24} style= {{padding :80}}>
                        {currentCards.map(currentCard =>
                        (   (colorFilter !== '') ? 
                            (currentCard.colors.includes(colorFilter) && 
                            //currentCard.supertypes.includes(superTypeFilter) &&
                            //currentCard.rarity.includes(rarityFilter) &&
                            (
                            currentCard.name.includes(filter) &&
                            (<Grid item xs ={12} sm={6} lg={4} xl ={3} style= {{padding:30}}>
                            <MagicCard magicCard= {currentCard} key={currentCard.id}/>
                            </Grid>)
                            )) :
                            (
                                currentCard.name.includes(filter) &&
                                (<Grid item xs ={12} sm={6} lg={4} xl ={3} style= {{padding:30}}>
                                <MagicCard magicCard= {currentCard} key={currentCard.id}/>
                                </Grid>)
                             )

                        ))}
                    </Grid>
                    <Pagination 
                    cardsPerPage= {pageSizeFilter}
                    totalCards= {cards.length}
                    paginate= {paginate}/>
                </div>  
               ): " "}
           </div>     
  )
 }
}

export default CardList
//currentCard.colors.includes(this.state.filterColor)&&

//currentCard.colors.includes(colorFilter) &&
//currentCard.name.includes(filter) &&
