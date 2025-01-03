import "./App.css";
import "./bootstrap.css";
import ParentComp from "./courses/course_01/ParentComp";
import LifeCycleA from "./courses/course_02/LifeCycleA";
import BindingEventHandler from "./courses/course_03/BindingEventHandler";
import ParentCompMemo from "./courses/course_04/ParentCompMemo";
import RefDemo from "./courses/course_05/RefDemo";
import RefDemoWithCallBack from "./courses/course_05/RefDemoWithCallBack";
import FocusInput from "./courses/course_06/FocusInputComp";
import RefForwordParent from "./courses/course_07/RefForwordParent";
import ContainerModel from "./courses/course_08/Portals";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ParentComp /> */}
        {/* <LifeCycleA /> */}
        {/* <BindingEventHandler /> */}
        {/* <ParentCompMemo /> */}
        {/* <RefDemo />
        <RefDemoWithCallBack /> */}
        {/* <FocusInput /> */}
        {/* <RefForwordParent /> */}
        <ContainerModel />
      </header>
    </div>
  );
}

export default App;
