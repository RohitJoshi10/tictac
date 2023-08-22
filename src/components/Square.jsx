import React from 'react'

function Square(props) {
  return (
    <div
     onClick={props.onClick}
     style={{ 
        border: "3px solid",
        height: "100px",
        width: "40%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        // color: "yellow",
        }}
     className='square'>
      <h4>{props.value}</h4>
    </div>
  )
}

export default Square;
