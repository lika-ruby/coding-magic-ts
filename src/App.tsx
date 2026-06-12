import "./App.css";

import { YearBorn } from "./sections/YearBorn/YearBorn.tsx";
import { GuessNumber } from "./sections/GuessNumber/GuessNumber.tsx";
import { Rsp } from "./sections/RSP/RSP.tsx";
import { Team } from "./sections/Team/Team.tsx";
import { Calc } from "./sections/Calc/Calc.tsx";
import { CalcTime } from "./sections/CalcTime/CalcTime.tsx";
import { TheeNumbers } from "./sections/ThreeNumbers/TreeNumbers.tsx";
import { Scientists } from "./sections/Scientists/Scientists.tsx";

function App() {
  return (
    <>
      <YearBorn />
      <GuessNumber />
      <Calc />
      <CalcTime />
      <Rsp />
      <TheeNumbers />
      <Team />
      <Scientists />
    </>
  );
}

export default App;
