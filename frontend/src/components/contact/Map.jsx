import React from "react";

const Map = () => {
  return (
    <>
      <div className="w-[50%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d93435.06724738042!2d-81.30761463255187!3d42.96045274859469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x882ef0fa90d42453%3A0x1e8dae5de3acaae!2s800%20Commissioners%20Rd%20E%2C%20London%2C%20ON%20N6A%205W9%2C%20Canada!3m2!1d42.960482299999995!2d-81.2252139!5e0!3m2!1sen!2smm!4v1708453720157!5m2!1sen!2smm"
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
