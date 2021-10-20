import React from 'react'

function useInputs() {
    const [state, setstate] = React.useState('')
    var methods = {
        handleChange(evt) {
            setstate(evt.target.value)
        },
        reset() {
            setstate('')
        }
    }
    return {state,...methods}

}

export default useInputs;