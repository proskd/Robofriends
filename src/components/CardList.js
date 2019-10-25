import React from 'react';
import Card from './Card';

const CardList = ({robots}) => { 
    return (
        <div>
            {
                robots.map((r) => {
                    return <Card key={'robot'+r.id} id={r.id} name={r.name} email={r.email}/>;
                })
            }
        </div>
    );
};

export default CardList;