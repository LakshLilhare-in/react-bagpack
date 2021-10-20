import React from 'react'

function useBooleanToggler() {
    const [state, setstate] = React.useState(false)
    var methods = {
        toogle() {
            setstate(!state)
        },
    }
    return {state,...methods}

}

export default useBooleanToggler