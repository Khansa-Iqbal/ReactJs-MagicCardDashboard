import React, {useContext}from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';
import {FilterContext} from '../App';

const MagicCard = (props) => {
    return(
        <div>
            {props.magicCard ? (
                (<Card>
                    <CardMedia style={{height: 50, paddingTop: '120%'}}
                    image ={props.magicCard.imageUrl}
                    title={props.magicCard.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component ="h2">
                            {props.magicCard.name}
                        </Typography>
                        <Typography component ="p" >
                           Colors:  {props.magicCard.colors}
                           <br/>
                           Rarity: {props.magicCard.rarity}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small" color ="primary" href ={props.magicCard.imageUrl} target="_blank"> */}
                        <Link to ={`/${props.magicCard.id}`}>
                        <Button size="small" color ="primary"  target="_blank">
                            Show the magic card
                        </Button>
                        </Link>
                    </CardActions>
                </Card>)
            ) : null}
        </div>
    )
}
export default MagicCard
//href ={`https://api.magicthegathering.io/v1/cards/`+props.magicCard.id}
//onClick ={()=>history.push(`/${props.magicCard.id}`)}
// onClick ={() =><DisplayCard id ={props.magicCard.id}/>}

// if(appliedFilters.color || appliedFilters.rarity || appliedFilters.supertype) !=="" 
// && (
//     (props.magicCard.colors.indexOf(appliedFilters.color))
//  || (props.magicCard.rarity.indexOf(appliedFilters.rarity) )
//  || (props.magicCard.supertype.indexOf(appliedFilters.supertype))
//  === -1)
// { return <div> </div>}

 //const filter = 'Rare'
    //if(filter !=="" && props.magicCard.rarity.indexOf(filter) === -1) { return <div> </div>}
    

    // if
    // (((appliedFilters.color && appliedFilters.rarity &&  appliedFilters.supertype) !=="")
    //  && 
    // ((props.magicCard.colors.indexOf(appliedFilters.color) && props.magicCard.rarity.indexOf(appliedFilters.rarity) &&props.magicCard.supertypes.indexOf(appliedFilters.supertype) ) === -1))
    //  { return <div> </div>}