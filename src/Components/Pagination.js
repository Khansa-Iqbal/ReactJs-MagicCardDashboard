import React from 'react';
import Button from '@material-ui/core/Button';

const Pagination =({cardsPerPage, totalCards, paginate}) =>{
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalCards / cardsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            {pageNumbers.map(number =>(
             <Button
                onClick={()=>paginate(number)}
                variant="contained"
                color="primary"
                >
                {number}
            </Button>
            ))}
            <br/><br/><br/><br/>
        </div>
    )
}
export default Pagination;