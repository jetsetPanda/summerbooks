import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ 
        height: 300, 
        clear: "both", 
        margin: "0px 0 20px 0",
        paddingTop: 120, 
        color: "#FFF",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1440778303588-435521a205bc)"
       }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
