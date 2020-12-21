import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import '../App.css';
import ThemeContext from './ThemeContext';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const DisplayCard = props =>{
    const theme = useContext(ThemeContext);
    const [cardDetails, fetchCardDetails]= useState({})
    const[loading, setLoading] = useState(true)
    useEffect( ()=>{
        axios.get(`https://api.magicthegathering.io/v1/cards/${props.match.params.id}`)
    .then(response =>
        {
            fetchCardDetails(response.data.card)
            setLoading(false)
        }       
        )
    .catch(error => {
        console.log(error)
        console.log('Could not fetch the card details from the API!')
        setLoading(false)
    })
    },[])

    const defaultProps = {
        bgcolor: (cardDetails.rarity == 'Rare')? "secondary.main" : ((cardDetails.rarity  == 'Common')?'grey.500':'primary.main') ,
        borderColor: 'text.primary',
        m: 1,
        border: 5,
        style: { width: '20rem', height: '20rem' },
      };

    const handleBack =() =>{
      props.history.goBack();
    }
    
    console.log('KKKKKK' + props.match.params);  


    if(loading)
    {
        return(<h1>Loading the card details...  This might take a few seconds.</h1>)
    }
    else{
    return(
        <div style = {theme} className ="CardDetails">
           <h1>Magic Card Details!</h1>
            <h2>{cardDetails.name}</h2>
           <h3>
           <Box marginLeft = '35%' borderRadius={16} {...defaultProps}> 
           <img src={cardDetails.imageUrl} alt=""/>
           </Box>
           <br/>
           Color: {cardDetails.colors} <br/>
           Rarity: {cardDetails.rarity} <br/>
           Layout: {cardDetails.layout} <br/>
           {cardDetails.text} <br/>
           </h3>
           <br/>
           <Button
            onClick ={handleBack}
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon/>}
            >
            TO DASHBOARD
        </Button>
        <br/><br/>
        </div>
    )
    }
}
export default DisplayCard