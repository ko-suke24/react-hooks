import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count +1)
  const decrement = () => setCount(count -1)

  const reset = () => setCount(0)
  const double= () => setCount(count *2)

  return (
    <React.Fragment>
      <div>count: {count}</div>
        <div>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
        </div>
        <div>
          <button onClick={reset}>Reset</button>
          <button onClick={double}>×2</button>
        </div>


    

    </React.Fragment>
  )
}

export default App
