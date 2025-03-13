import './App.css'
import { useState } from "react"
import { TRAINS } from "./TrainsArray" // List of trains
import { Train } from "./TrainsArray" //  Type of trains
import Passengers from "./Passengers"
import Trains from "./Trains"

function App() {
  const [trains, setTrains] = useState<Train[]>(TRAINS)
  const [noTrainsPassed, setNoTrainsPassed] = useState<boolean>(true)

  return (
      <>
        <header>
          <div className="header">
            <h1>Welcome to the train station</h1>
          </div>
        </header>
        <main>
          <div className='container'>
            <Trains
              trains={trains}
              noTrainsPassed={noTrainsPassed}
            />
            <Passengers
              trains={trains}
              setTrains={setTrains}
              setNoTrainsPassed={setNoTrainsPassed}
            />
          </div>
        </main>
      </>
    )
}

export default App
