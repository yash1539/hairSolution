import React from 'react'

function Button({text, type}) {

    return (
        <div className={type? 'button-gold' : 'button'}>
            {text}
        </div>
    )
}

export default Button