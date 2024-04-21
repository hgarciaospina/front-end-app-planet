import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
  LayerGroup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { BaseLayer, Overlay } = LayersControl;

const App = () => {
  const center = [4.814300822210164, -75.69463367456812]; // Coordenadas del centro del mapa

  const [polygonCoords] = useState([
    [4.8149369814651, -75.69505745855403],
    [4.81402610914629, -75.69511341127158],
    [4.813889072669468, -75.69426900022636],
    [4.814720745374674, -75.69419368243543],
  ]);
  return (
    <MapContainer
      center={center}
      zoom={16}
      style={{ height: "950px", width: "100%" }}
    >
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>

        <BaseLayer name="OpenTopoMap">
          <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
        </BaseLayer>

        <Overlay checked name="Marcadores">
          <LayerGroup>
            <Polygon
              positions={polygonCoords}
              pathOptions={{ color: "blue", fillColor: "red" }}
            >
              <Popup>
                <strong>
                  <p>Bolivar Plaza</p>
                </strong>
              </Popup>
            </Polygon>
          </LayerGroup>
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default App;
