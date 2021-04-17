import React from "react";
import { useHistory } from 'react-router-dom'

export default function Home() {

    const history = useHistory()
    const routeToPizza = () => {
        history.push('./pizza')
    }

  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>This a homepage test</p>
      <button onClick={routeToPizza} className='pizza-button'>
          Get the Za!
      </button>
    </div>
  );
}
