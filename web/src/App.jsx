import "./App.css";

import Hospital from "./components/Hospital";

import map from "./images/map.png";

export default function App() {
  return (
    <div className="app-section">

      <div className="content-section">
        {/* <Hospital /> */}
        <div className="title-section">
          <h1 className="title-text">Ontario Wait Times</h1>
        </div>
      </div>
        <img className="map"src={map} alt="Map" />
    </div>
  );
}
