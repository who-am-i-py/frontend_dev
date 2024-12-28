import "./App.css";
import "./bootstrap.css";
import ParentComp from "./courses/course_01/ParentComp";
import LifeCycleA from "./courses/course_02/LifeCycleA";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ParentComp /> */}
        <LifeCycleA />
      </header>
    </div>
  );
}

export default App;
