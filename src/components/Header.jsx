import React from 'react'
import {useSelector} from 'react-redux';

function Header() {

  const money = useSelector(state => state.product.money);
  

  return (
    <div className='header'>
      
        <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fe5481636-ddcc-11e8-b968-1adbb9782acb.jpg?crop=1500%2C1000%2C0%2C0" alt="elon musk" />
        <h2>Spend Elon Musk' Money</h2>
        <div className="money">
            ${money}
        </div>
    </div>
  )
}

export default Header