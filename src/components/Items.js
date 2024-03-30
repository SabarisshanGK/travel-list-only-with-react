const Item = ({ iTem ,handleRemove,onToggle}) => {
    return (
      <li>
        <input type='checkbox' value={iTem.isPacked} onChange={()=>onToggle(iTem.id)}/>
        <span style={iTem.isPacked ? { textDecoration: 'line-through' } : {}}>
          {iTem.quantity}{iTem.description}
        </span>
        <button className="cancel" onClick={()=>handleRemove(iTem.id)}>❌</button>
      </li>
    );
  };

  export default Item;