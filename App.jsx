import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/redux/store";
import Navigator from "./src/navigator/Navigator";

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ backgroundColor: 'white' }}>
        <Navigator />
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
