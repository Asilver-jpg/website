import './map.css'

export const GoogleMapEmbed = () => {
  return (
    <div
     className="googleMap"
    >
      <div
        id="google-maps-display"
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <iframe
          style={{
            height: "100%",
            width: "100%",
            border: 0,
          }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=astoria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
          title="Google Map of Astoria"
        ></iframe>
      </div>
     
    </div>
  );
};

export default GoogleMapEmbed;
