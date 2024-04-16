function Navbar() {
  return (
    <div className='navbar'>
      <nav id='nav'>
        <ul id='nav-ul'>
          <li className='name-logo-li-mobile'>
            <a href='#' className='name-logo'>
              <span>Visual Studio Code</span>
            </a>
          </li>
          <div className='links-desktop'>
            <li className='name-logo-li'>
              <a href='#' className='name-logo'>
                <span>Visual Studio Code</span>
              </a>
            </li>
            <ul id='ul-links'>
              <li className='ul'>
                <a href='https://code.visualstudio.com/docs'>Docs</a>
              </li>
              <li className='ul'>
                <a href='https://code.visualstudio.com/updates'>Update</a>
              </li>
              <li className='ul'>
                <a href='https://code.visualstudio.com/blogs'>Blog</a>
              </li>
              <li className='ul'>
                <a href='https://code.visualstudio.com/api'>API</a>
              </li>
              <li className='ul'>
                <a href='https://marketplace.visualstudio.com/VSCode'>
                  Extensions
                </a>
              </li>
              <li className='ul'>
                <a href='https://code.visualstudio.com/docs/supporting/faq'>
                  FAQ
                </a>
              </li>
              <li className='ul'>
                <a href='https://code.visualstudio.com/learn'>Learns</a>
              </li>
              <li className='ul'>
                <a href='https://code.visualstudio.com/Search' />
              </li>
            </ul>
          </div>
          <div className='search-download'>
            <div className='arrow-down'>
              <img
                className='search_navbar__icon'
                src='./icons/search.svg'
                alt='search icon'
              />
              <p className='search_navbar__p'>Search Docs</p>
            </div>
            <button id='down-contain'>
              <img
                className='download'
                src='./icons/download.svg'
                alt='DownLoad'
              />
              <span>Download</span>
            </button>
          </div>
          <div className='burger-menu' id='burger_menu'>
            <img
              className='burger-menu__icon'
              src='./icons/menu.png'
              alt='burger menu icon'
            />
          </div>
        </ul>
        <div className='links-mobile none'>
          <ul>
            <li className='ul'>
              <a href='#'>Docs</a>
            </li>
            <li className='ul'>
              <a href='#'>Updates</a>
            </li>
            <li className='ul'>
              <a href='#'>Blog</a>
            </li>
            <li className='ul'>
              <a href='#'>API</a>
            </li>
            <li className='ul'>
              <a href='#'>Extensions</a>
            </li>
            <li className='ul'>
              <a href='#'>FAQ</a>
            </li>
            <li className='ul'>
              <a href='#'>Learn</a>
            </li>
            <li className='ul'>
              <a href='#'>Search</a>
            </li>
            <li className='ul'>
              <a href='#'></a>
              <div className='search-download-mobile'>
                <div id='down-contain-mobile'>
                  <img
                    className='download'
                    src='./icons/download.svg'
                    alt='DownLoad'
                  />
                  <span>Download</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
