import React from "react";
import Map from "./Map";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <script
          src="https://unpkg.com/protomaps@1.22.0/dist/protomaps.min.js"
          type="text/javascript"
        />
      </Helmet>
      <Map />
    </div>
  );
}

export default App;
