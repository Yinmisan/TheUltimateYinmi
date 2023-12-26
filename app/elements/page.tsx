import React from 'react';
import Image from "next/image"
import Link from "next/link"

const element = () => {
  return (<>
  <div id="wrapper">
    <header id="header">
      <div className="inner">
        {/* Logo */}
        <Link href="/" className="logo">
          <span className="symbol">
            <Image
               width={500}
               height={500}
                src="/images/logo.svg" alt="" />
          </span>
          <span className="title">back</span>
        </Link>
        {/* Nav */}
        <nav>
          <ul>
            <li>
              <Link href="#menu">Menu</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    {/* Menu */}
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link href="index.html">Home</Link>
        </li>
        <li>
          <Link href="generic.html">Ipsum veroeros</Link>
        </li>
        <li>
          <Link href="generic.html">Tempus etiam</Link>
        </li>
        <li>
          <Link href="generic.html">Consequat dolor</Link>
        </li>
        <li>
          <Link href="elements.html">Elements</Link>
        </li>
      </ul>
    </nav>
    {/* Main */}
    <div id="main">
      <div className="inner">
        <h1>Elements</h1>
        {/* Text */}
        <section>
          <h2>Text</h2>
          <p>
            This is <b>bold</b> and this is <strong>strong</strong>. This is{" "}
            <i>italic</i> and this is <em>emphasized</em>. This is{" "}
            <sup>superscript</sup> text and this is <sub>subscript</sub> text.
            This is <u>underlined</u> and this is code:{" "}
            <code>
              for (;;) {"{"} ... {"}"}
            </code>
            . Finally, <Link href="#">this is Link link</Link>.
          </p>
          <hr />
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
          <hr />
          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <hr />
          <h3>Blockquote</h3>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.
          </blockquote>
          <h3>Preformatted</h3>
          <pre>
            <code>
              i = 0;{"\n"}
              {"\n"}while (!deck.isInOrder()) {"{"}
              {"\n"}
              {"    "}print &apos;Iteration &apos; + i;{"\n"}
              {"    "}deck.shuffle();{"\n"}
              {"    "}i++;{"\n"}
              {"}"}
              {"\n"}
              {"\n"}print &apos;It took &apos; + i + &apos; iterations to sort the deck.&apos;;
            </code>
          </pre>
        </section>
        {/* Lists */}
        <section>
          <h2>Lists</h2>
          <div className="row">
            <div className="col-6 col-12-medium">
              <h3>Unordered</h3>
              <ul>
                <li>Dolor pulvinar etiam.</li>
                <li>Sagittis adipiscing.</li>
                <li>Felis enim feugiat.</li>
              </ul>
              <h3>Alternate</h3>
              <ul className="alt">
                <li>Dolor pulvinar etiam.</li>
                <li>Sagittis adipiscing.</li>
                <li>Felis enim feugiat.</li>
              </ul>
            </div>
            <div className="col-6 col-12-medium">
              <h3>Ordered</h3>
              <ol>
                <li>Dolor pulvinar etiam.</li>
                <li>Etiam vel felis viverra.</li>
                <li>Felis enim feugiat.</li>
                <li>Dolor pulvinar etiam.</li>
                <li>Etiam vel felis lorem.</li>
                <li>Felis enim et feugiat.</li>
              </ol>
              <h3>Icons</h3>
              <ul className="icons">
                <li>
                  <Link href="#" className="icon brands style1 fa-twitter">
                    <span className="label">Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="icon brands style1 fa-facebook-f">
                    <span className="label">Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="icon brands style1 fa-instagram">
                    <span className="label">Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="icon brands style1 fa-github">
                    <span className="label">Github</span>
                  </Link>
                </li>
              </ul>
              <ul className="icons">
                <li>
                  <Link href="#" className="icon brands style2 fa-twitter">
                    <span className="label">Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="icon brands style2 fa-facebook-f">
                    <span className="label">Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="icon brands style2 fa-instagram">
                    <span className="label">Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="icon brands style2 fa-github">
                    <span className="label">Github</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <h2>Actions</h2>
          <div className="row">
            <div className="col-6 col-12-medium">
              <ul className="actions">
                <li>
                  <Link href="#" className="button primary">
                    Default
                  </Link>
                </li>
                <li>
                  <Link href="#" className="button">
                    Default
                  </Link>
                </li>
              </ul>
              <ul className="actions small">
                <li>
                  <Link href="#" className="button primary small">
                    Small
                  </Link>
                </li>
                <li>
                  <Link href="#" className="button small">
                    Small
                  </Link>
                </li>
              </ul>
              <ul className="actions stacked">
                <li>
                  <Link href="#" className="button primary">
                    Default
                  </Link>
                </li>
                <li>
                  <Link href="#" className="button">
                    Default
                  </Link>
                </li>
              </ul>
              <ul className="actions stacked">
                <li>
                  <Link href="#" className="button primary small">
                    Small
                  </Link>
                </li>
                <li>
                  <Link href="#" className="button small">
                    Small
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-12-medium">
              <ul className="actions stacked">
                <li>
                  <Link href="#" className="button primary fit">
                    Default
                  </Link>
                </li>
                <li>
                  <Link href="#" className="button fit">
                    Default
                  </Link>
                </li>
              </ul>
              <ul className="actions stacked">
                <li>
                  <Link href="#" className="button primary small fit">
                    Small
                  </Link>
                </li>
                <li>
                  <Link href="#" className="button small fit">
                    Small
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Table */}
        <section>
          <h2>Table</h2>
          <h3>Default</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item One</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item Two</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item Three</td>
                  <td> Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item Four</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item Five</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2} />
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <h3>Alternate</h3>
          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item One</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item Two</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item Three</td>
                  <td> Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item Four</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item Five</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2} />
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
        {/* Buttons */}
        <section>
          <h3>Buttons</h3>
          <ul className="actions">
            <li>
              <Link href="#" className="button primary">
                Primary
              </Link>
            </li>
            <li>
              <Link href="#" className="button">
                Default
              </Link>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <Link href="#" className="button large">
                Large
              </Link>
            </li>
            <li>
              <Link href="#" className="button">
                Default
              </Link>
            </li>
            <li>
              <Link href="#" className="button small">
                Small
              </Link>
            </li>
          </ul>
          <ul className="actions fit">
            <li>
              <Link href="#" className="button primary fit">
                Fit
              </Link>
            </li>
            <li>
              <Link href="#" className="button fit">
                Fit
              </Link>
            </li>
            <li>
              <Link href="#" className="button fit">
                Fit
              </Link>
            </li>
          </ul>
          <ul className="actions fit small">
            <li>
              <Link href="#" className="button primary fit small">
                Fit + Small
              </Link>
            </li>
            <li>
              <Link href="#" className="button fit small">
                Fit + Small
              </Link>
            </li>
            <li>
              <Link href="#" className="button fit small">
                Fit + Small
              </Link>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <Link href="#" className="button primary icon solid fa-download">
                Icon
              </Link>
            </li>
            <li>
              <Link href="#" className="button icon solid fa-upload">
                Icon
              </Link>
            </li>
            <li>
              <Link href="#" className="button icon solid fa-save">
                Icon
              </Link>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <span className="button primary disabled">Disabled</span>
            </li>
            <li>
              <span className="button disabled">Disabled</span>
            </li>
          </ul>
        </section>
        {/* Form */}
        <section>
          <h2>Form</h2>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  defaultValue=""
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <select name="demo-category" id="demo-category">
                  <option value="">- Category -</option>
                  <option value={1}>Manufacturing</option>
                  <option value={1}>Shipping</option>
                  <option value={1}>Administration</option>
                  <option value={1}>Human Resources</option>
                </select>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-low"
                  name="demo-priority"
        
                />
                <label htmlFor="demo-priority-low">Low</label>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-normal"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-normal">Normal</label>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-high"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-high">High</label>
              </div>
              <div className="col-6 col-12-small">
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label htmlFor="demo-copy">Email me Link copy</label>
              </div>
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
              
                />
                <label htmlFor="demo-human">Not Link robot</label>
              </div>
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </section>
        {/* Image */}
        <section>
          <h2>Image</h2>
          <h3>Fit</h3>
          <div className="box alt">
            <div className="row gtr-uniform">
              <div className="col-12">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic13.jpg" alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic01.jpg" alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic02.jpg" alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic03.jpg" alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic03.jpg" alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic01.jpg" alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic02.jpg" alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic02.jpg" alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic03.jpg" alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <Image
               width={500}
               height={500}
                src="/images/pic01.jpg" alt="" />
                </span>
              </div>
            </div>
          </div>
          <h3>Left &amp; Right</h3>
          <p>
            <span className="image left">
              <Image
               width={500}
               height={500}
                src="/images/pic14.jpg" alt="" />
            </span>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
            accumsan eu faucibus. Integer ac pellentesque praesent tincidunt
            felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
          </p>
          <p>
            <span className="image right">
              <Image
               width={500}
               height={500}
                src="/images/pic15.jpg" alt="" />
            </span>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
            accumsan eu faucibus. Integer ac pellentesque praesent tincidunt
            felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
          </p>
        </section>
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
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
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
              <Link href="#" className="icon brands style2 fa-twitter">
                <span className="label">Twitter</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="icon brands style2 fa-facebook-f">
                <span className="label">Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="icon brands style2 fa-instagram">
                <span className="label">Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="icon brands style2 fa-dribbble">
                <span className="label">Dribbble</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="icon brands style2 fa-github">
                <span className="label">GitHub</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="icon brands style2 fa-500px">
                <span className="label">500px</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="icon solid style2 fa-phone">
                <span className="label">Phone</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="icon solid style2 fa-envelope">
                <span className="label">Email</span>
              </Link>
            </li>
          </ul>
        </section>
        <ul className="copyright">
          <li>© Untitled. All rights reserved</li>
          <li>
            Design: <Link href="http://html5up.net">HTML5 UP</Link>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</> );};



export default element;