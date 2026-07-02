import React, {useContext} from 'react'
import { CounterContext } from '../context/counterContext'

const Component1 = () => {
    const value = useContext(CounterContext);
    return (
        <div>
            componenet count is {value.count}
        </div>
    )
}

export default Component1
