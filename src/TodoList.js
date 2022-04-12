import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import './TodoList.css';
import pencil from './img/pencil.png';


const TodoList = () => {
  
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    inputData && setItems([...items , inputData]);
    setInputData('');
  }

  const deleteItem = (id) => {
     const updateItems = items.filter((item, index) => {
       return index !== id;
     })
     setItems(updateItems);
  }

  const removeAll = () => {
    setItems([]);
  }

  return (
    <>
        <div className="main-div">
          <div className="child-div">
            <figure>
              <img src={pencil} className="img-note" alt="todologo" />
              <figcaption>Add Your List Here</figcaption>
            </figure>

            <div className="addItems">
              <input 
                type="text"
                placeholder="Add Item..." 
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              <FontAwesomeIcon 
                icon={faPlus}
                className="addClick"
                title="Add Item"
                onClick={addItem}  
              />
            </div>

            <div className="show-Item">
               <div className="each-item">
                 {items.map((item, ind) => {
                   return( 
                   <div key={ind}>
                     <h3>{item}
                        <FontAwesomeIcon 
                          icon={faTrash} 
                          className="addClick" 
                          title="Delete Item"
                          onClick={() => deleteItem(ind)}
                        />
                     </h3>
                     </div>
                    )})}
                </div>    
            </div>
            
            <div className="show-Item">
                <button className="remove" onClick={removeAll}> Remove All</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default TodoList