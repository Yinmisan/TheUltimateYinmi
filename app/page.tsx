import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
    {/* Wrapper */}
    <div id="wrapper">
      {/* Header */}
      <header id="header">
        <div className="inner">
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="symbol">
              <Image
               width={500}
               height={500}
               src="/images/logo.svg" alt="logo" />
            </span>
            <span className="title">Main</span>
          </Link>
          {/* Nav */}
          <nav>
            <ul>
              <li>
                <Link href="menu">Menu</Link>
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="generic">Ipsum veroeros</Link>
          </li>
          <li>
            <Link href="generic">Tempus etiam</Link>
          </li>
          <li>
            <Link href="generic">Consequat dolor</Link>
          </li>
          <li>
            <Link href="elements">Elements</Link>
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
                 a project by <Link href="https://github.com/Yinmisan">Yinmisan</Link>.
            </h1>
            <blockquote>
             here i test diffrent things on a next.js app
            </blockquote>
          </header>
          <section className="tiles">
            <article className="style1">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic01.gif" alt="" />
              </span>
              <Link href="contact">
                <h2>contact form</h2>
                <div className="content">
                  <p>
                    this is a contact form.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style2">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic02.gif" alt="" />
              </span>
              <Link href="listname">
                <h2>wanted list</h2>
                <div className="content">
                  <p>
                    list of most wanted criminals.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style3">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/pic03.gif" alt="" />
              </span>
              <Link href="expenseapp">
                <h2>expense list</h2>
                <div className="content">
                  <p>
                  Link expense tracker app
                  </p>
                </div>
              </Link>
            </article>
            <article className="style4">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/setwinter.webp" alt="" />
              </span>
              <Link href="generic">
                <h2>Tempus</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style5">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/setsummer.webp" alt="" />
              </span>
              <Link href="generic">
                <h2>Aliquam</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style6">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/setday.webp" alt="" />
              </span>
              <Link href="generic">
                <h2>Veroeros</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style2">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/setfall.webp" alt="" />
              </span>
              <Link href="generic">
                <h2>Ipsum</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style3">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/setrain.webp" alt="" />
              </span>
              <Link href="generic">
                <h2>Dolor</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/redhall.webp" alt="" />
              </span>
              <Link href="generic">
                <h2>Nullam</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style5">
              <span className="image">
                <Image
                width={500}
                height={500}
                src="/images/pinkrail.webp" alt="" />
              </span>
              <Link href="generic">
                <h2>Ultricies</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style6">
              <span className="image">
                <Image
                 width={500}
                 height={500}
                src="/images/greentom.webp" alt="" />
              </span>
              <Link href="generic">
                <h2>Dictum</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </Link>
            </article>
            <article className="style4">
              <span className="image">
                <Image 
                width={500}
                height={500}
                src="/images/flowers.webp" alt="" />
              </span>
              <Link href="generic">
                <h2>Pretium</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                    et feugiat.
                  </p>
                </div>
              </Link>
            </article>
          </section>
        </div>
      </div>
    </div>
  </>
  

  
  )
}
