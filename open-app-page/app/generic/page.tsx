
import React from 'react';



const generics = () => {
  return (
    <>
    <div id="wrapper">
  {/* Header */}
  <header id="header">
    <div className="inner">
      {/* Logo */}
      <a href="/" className="logo">
        <span className="symbol">
          <img src="images/logo.svg" alt="" />
        </span>
        <span className="title">Phantom</span>
      </a>
    </div>
  </header>
  {/* Menu */}
  
    <h2>Menu</h2>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="generic">Ipsum veroeros</a>
      </li>
      <li>
        <a href="generic">Tempus etiam</a>
      </li>
      <li>
        <a href="generic">Consequat dolor</a>
      </li>
      <li>
        <a href="elements">Elements</a>
      </li>
    </ul>
 
  {/* Main */}
  <div id="main">
    <div className="inner">
      <h1>Generic Page</h1>
      <span className="image main">
        <img src="images/pic13.jpg" alt="" />
      </span>
      <p>
        Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
        Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
        Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
        Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex,
        lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus,
        commodo eget turpis at, elementum convallis elit. Pellentesque enim
        turpis, hendrerit tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
        porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
        ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit
        amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla
        in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. In non lorem sit
        amet elit placerat maximus. Pellentesque aliquam maximus risus, vel
        venenatis mauris vehicula hendrerit.
      </p>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent
        rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo
        mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget
        turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit
        tristique lorem ipsum dolor.
      </p>
    </div>
  </div>
  {/* Footer */}
  <footer id="footer">
    <div className="inner">
      <section>
        <h2>Get in touch</h2>
        <form method="post" action="#">
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" defaultValue="Send" className="primary" />
            </li>
          </ul>
        </form>
      </section>
      <section>
        <h2>Follow</h2>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands style2 fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands style2 fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands style2 fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands style2 fa-dribbble">
              <span className="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands style2 fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands style2 fa-500px">
              <span className="label">500px</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid style2 fa-phone">
              <span className="label">Phone</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid style2 fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </section>
      <ul className="copyright">
        <li>© Untitled. All rights reserved</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
</div>

</>
  );
};

export default generics;
