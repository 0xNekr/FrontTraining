import BalanceComponent from "./components/BalanceComponent";
import ChartsComponent from "./components/ChartsComponent";

function App() {

    return (
      <div className={'h-full flex relative items-center justify-center'}>
          <BalanceComponent/>
          <ChartsComponent/>
      </div>
  );
}

export default App;
