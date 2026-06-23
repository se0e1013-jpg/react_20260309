import React, { useState } from 'react'

const Header = () => {

  const [show, setShow] = useState(false);
  // useState : 컴퍼넌트의 샅애를 관리
  // false : 초기값

  const toggleMenu = () => {
    setShow((pShow) => !pShow)
    // ! : 반대값 참 > 거짓 / 거짓 > 참
  }

  return (
    <header id='header' role='banner'>
      <section className='header_inner'>
        <h1 className='header_logo'>
          <a href="/">portfolio <em>react.js</em></a>
        </h1>
        <nav className={`header_nav ${show? "show" :""}`} role='navigation' aria-label='800이상 메뉴'>
          <ul>
            <li><a href="/">Intro</a></li>
            <li><a href="/">Skip</a></li>
            <li><a href="/">Site</a></li>
            <li><a href="/">Port</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
        <nav className='header_nav_m' id='headerToggle' role='button' tabIndex={0} onClick={toggleMenu}>
          <span></span>
        </nav>
      </section>
    </header>
  )
}

export default Header
