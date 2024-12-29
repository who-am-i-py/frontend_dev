import "./App.css";
import "./bootstrap.css";
import ParentComp from "./courses/course_01/ParentComp";
import LifeCycleA from "./courses/course_02/LifeCycleA";
import BindingEventHandler from "./courses/course_03/BindingEventHandler";
import ParentCompMemo from "./courses/course_04/ParentCompMemo";
import RefDemo from "./courses/course_05/RefDemo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ParentComp /> */}
        {/* <LifeCycleA /> */}
        {/* <BindingEventHandler /> */}
        {/* <ParentCompMemo /> */}
        <RefDemo />
      </header>
    </div>
  );
}

export default App;
