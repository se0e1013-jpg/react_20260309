import React, { useState } from 'react'
const headerNav = [
  {
    title: "intro",
    url: "/",
  },
  {
    title: "skill",
    url: "/",
  },
  {
    title: "site",
    url: "/",
  },
  {
    title: "port",
    url: "/",
  },
  {
    title: "contact",
    url: "/",
  },
]

const Header = () => {

  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((pShow) => !pShow)
  }

    return (
        <header id='header' role='banner'>
            <section className='header_inner'>
                <h1 className="header_logo">
                    <a href="/">portfolio <em>react.js</em></a>
                </h1>
                <nav className={`header_nav ${show ? "show":""}`} role='navigation' aria-label='800이상 메뉴'>
                    <ul>
                      {headerNav.map((nav,key)=>(
                        <li key={key}><a href={nav.url}>{nav.title}</a></li>
                      ))}
                    </ul>
                </nav>
                <nav 
                    className="header_nav_m" 
                    id='headerToggle'
                    role='button'
                    tabIndex={0}
                    onClick={toggleMenu}
                    aria-expanded={show ? "true":"false"}
                >
                    <span></span>
                </nav>
            </section>
        </header>
    )
}

export default Header
