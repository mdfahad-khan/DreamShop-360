import React from "react";
import headphone from "../../assets/headphone.jpg";
import "../Total/Total.css";

const AboutUs = () => {
  return (
    <div className="about_us">
      <div className="about_us_div">
        {/* Left Content */}
        <div className="about_us_left">
          <h2 className="about_us_title">Our Story</h2>
          <p>
            We are Dream Gadget 360, a dedicated team striving to provide the
            best gadgets and accessories to our customers. With a passion for
            technology and innovation, we are committed to delivering
            top-quality products that enhance your lifestyle. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. A expedita aperiam vel quasi
            dicta exercitationem perferendis mollitia eveniet beatae. Eius odit
            assumenda obcaecati, mollitia ipsam eum totam error, maxime eveniet
            libero dolores esse, ut repellat accusamus voluptatum. Iste, velit
            dolores aliquam quam recusandae dolor? Dignissimos est repellat
            perferendis! Velit dolore voluptate laborum? Laudantium ea itaque
            quas voluptates ullam. Ipsam, praesentium. Iure, autem hic. Fugiat
            nisi culpa maxime dolor pariatur molestiae atque repellat obcaecati
            reiciendis reprehenderit necessitatibus nemo a rerum veniam sapiente
            et minima tenetur, optio error modi nostrum eaque quisquam
            voluptatibus porro! Perspiciatis dignissimos sed ipsa veritatis
            soluta eius a?
          </p>
          {/* Add more content about your company */}
        </div>

        {/* Right Content */}
        <div className="about_us_right">
          <img src={headphone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
