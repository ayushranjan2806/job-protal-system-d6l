import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    React.createElement(React.Fragment, null,
      React.createElement(Navbar, null),
      React.createElement("div", { className: "banner-img" },
        React.createElement("div", { className: "title" },
          React.createElement("h3", null,
            "Find the ",
            React.createElement("span", null, "Right Job"),
            " In the",
            React.createElement("br", null),
            React.createElement("span", null, " Right Companies")
          ),
          React.createElement("div", { className: "small-tagline" },
            React.createElement("p", null, "Got fired..!! Get Ready to be hired")
          )
        ),
        React.createElement("div", { className: "button", "data-testid": "btn" },
          React.createElement(Link, { to: "/Jobs" }, "Browse Jobs")
        )
      ),
      React.createElement("div", { className: "social-media", "data-testid": "images" },
        React.createElement("img", { src: "https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg", alt: "fb" }),
        React.createElement("img", { src: "https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg", alt: "google" }),
        React.createElement("img", { src: "https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg", alt: "youtube" }),
        React.createElement("img", { src: "https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg", alt: "linkedin" })
      )
    )
  );
}

export default Home;

