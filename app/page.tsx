import Image from "next/image"

export default function Home() {
  return (
    <>
    {/* Wrapper */}
    <div id="wrapper">
      {/* Header */}
      <header id="header">
        <div className="inner">
          {/* Logo */}
          <a href="/" className="logo">
            <span className="symbol">
              <Image
               width={500}
               height={500}
               src="images/logo.svg" alt="logo" />
            </span>
            <span className="title">Main</span>
          </a>
          {/* Nav */}
          <nav>
            <ul>
              <li>
                <a href="#menu">Menu</a>
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
      </nav>
      {/* Main */}
      <div id="main">
        <div className="inner">
          <header>
            <h1>
              The Ultimate Yinmi
              <br />
              A Project by <a href="https://github.com/Yinmisan">Yinmisan</a>.
            </h1>
            <p>
              Here i test diffrent things i found for next.js
            </p>
          </header>
          <section className="tiles">
            <article className="style1">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic01.gif" alt="" />
              </span>
              <a href="contact">
                <h2>contact form</h2>
                <div className="content">
                  <p>
                    this is a contact form.
                  </p>
                </div>
              </a>
            </article>
            <article className="style2">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic02.gif" alt="" />
              </span>
              <a href="listname">
                <h2>wanted list</h2>
                <div className="content">
                  <p>
                    list of most wanted criminals.
                  </p>
                </div>
              </a>
            </article>
            <article className="style3">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic03.gif" alt="" />
              </span>
              <a href="expenseapp">
                <h2>expense list</h2>
                <div className="content">
                  <p>
                  a expense tracker app
                  </p>
                </div>
              </a>
            </article>
            <article className="style4">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic04.jpg" alt="" />
              </span>
              <a href="generic">
                <h2>Tempus</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className="style5">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic05.jpg" alt="" />
              </span>
              <a href="generic">
                <h2>Aliquam</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className="style6">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic06.jpg" alt="" />
              </span>
              <a href="generic">
                <h2>Veroeros</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className="style2">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic07.jpg" alt="" />
              </span>
              <a href="generic">
                <h2>Ipsum</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className="style3">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic08.jpg" alt="" />
              </span>
              <a href="generic">
                <h2>Dolor</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className="style1">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic09.jpg" alt="" />
              </span>
              <a href="generic">
                <h2>Nullam</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className="style5">
              <span className="image">
                <Image
                width={500}
                height={500}
                src="/images/pic10.jpg" alt="" />
              </span>
              <a href="generic">
                <h2>Ultricies</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className="style6">
              <span className="image">
                <Image
                 width={500}
                 height={500}
                src="/images/pic11.jpg" alt="" />
              </span>
              <a href="generic">
                <h2>Dictum</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className="style4">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic12.jpg" alt="" />
              </span>
              <a href="generic">
                <h2>Pretium</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </a>
            </article>
          </section>
        </div>
      </div>
    </div>
  </>
  

  
  )
}
