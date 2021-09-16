import { useState } from 'react'

import HeaderContext from '../contexts/HeaderContext'

function ContextWrapper({children, navigation}) {
    const [menuItems] = useState(navigation)
    const [color, toggleColor] = useState(true)

    return (
        <HeaderContext.Provider value={{menuItems, color, toggleColor}}>
            {children}
        </HeaderContext.Provider>
    )
}

export default ContextWrapper
