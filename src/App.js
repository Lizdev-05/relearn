import "./App.module.css";
import Counter from "./components/counter/Counter";
import ProfileList from "./components/profile/ProfileList";
import UseState from "./components/useState/UseStateArray";
import AuthContainer from "./pages/auth/AuthContainer";
import ProductList from "./pages/filter/product/ProductList";
import ControlledForm from "./pages/form/ControlledForm";
import MultipleControlledForm from "./pages/form/MultipleControlledForm";
import UnControlledForm from "./pages/form/UnControlledForm";
import Users from "./pages/gitHubUser/Users";
import Joke from "./pages/jokes/Joke";
import UserProfile from "./pages/userProfile/UserProfile";
import SubList from "./pages/subscription/SubList";
import UseReducerBasics from "./pages/useReducer/UseReducerBasics";
import TaskManager from "./pages/stateTaskManager/TaskManager";
import PractiseTaskList from "./pages/stateTaskManager/practise/PractiseTaskList";
import TaskManagerReducer from "./pages/stateTaskManager/reducerTaskManager/TaskManagerReducer";
import UserApp from "./pages/userContext/UserApp";
import GitHubUsers from "./components/customHook/GitHubUsers";
import ReduxCounter from "./pages/reduxCounter/ReduxCounter";
import RoutingApp from "./pages/route/RoutingApp";

function App() {
  return (
    <div>
      {/* <UnControlledForm /> */}
      {/* <MultipleControlledForm /> */}
      {/* <ControlledForm /> */}
      {/* <Users /> */}
      {/* <Joke /> */}
      {/* <AuthContainer /> */}
      {/* <UserProfile /> */}
      {/* <UseState /> */}
      {/* <ProfileList /> */}
      {/* <Counter /> */}
      {/* <ProductList /> */}
      {/* <SubList /> */}
      {/* <UseReducerBasics /> */}
      {/* <TaskManager /> */}
      {/* <PractiseTaskList /> */}
      {/* <TaskManagerReducer /> */}
      {/* <UserApp /> */}
      {/* <GitHubUsers /> */}
      <ReduxCounter />
      <RoutingApp />
    </div>
  );
}

export default App;
