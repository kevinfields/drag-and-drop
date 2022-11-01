import React, {useState} from 'react';
import DragAndDropItem from './DragAndDropItem';

const OrderObjectContainer = (props) => {

  const [highlit, setHighlit] = useState(false);

  const colorName = props.colorName ? props.colorName : 'lightblue';

  const dropItem = () => {
    setHighlit(false);
    props.placeHere(props.dragging);
  };

  return (
    <div
      style={{
        backgroundColor: highlit ? colorName : 'white',
      }}
      className={props.slotClassName}
      onDrop={() => dropItem()}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => setHighlit(true)}
      onDragLeave={() => setHighlit(false)}
    >
      <DragAndDropItem 
        item={props.item} 
        dragObject={() => props.dragObject(props.item)}
        dragging={props.dragging}
        objectClassName={props.objectClassName}
        children={props.children}
      />
    </div>
  )
}

export default OrderObjectContainer