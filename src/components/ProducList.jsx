import React, { useEffect, useState } from 'react'
import { changeCount } from '../redux/ProductSlice';

import { useDispatch, useSelector } from 'react-redux';

function ProducList() {
  

 //  const dispatch = useDispatch();

  const data = useSelector(state => state.product.items);
  const money = useSelector(state => state.product.money);

  const [count,setCount] = useState();

   const buy = (id) =>{

    const filter = data.find(item =>item.id === id ? {...item.count += 1} : '' ) ;


   } 
   
 

  return (
    <div className="container-fluid flex-row flex-wrap d-flex p-2  justify-content-around">


      <div className="row " >
        <div className="col">
          {data.map(item => (
            <div key={item.id} className="card p-2 m-4"  style={{ width: '15rem' }}>
              <img  src={item.image} style={{width:'100%',height:'200px',objectFit:'contain'}} className="card-img-top w-100" alt={item.productName} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">${item.productPrice}</p>
                <div className="d-flex p-2 justify-content-around">
                  <button   disabled={item.count === '0' && true} className="btn btn-danger">sell</button>
                  <div  className="count">{item.count}</div>
                  <button onClick={()=>buy(item.id)}  className="btn btn-primary">buy</button>
                </div>
              </div>
            </div> 

          ))}
        </div>
      </div>
    </div>
  )
}

export default ProducList