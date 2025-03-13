import { useState } from "react";
import { Train } from "./TrainsArray"

type TrainsProps = {
    trains: Train[],
    noTrainsPassed: boolean
}

type displayTrainINfoProps = {
    trains: Train[];
    selectedOption: string;
}

export default function Trains({ trains, noTrainsPassed }: TrainsProps) {

    // Hold a state with the option value, to use it for displaying each train's info
    const [selectedOption, setSelectedOption] = useState<string>('');

    function handleChangeOfOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedOption(event.target.value)
    }

    return (
        <>
            <div className="trains-container">
                <div className="trains-label">
                    <label>Trains</label>
                </div>
                <div className="trains-drowpdown">
                    {noTrainsPassed ? <p className="no-train-message">Insert passengers to the train!</p> :
                        <select value={selectedOption} onChange={handleChangeOfOption}>
                            <option value=''>Select Train</option>
                            {trains.map(train =>
                                <option value={train.trainId}>Train {train.name}</option>
                            )}
                        </select>}
                </div>
            </div>
            {(selectedOption !== '') &&
                <DisplayTrainInfo
                    trains={trains}
                    selectedOption={selectedOption} />}
        </>
    )
}

function DisplayTrainInfo({ trains, selectedOption }: displayTrainINfoProps) {
    return (
        <>
            {trains.map(train => {
                if (selectedOption === train.trainId) {
                    return <div className="display-train-info">Train {train.name} has {train.passengers} passengers</div>
                }
            })
            }
        </>
    )
}

