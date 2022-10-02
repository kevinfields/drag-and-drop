import React from 'react'

const DragAndDropItem = (props) => {
  
  return (
    <div
      draggable={true}
      className={props.objectClassName ? props.objectClassName : null}
      onDrag={() => props.dragObject()}
    >
      {props.item}
    </div>
  )
}

export default DragAndDropItem