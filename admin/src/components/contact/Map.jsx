import React from "react";

const Map = () => {
  return (
    <>
      <div className="w-[50%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4540.342357776711!2d96.12820447914966!3d16.877991232412825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1689293021457!5m2!1sen!2smm"
          className="w-full"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Map;
