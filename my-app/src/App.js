import "./App.css";
import "./bootstrap.css";
import ParentComp from "./courses/course_01/ParentComp";
import LifeCycleA from "./courses/course_02/LifeCycleA";
import BindingEventHandler from "./courses/course_03/BindingEventHandler";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ParentComp /> */}
        {/* <LifeCycleA /> */}
        <BindingEventHandler />
      </header>
    </div>
  );
}

export default App;
