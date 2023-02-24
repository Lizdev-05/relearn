import "./App.module.css";
import Counter from "./components/counter/Counter";
import ProfileList from "./components/profile/ProfileList";
import UseState from "./components/useState/UseStateArray";
import AuthContainer from "./pages/auth/AuthContainer";
import ControlledForm from "./pages/form/ControlledForm";
import Users from "./pages/gitHubUser/Users";
import Joke from "./pages/jokes/Joke";
import UserProfile from "./pages/userProfile/UserProfile";

function App() {
  return (
    <div>
      <ControlledForm />
      {/* <Users /> */}
      {/* <Joke /> */}
      {/* <AuthContainer /> */}
      {/* <UserProfile /> */}
      {/* <UseState /> */}
      {/* <ProfileList /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
