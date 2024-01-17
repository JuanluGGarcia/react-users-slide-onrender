import { useState } from "react";
import { USERS } from "../../constants/users";


const Cards = () => {
    
    const [counter, setCounter] = useState(0);

    return (

        <div>
            <img src={USERS[counter].profileImage} alt={USERS[counter].name} />
            <h1>Name: {USERS[counter].name}</h1>
            <p>Username: {USERS[counter].username}</p>
            <p>email: {USERS[counter].email}</p>

            <button 
                onClick={() => previous(counter, setCounter)}
                disabled={counter <= 0}    
            >Previous</button>
            
            <button 
                onClick={() => next(counter, setCounter)}
                disabled={counter >= USERS.length - 1}
            >Next</button>
        </div>
    );
};

const previous = (counter, setCounter) => {
	setCounter(counter - 1);
};

const next = (counter, setCounter) => {
	setCounter(counter + 1);
};

export default Cards;
        

	