import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Navigator from "./src/navigator/Navigator";

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
