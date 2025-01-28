import { Provider, useSelector } from "react-redux";
import store from "./stores/store";

import React from "react";
import RoutesComponent from "./routes/Routes";



function App() {
  return (
    <>
      <Provider store={store}>
        <RoutesComponent />
      </Provider>
    </>
  );
}

export default App;
