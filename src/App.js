import { useState } from 'react';
import Stats from './components/Stats';
import PackingList from './components/PackingList';
import Form from './components/Form';
import Header from './components/Header';

const App = () => {

  const [items,setItems] = useState([]);

  const handleAddItems=(item)=>{
    setItems((items)=>[...items,item]);
  }

  const handleRemove = (id)=>{
    setItems((items) => items.filter(item=>item.id !== id));
  }

  const handleToggleItems = (id) =>{
    setItems(
      (items)=> items.map(item => item.id === id?{...item,isPacked:!item.isPacked}: item )
    )
  }

  const handleClearList = () =>{
    const confirmed = window.confirm("Are you sure to delete all items in the List? ");

    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList items = {items} onDeleteItems = {handleRemove} onToggleItems={handleToggleItems} onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
};

export default App;
