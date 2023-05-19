import { Fragment } from "react";

import "./App.css";
import FileDashboard from "./components/explorer/FileDashboard";
import CodeEditor from "./components/code-playground/CodeEditor";
import FooterSelector from "./components/footer/FooterSelector";

function App() {
  return (
    <Fragment>
      <div className="container">
        <FileDashboard />
        <div style = {{'width':"100%" , 'height': "100%"}}>
          <CodeEditor />
          <FooterSelector />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
