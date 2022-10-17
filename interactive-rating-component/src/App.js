import RatingComponent from "./components/RatingComponent";
import ThankYouComponent from "./components/ThankYouComponent";
import {useState} from "react";

function App() {
    const [buttonSelected, setButtonSelected] = useState(0);
    const [rate, setRate] = useState(0);

    return (
      <div>
          {
              rate === 0 ?
                  <RatingComponent buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} setRate={setRate}/>
                  :
                  <ThankYouComponent rate={rate}/>
          }
      </div>
  );
}

export default App;
