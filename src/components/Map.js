import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./styles/Map.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [38, 58],
  iconAnchor: [19, 58],
});

L.Marker.prototype.options.icon = DefaultIcon;
//small glitch, when zooming in when there's an image, it breaks the zoom once you close the image
const Map = () => {
  const sites = [
    {
      id: "knossos",
      name: "Knossos",
      position: [35.2985, 25.1596],
      information: [
        {
          image: "./images/knossospalace.jpeg",
          desc: "The palace at Knossos was partially reconstructed by Arthur Evans",
        },
        {
          image: "./images/knossosreconstruction.png",
          desc: "3D reconstruction of the palace at Knossos",
        },
      ],
      description:
        "The palace at Knossos was the largest of the Minoan palaces and was destroyed and rebuilt several times. Although it's the largest, it is most likely not the first.",
    }, //check
    {
      id: "phaistos",
      name: "Phaistos",
      position: [35.0518, 24.8137],
      information: [
        {
          image: "./images/phaistosair.jpeg",
          desc: "Aerial view of the palace",
        },
        { image: "./images/phaistosmap.jpeg", desc: "Map of the palace" },
      ],
      description:
        "The palace at Phaistos is possibly the oldest palace. It was originally constructed during the Protopalatial period, and was also destroyed and rebuilt several times.",
    }, //check
    {
      id: "mallia",
      name: "Mallia",
      position: [35.2932, 25.4929],
      information: [
        {
          image: "./images/malliamap.png",
          desc: "Map of the palace",
        },
        {
          image: "./images/malliagranary.jpeg",
          desc: "Kouloures or granaries",
        },
      ],
      description:
        "The palace at Mallia has the most amount of storage facilities. There is evidence of Old Palace and New Palace construction.",
    }, //check
    {
      id: "zakro",
      name: "Zakro",
      position: [35.0979, 26.2607],
      information: [
        {
          image: "./images/zakroaerial.jpeg",
          desc: "Aerial view of the palace",
        },
        { image: "./images/zakromap.png", desc: "Map of the palace" },
      ],
      description:
        "The palace at Zakro is the smallest and newest of the palaces. There are no signs of Old Palace construction.",
    }, //check
    {
      id: "palaikastro",
      name: "Palaikastro",
      position: [35.195, 26.2755],
      information: [
        {
          image: "./images/Palekastro_ruins.jpg",
          desc: "Archeological site of Palaikastro, source Wikimedia Commons",
        },
      ],
      description:
        "Palaikastro was a settlement that was not located near any of the palaces.",
    }, // check
    {
      id: "gournia",
      name: "Gournia",
      position: [35.1094, 25.7927],
      information: [
        {
          image: "./images/gourniamap.png",
          desc: "Map of the settlement at Gournia",
        },
      ],
      description:
        "Gournia was a settlement of around 400 people that was not located near any of the palaces. It is the most extensively excavated settlement. It had winding, narrow streets and a large open courtyard.",
    }, //check
    {
      id: "vathypetro",
      name: "Vathypetro",
      position: [35.2051, 25.1587],
      information: [
        {
          image: "./images/valeaerial.jpeg",
          desc: "Aerial view of the rural settlement",
        },
      ],
      description:
        "The settlement of Vathypetro was a rural settlement located near Mt. Juktos. It is the location of one of the oldest wine presses in the world.",
    }, //check
    {
      id: "ayia-triada",
      name: "Ayia Triada",
      position: [35.051, 24.7609],
      information: [
        {
          image: "./images/ayiamap.png",
          desc: "Map of the settlement at Ayia Triada",
        },
        {
          image: "./images/aghiasarc.jpeg",
          desc: "The sarcophagus found at Ayia Triada",
        },
      ],
      description:
        "Ayia Triada was an L-shaped settlement that was destoryed in LM IB and reoccupied in LM IIIA. It is the location of the Ayia Triada sarcophagus, which is the only use of Frescoes in a burial context in Crete.",
    }, //check
    {
      id: "nirou-khani",
      name: "Nirou Khani",
      position: [35.3337, 25.2432],
      information: [
        { image: "./images/niroumap.png", desc: "Map of the the villa" },
      ],
      description:
        "Nirou Khani appears to be a residential villa that was used for storage. It is located near the palace at Knossos.",
    }, //check
    {
      id: "amnisos",
      name: "Amnisos",
      position: [35.3338, 25.2274],
      information: [
        {
          image: "./images/houseoflillies.jpeg",
          desc: "House of the Lillies, By C messier - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=43309108",
        },
      ],
      description:
        "Amnisos was a settlement and sanctuary located near the palace at Knossos. It is the location of the House of the Lillies, which is a two story building named after a fresco found in the building.",
    }, //check
    {
      id: "mt-jouktos",
      name: "Mt. Jouktos",
      position: [35.25, 25.15],
      information: [
        {
          image: "./images/peaksanctuary.jpg",
          desc: "Peak Sanctuary found on Mt. Jouktos",
        },
      ],
      description:
        "Mt. Jouktos is a mountain located in north central Crete. It is the location of the most important peak sanctuary in the Minoan world. Peak sanctuaries are small, open air sanctuaries that are located on the top of mountains.",
    }, //check
    {
      id: "anemospelia",
      name: "Anemospelia",
      position: [35.2554, 25.1446],
      information: [
        {
          image: "./images/anemospilia.jpeg",
          desc: "View of Anemospelia from the south.  Public Domain, https://commons.wikimedia.org/w/index.php?curid=1874553",
        },
      ],
      description:
        "Anemospelia is a Minoan temple located on the north slope of Mt. Jouktos.",
    }, //check
    {
      id: "petsopha",
      name: "Petsopha",
      position: [35.1833, 26.3],
      information: [
        {
          image: "./images/petsophaspeak.jpeg",
          desc: "View of the peak sanctuary at Petsopha, By Olaf Tausch - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=72966445",
        },
      ],
      description:
        "Petsopha is a peak sanctuary that overlooks the settlement of Palaikastro.",
    }, //check
    {
      id: "kamares-cave",
      name: "Kamares Cave",
      position: [35.1774, 24.827],
      information: [
        {
          image: "./images/kamaresjar.jpeg",
          desc: "Kamares ware jar",
        },
        { image: "./images/kamarescup.png", desc: "Kamares egg-shell ware" },
      ],
      description:
        "This site is a Minoan religious cave. Some of the best examples of Minoan pottery were found here.",
    }, //check
    {
      id: "thera",
      name: "Thera",
      position: [36.3932, 25.4615],
      information: [
        {
          image: "./images/thera.jpeg",
          desc: "Aerial view of the island of Thera",
        },
        {
          image: "./images/therasettlement.jpeg",
          desc: "Excavation of Akrotiri on Thera",
        },
        {
          image: "./images/akrotiri.jpeg",
          desc: "Map of the settlement at Akrotiri",
        },
      ],
      description:
        "Thera is an island located north of Crete. It is the location of the settlement of Akrotiri, which was destroyed by a volcanic eruption in either the 17th or 16th century BCE. Akrotiri is considered the Pompeii of the Bronze Age.",
    }, //check
  ];

  return (
    <MapContainer
      center={[35.24, 24.809]}
      zoom={8}
      minZoom={5}
      maxZoom={12}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="map-overlay">
        <TileLayer
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
          zIndex={1}
          attribution='Map tiles by &copy; <a href="http://stamen.com">Stamen Design</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, &copy; Information and Images from <a href="https://liberalarts.utexas.edu/classics/faculty/gulizioj">CC340</a>'
        />
        {sites.map((site) => (
          <Marker key={site.id} position={site.position}>
            <Popup>
              <div>
                <h2>{site.name}</h2>
                {
                  /*map through the information array and display the images and descriptions*/
                  site.information &&
                    site.information.map((info) => (
                      <div>
                        <img
                          src={info.image}
                          alt={info.desc}
                          style={{ width: "300px", maxHeight: "300px" }}
                        />
                        <p style={{ fontStyle: "italic" }}>{info.desc}</p>
                      </div>
                    ))
                }

                <p>{site.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </div>
    </MapContainer>
  );
};

export default Map;
