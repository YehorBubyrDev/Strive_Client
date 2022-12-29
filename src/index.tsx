import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {App} from "./App";
import { RootStoreProvider } from "./providers/RootStoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <RootStoreProvider>
          <App />
        </RootStoreProvider>
      </BrowserRouter>
    </React.StrictMode>
);