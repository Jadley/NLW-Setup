import { Habit } from "./components/Habit";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Habit completed={5} />
      <Habit completed={25} />
      <Habit completed={40} />
      <Habit completed={60} />
    </div>
  );
}

export default App;
