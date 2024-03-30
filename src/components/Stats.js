const Stats = ({items}) => {

    if(!items.length){
      return(
        <p className='stats'>
          <em>
            Start adding items to the packing list 🚀
          </em>
        </p>
      )
    }
  
    const numItems = items.length;
    const numPacked = items.filter(item=>item.isPacked).length;
    const percentage = Math.round((numPacked/numItems)*100);
    return (
      <div className="stats">
        <footer>
          <em>
            {
              percentage === 100? 'You are ready to go ✈️':`💼 You have ${numItems} items in Packing list and you have packed ( ${percentage} )% of the list.`
            }
          </em>
        </footer>
      </div>
    );
  };

  export default Stats;