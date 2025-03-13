import { useState } from "react"
import { Train } from "./TrainsArray";

type PassengersProps = {
    trains: Train[];
    setTrains: React.Dispatch<React.SetStateAction<Train[]>>
    setNoTrainsPassed: React.Dispatch<React.SetStateAction<boolean>>

}

export default function Passengers({ trains, setTrains, setNoTrainsPassed }: PassengersProps) {
    const [passengerCount, setPassengerCount] = useState<number>(0)
    const [submitCount, setSubmitCount] = useState<number>(0)
    const [index, setIndex] = useState<number>(0)
    const MAX_INDEX = trains.length - 1

    // Functionality of updating the train
    function updateCurrentTrain() {
        const copyOfTrains = JSON.parse(JSON.stringify(trains))
        const currentTrain = copyOfTrains[index]
        currentTrain.passengers = passengerCount;
        setTrains(copyOfTrains)
    }

    // Clamp the index state because findCurrentTrain will return undefined if index is greater than the actual number of trains 
    function setClampedIndexCount() {
        setIndex(prevIndex => Math.min(prevIndex + 1, MAX_INDEX))
    }

    // Derived variable to stop user from updating non-existing trains
    const disableSubmitButton = submitCount > trains.length - 1;

    // Buttons functions
    const incrementPassenger = () => setPassengerCount((n: number) => n + 1)
    function alterStates() {
        updateCurrentTrain()
        setSubmitCount((n) => n + 1)
        setClampedIndexCount()
        setPassengerCount(0)
        setNoTrainsPassed(false)
    }

    return (

        <div className="passengers-container"> <h2>Passengers</h2>
            {(disableSubmitButton ? <div></div> : <div className="train-header">Train {trains[index].name}</div>)}
            <div className="display-screen">{passengerCount}</div>
            <div className="btn add-btn">
                <button onClick={incrementPassenger}>Add</button>
            </div>
            <div className="btn submit-btn">
                <button onClick={alterStates} disabled={disableSubmitButton}>Submit</button>
            </div>

        </div>
    )
}