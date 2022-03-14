import { useState } from 'react'

function useForm(initialState = {}) {

    const [state, setState] = useState(initialState);

    const reset = () => {
        setState(initialState)
    }

    const handleChange = ({ target }) => {

        setState({
            ...state,
            [target.name]: target.value,
        })
    }

    return [state, handleChange, reset]
}

export default useForm