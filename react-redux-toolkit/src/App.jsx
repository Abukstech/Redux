import "./App.css";
import CakeView from "./features/cake/cakeView";
import { IcecreamView } from "./features/icecream/icecreamView";
import { ParfaitView } from "./features/parfait/parfaitView";
import UserView from "./features/user/userView";

function App() {
  return (
    <>
      <div className="App">
        <CakeView />
        <IcecreamView />
        <ParfaitView />
        <UserView />
      </div>
    </>
  );
}

export default App;
