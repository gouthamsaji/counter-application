import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeRange, decrement, increment, reset } from './redux/counterSlice';
import { useState } from 'react';

function App() {

  const count = useSelector((state)=>state.counter.value)

  const [range, setRange] = useState(0)

  // dispatch to call the actions
  const dispatch = useDispatch() 

  console.log(range)

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height: '100vh' }}>
      <div className='rounded p-5 d-flex flex-column justify-content-between bg-light' style={{height:'600px',width:'500px'}}>
        <h3 className='text-primary text-center'>Counter Application</h3>
        <h1 style={{fontSize:'150px'}} className='text-center'>{count}</h1>
        <div className='d-flex justify-content-between'>
          <button onClick={()=>dispatch(decrement())} type="button" class="btn btn-warning">Decrement</button>
          <button onClick={()=>dispatch(reset())} type="button" class="btn btn-danger">Reset</button>
          <button onClick={()=>dispatch(increment())} type="button" class="btn btn-success">Increment</button>
        </div>
        <div className='d-flex justify-content-between'><input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control w-75' placeholder='Range'/><button type='button' class="btn btn-primary" onClick={()=>dispatch(changeRange(Number(range)))}>Click</button></div>
      </div>
    </div>
  )
}

export default App