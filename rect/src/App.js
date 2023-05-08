import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Form from "./Components/Form";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;