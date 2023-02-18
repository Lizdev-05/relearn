import "./App.module.css";
import Counter from "./components/counter/Counter";
import ProfileList from "./components/profile/ProfileList";
import UseState from "./components/useState/UseStateArray";
import UserProfile from "./pages/userProfile/UserProfile";

function App() {
  return (
    <div>
      <UserProfile />
      {/* <UseState /> */}
      {/* <ProfileList /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
