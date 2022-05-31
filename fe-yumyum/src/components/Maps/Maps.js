import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import * as MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
const API_KEY =
  "pk.eyJ1IjoiZG9uaWduYSIsImEiOiJjbDBqMDl1NGgwMnVtM2xwOHN4a3RpZXZrIn0.OJGwZVivvOAMLx4yTVAmqg";
const turf = require("@turf/turf");

export const UserLocation = (props) => {
  mapboxgl.accessToken = API_KEY;
  const coordinate = JSON.parse(props.location);
  const restaurantCoordinate = [coordinate.long, coordinate.lat];
  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
    distance: 0,
  });
  const mapContainer = useRef(null);

  useEffect(() => {
    const restaurantPosition = restaurantCoordinate;
    const currentPosition = document.getElementById("btn-position");
    // location user
    let userLocation = null;

    // map container
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: restaurantPosition,
      zoom: 18,
    });

    // map navigation
    const direction = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
      interactive: true,
      origin: restaurantPosition,
      marker: false,
      controls: {
        inputs: false,
        instructions: false,
        profileSwitcher: false,
        wayname: true,
        geolocate: true,
        languageSwitcher: "id",
        voiceControl: false,
      },
    });
    const nav = new mapboxgl.NavigationControl();
    new mapboxgl.Marker({ color: "red" })
      .setLngLat(restaurantPosition)
      .addTo(map);
    map.addControl(direction, "top-left");
    map.addControl(nav, "bottom-right");
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        zoom: 18,
        marker: false,
        placeholder: "Cari Lokasi",
        reverseGeocode: true,
      })
    );

    // maps on load
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: restaurantPosition,
          },
        },
      ],
    };

    const linestring = {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [],
      },
    };
    map.on("load", () => {
      direction.setOrigin(restaurantPosition);
      map.addSource("location-data", {
        type: "geojson",
        data: geojson,
      });

      currentPosition.onclick = (val) => {
        navigator.geolocation.getCurrentPosition((val) => {
          const { longitude, latitude } = val.coords;
          markLocation(latitude, longitude);
          setPosition((prevState) => ({
            ...prevState,
            lat: latitude,
            lng: longitude,
          }));
        });
      };
      map.on("click", (val) => {
        const { lng, lat } = val.lngLat;
        markLocation(lat, lng);
        setPosition((prevState) => ({
          ...prevState,
          lat: lat,
          lng: lng,
        }));
      });
    });

    // mark location
    const markLocation = (lat, long) => {
      if (userLocation !== null) {
        userLocation.remove();
        geojson.features.pop();
      }

      userLocation = new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);
      direction.setDestination([long, lat]);

      geojson.features.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [long, lat],
        },
      });

      if (geojson.features.length > 1) {
        linestring.geometry.coordinates = geojson.features.map(
          (point) => point.geometry.coordinates
        );

        if (geojson.features.length > 1) {
          geojson.features.pop();
        }
        geojson.features.push(linestring);

        const distance = turf.length(linestring);
        setPosition((prevState) => ({
          ...prevState,
          distance: distance.toFixed(1),
        }));
      }

      map.flyTo({
        center: [long, lat],
        zoom: 18,
        bearing: 0,
        speed: 1,
      });

      if (map !== null) {
        map.getSource("location-data").setData(geojson);
      }
    };

    return () => map.remove();
  }, [mapContainer]);

  return (
    <div>
      <div
        ref={mapContainer}
        className="map"
        onChange={props.setLocation(position)}
      >
        {position.distance <= 0 ? null : (
          <div id="distance" className="distance-container">
            <pre>Jarak: {position.distance.toLocaleString()}km</pre>
          </div>
        )}
      </div>
      {position.distance < 1 && (
        <p style={{ margin: "0px", fontSize: "14px" }}>
          *Jarak pengiriman dibawah 1km tidak dikenai biaya.
        </p>
      )}
      <button id="btn-position" className="btn btn-current-location">
        Posisi Saat Ini
      </button>
    </div>
  );
};
