import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        width="550"
        height="550"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=511%20US-1,%20Woodbridge%20Township%20new%20york+(SDS)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <a href="https://maps-generator.com/">Maps Generator</a>
    </div>
  );
};

export default GoogleMap;
