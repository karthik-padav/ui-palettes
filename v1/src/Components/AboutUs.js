import React, { Component } from "react";

import "../css/AboutUs.css";
import { Helmet } from "react-helmet";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>About us - The color picker for graphic designers, web developers and many more.</title>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="The Metro colors system can help you create a color theme that reflects your brand or style."
          />
          <meta
            name="keywords"
            content="color picker, color picker hex, color picker for html, color picker html, color picker in html"
          />
        </Helmet>
        <img className="about_us_logo" src={require('../utilities/images/logo.png')} alt="logo" />
        <h1 className="text-center margin-top-0 margin-bottom-15">About us</h1>
        <div className="about_us_w text-left">
          <ul>
            <li>
              <h3>
                What is
                <a href="http://www.thecolorpicker.com">
                  <strong> thecolorpicker.com</strong>
                </a>
                ?
              </h3>
              <p>
                <a href="http://www.thecolorpicker.com">
                  <strong> thecolorpicker.com </strong>
                </a>
                is a collection of Material Design, Popular Colors, Flat UI
                Colors, Metro Colors, Social Colors and many more. This tool
                makes it easy to create, adjust, and experiment with custom
                colors for the web.
              </p>
            </li>
            <li>
              <h3>
                Who can use
                <a href="http://www.thecolorpicker.com">
                  <strong> thecolorpicker.com</strong>
                </a>
                ?
              </h3>
              <p>
                <a href="http://www.thecolorpicker.com">
                  <strong> thecolorpicker.com </strong>
                </a>
                serves thousands of color schemes for several different style
                and art functions. the color palettes are being employed by
                graphic designers, artists, illustrators, web developers,
                fashion designers, marketers, interior designers, and many more.
                folks use
                <a href="http://www.thecolorpicker.com">
                  <strong> thecolorpicker.com </strong>
                </a>
                to urge color inspiration and notice the right palette for his
                or her comes.
              </p>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
