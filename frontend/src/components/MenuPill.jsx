import React from 'react'

const MenuPill = ({title, style}) => {
  return (
    <>
        <span className={`py-2 px-4 rounded-full border-[1px] text-sm ${style}`}>{title}</span>
    </>
  )
}

export default MenuPill