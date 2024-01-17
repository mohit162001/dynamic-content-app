import React from 'react'

function MenuButtons({children, onSelect, isSelected}) {
  return (
    <li><button className={isSelected?'active':''} onClick={onSelect}>{children}</button></li>
  )
}

export default MenuButtons