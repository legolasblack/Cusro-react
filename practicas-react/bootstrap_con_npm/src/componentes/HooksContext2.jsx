
import { useContext } from 'react';
import { userContext } from './HooksContext';


export default function HooksContext2() {
    let userState = useContext(userContext)

    if (userState === null) {
        return (
            <>
                {console.log('cargando...Hooks2')}
                <h1>cargando....hooks</h1>
            </>
        )
    } else {
        return (
            <>
                {console.log(userState.abilities[0].ability.name)}

                <h1>{userState.abilities[0].ability.name}</h1>
            </>
        )
    }
}
