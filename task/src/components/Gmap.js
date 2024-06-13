import React from "react";

function Gmap() {
  return (
    <div>
      <iframe
        title="Gmap"
        className="w-full h-96 my-10"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemont+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Gmap;
