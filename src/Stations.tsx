
import { Station } from "./TrainsArray";



type StationProps = {
  blueStations: Station[];
  stationOptionValue: string;
  setStationOptionValue: React.Dispatch<React.SetStateAction<string>>


}



export default function StationComp({ blueStations, stationOptionValue, setStationOptionValue }: StationProps) {
  // THE CODE BELOW IS SET TO CHANGE THE LINES
  // const [line, setLine] = useState<string>('BLUE')
  // const lineMetro:JSX.Element;


  // if (line === 'BLUE') {
  //     lineMetro = <blueLine/> blueLine comp
  // } else if (line === 'RED') {
  //     lineMetro = <redline/> redLine comp
  // } else if (line === 'GREEN') {
  //     lineMetro = <greenline/> greenLine comp
  // }




  function handleEvent(event: React.ChangeEvent<HTMLSelectElement>) {
    setStationOptionValue(event.target.value)
  }


  console.log(stationOptionValue)
  return (
    <>

      <div className="station-container">
        <div className="station-label">
          <label>Stations</label>
        </div>

        <div className='station-dropdown'>
          {/* // INSIDE THIS DIV, ONLY A COMPONENT WILL EXIST -> {lineMetro}      */}
          <select value={stationOptionValue} onChange={handleEvent}>
            <option value=''>Select Station</option>
            {blueStations.map(station => (
              <option value={station.stationId}>{station.stationName}</option>
            ))}
          </select>
        </div>

      </div>
      {/* <StationInfo blueStations={blueStations} /> */}

    </>
  )
}




// function StationInfo({ blueStations }: StationProps) {
//   return (
//     <div className="station-info">
//       {blueStations[0].stationName} <br></br>
//       <br></br>
//       <div>
//         Train B1: Is coming now <br></br>
//         Train B2: 1min <br></br>
//         Train B3:  2min <br></br>
//       </div>
//     </div>
//   )
// }