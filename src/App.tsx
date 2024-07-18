import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/CT-frontend-testV2/">
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
