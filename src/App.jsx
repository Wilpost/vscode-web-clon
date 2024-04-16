import './App.css'
import './styles/mobileStyles.css'

import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar />
      <section>
        <div className='container-version'>
          <p>
            <a href='#'>Version 1.85</a> is now available! Read about the new
            features and fixes from September.
          </p>
        </div>
      </section>

      <header id='dowload-info'>
        <section id='info'>
          <span className='prmr-span'>Code editing.</span>
          <h3>Redefined.</h3>

          <div className='text-compl'>
            <p>Free. Built on open source. Runs everywhere.</p>
          </div>
          <div className='btns'>
            <a href='https://code.visualstudio.com/Download'>
              <button type='button'>
                <span className='span-two'>Download for Windows</span>
                <p>Stable Build</p>
              </button>
            </a>
            <div>
              <button type='button'>
                <div className='img-arrow'>
                  <img src='./icons/chevronDown.svg' alt='' />
                </div>
                <div className='table-container'>
                  <div className='table'>
                    <table>
                      <thead>
                        <tr>
                          <th scope='col'></th>
                          <th scope='col'></th>
                          <th className='build-header' scope='col'>
                            Stable
                          </th>
                          <th className='build-header gris' scope='col'>
                            Insiders
                          </th>
                        </tr>
                      </thead>
                      <tbody className='so-group'>
                        <tr>
                          <td className='so' scope='row'>
                            macOS
                          </td>
                          <td className='download-type'>Universal</td>
                          <td>
                            <a href='#'>
                              <img
                                className='arrow_blue'
                                src='./icons/download_blue.svg'
                                alt=''
                              />
                            </a>
                          </td>
                          <td className='gris'>
                            <a href='#'>
                              <img
                                className='arrow_black'
                                src='./icons/download-black.svg'
                                alt=''
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className='so-group'>
                        <tr>
                          <td className='so scoperow'>Windows x64</td>
                          <td className='download-type'>User x64 Installer</td>
                          <td>
                            <a href='#'>
                              <img
                                className='arrow_blue'
                                src='./icons/download_blue.svg'
                                alt=''
                              />
                            </a>
                          </td>
                          <td className='gris'>
                            <a href='#'>
                              <img
                                className='arrow_black'
                                src='./icons/download-black.svg'
                                alt=''
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className='so-group-linux'>
                        <tr className='tr'>
                          <td className='so' scope='row'>
                            Linux x64
                          </td>
                          <td className='download-type deb'>.deb</td>
                          <td>
                            <a href='#'>
                              <img
                                className='arrow_blue'
                                src='./icons/download_blue.svg'
                                alt=''
                              />
                            </a>
                          </td>
                          <td className='gris'>
                            <a href='#'>
                              <img
                                className='arrow_black'
                                src='./icons/download-black.svg'
                                alt=''
                              />
                            </a>
                          </td>
                        </tr>
                        <td className='so' scope='row'>
                          <span className='sr-only '>Linux</span>
                        </td>
                        <td className='download-type rpm'>.rpm</td>
                        <td>
                          <a href='#'>
                            <img
                              className='img-lnx'
                              src='./icons/download_blue.svg'
                              alt=''
                            />
                          </a>
                        </td>
                        <td className='gris'>
                          <a href='#'>
                            <img
                              className='img-lnx '
                              src='./icons/download-black.svg'
                              alt=''
                            />
                          </a>
                        </td>
                      </tbody>
                      <tbody className='so-group-more'>
                        <tr>
                          <td colSpan='4' rowSpan='2'>
                            <a href='#'>Other downloads</a>
                            <div className='tabloop' tabIndex='0'></div>
                            <div className='tabloop' tabIndex='0'></div>
                            or
                            <a href='#'>open on web</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className='redirects-container'>
            <div className='redirects'>
              <span>
                <a href='#'>Web</a>,<a href='#'>Insider edition</a>, or
                <a href='#'>other platforms</a>
              </span>
              <div className='box-triangulo'></div>
            </div>
          </div>

          <div className='licenses-privacy'>
            <span>By using VS Code, you agree to its</span>
            <a href='#'>license and privacy statement.</a>
          </div>
        </section>

        <aside className='asie_backdrop__img'>
          <img src='./images/home-screenshot-win.png' alt='' />
        </aside>
      </header>

      <div className='features'>
        <div id='intelisense'>
          <div className='intelisense-img'></div>
          <div className='intelisense-text'>
            <small>IntelliSense</small>
          </div>
        </div>

        <div id='run-debug'>
          <div className='debug-img'></div>
          <div className='debug-text'>
            <small>Run and Debug</small>
          </div>
        </div>

        <div id='bulit-in-git'>
          <div className='build-img'></div>
          <div className='build-text'>
            <small>Built-in Git</small>
          </div>
        </div>

        <div id='extension'>
          <div className='extension-img'></div>
          <div className='extension-text'>
            <small>Extensions</small>
          </div>
        </div>
      </div>

      <div className='tweets-contain'>
        <figure className='arrow-desp'>
          <img className='arrow-right' src='./icons/ArrowDown.svg' alt='' />
        </figure>

        <article className='tweets-container'>
          <div className='tweet-kravets tweet-tras'>
            <div className='img-profile-kravets'>
              <img className='img-profile-user' src='./images/Una.jpg' alt='' />
            </div>
            <div className='info-profile-kravets twitter-kravets'>
              <div className='name-twitter-kravets'>
                <a>Una Kravets</a>
                <p>@Una</p>
              </div>
              <div className='mesage-kravets'>
                <p>
                  VS <a href='#'>@code</a> does so many things right. I’m
                  constantly impressed by the UX, and customizing workspace /
                  user preferences is no exception. 🙌🏼💯 It just keeps getting
                  better ❤️
                </p>
              </div>
            </div>
          </div>
          <div className='tweet-dunlap tweet-tras'>
            <div className='img-profile-dunlap'>
              <img
                className='img-profile-user'
                src='./images/jadbox.jpg'
                alt=''
              />
            </div>
            <div className='info-profile-dunlap twitter-dunlap'>
              <div className='name-twitter-dunlap'>
                <a>Jonathan Dunlap</a>
                <p>@jadbox</p>
              </div>
              <div className='mesage-dunlap'>
                <p>
                  VS Code will have deep remote development. You can connect to
                  a container running a different OS and use any VS Code
                  plugins, linting, debugging for that environment. 🔥🔥🔥
                </p>
              </div>
            </div>
          </div>
          <div className='tweet-kodmad tweet-tras'>
            <div className='img-profile-kodmad'>
              <img
                className='img-profile-user'
                src='./images/PKodmad.jpg'
                alt=''
              />
            </div>
            <div className='info-profile-kodmad twitter-kodmad'>
              <div className='name-twitter-kodmad'>
                <a>Pavithra Kodmad</a>
                <p>@PKodmad</p>
              </div>
              <div className='mesage-kodmad'>
                <p>
                  VS Code is my most used and favorite editor. I love being able
                  to customize the editor - changing the layout, the icons,
                  fonts and color scheme is so easy!
                </p>
              </div>
            </div>
          </div>
        </article>

        <figure className='arrow-desp'>
          <img className='arrow-left' src='./icons/ArrowDown.svg' alt='' />
        </figure>
      </div>

      <section id='intelisense-section'>
        <div className='img-intelisense__section'>
          <img src='./icons/home-intellisense.svg' alt='' />
        </div>
        <div className='texts_intelisense'>
          <div className='title-intelinsense'>
            <h2>Meet IntelliSense.</h2>
          </div>
          <div className='text-concept__intelisense'>
            <p>
              Go beyond syntax highlighting and autocomplete with IntelliSense,
              which provides smart completions based on variable types, function
              definitions, and imported modules.
            </p>
          </div>
        </div>
      </section>

      <section id='debuggin-section'>
        <article>
          <div className='img-debbugin__section'>
            <img src='./icons/home-debug.svg' alt='' />
          </div>
          <div className='texts-debuggin'>
            <div className='title-debuggin__section'>
              <h2>Print statement debugging is a thing of the past.</h2>
            </div>
            <div className='text-concept__debuggin'>
              <p>
                Debug code right from the editor. Launch or attach to your
                running apps and debug with break points, call stacks, and an
                interactive console.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section id='git-section'>
        <div className='img-git__section'>
          <img src='./icons/home-git.svg' alt='' />
        </div>
        <div className='texts-git__section'>
          <div className='title-git__section'>
            <h2>Git commands built-in.</h2>
          </div>
          <div className='text-concept__git'>
            <p>
              Working with Git and other SCM providers has never been easier.
              Review diffs, stage files, and make commits right from the editor.
              Push and pull from any hosted SCM service.
            </p>
          </div>
        </div>
      </section>

      <section id='extension-section'>
        <div className='img-extensions__section'>
          <img src='./images/Hundreds-of-Extensions.png' alt='' />
        </div>
        <div className='texts-extensions__section'>
          <div className='title-extensions__section'>
            <h2>Extensible and customizable.</h2>
          </div>
          <div className='text-concept__section'>
            <p>
              Want even more features? Install extensions to add new languages,
              themes, debuggers, and to connect to additional services.
              Extensions run in separate processes, ensuring they won`t slow
              down your editor. <a href='#'>Learn more about extensions.</a>
            </p>
          </div>
        </div>
      </section>

      <section id='deploy-section'>
        <div className='img-deploy__section'>
          <img src='./icons/home-azure.svg' alt='' />
        </div>
        <div className='texts-deploy__section'>
          <div className='title-deploy__section'>
            <h2>Deploy with confidence and ease</h2>
          </div>
          <div className='text-concept__section'>
            <p>
              With <a href='#'>Microsoft Azure</a> you can deploy and host your
              React, Angular, Vue, Node, Python (and more!) sites, store and
              query relational and document based data, and scale with
              serverless computing,{' '}
              <a href='#'>all with ease, all from within VS Code.</a>
            </p>
          </div>
        </div>
      </section>

      <section id='lenguajes-programacion__section'>
        <div className='title-section-lenguajes'>
          <h2>VS Code for</h2>
        </div>
        <div className='big-div'>
          <div className='container-lenguajes'>
            <div className='js'>
              <img src='./icons/javascript.svg' alt='' />
              <p>JavaScript</p>
            </div>
            <div className='python'>
              <img src='./icons/python.svg' alt='' />
              <p>Pythont</p>
            </div>
            <div className='java'>
              <img src='./icons/java.svg' alt='' />
              <p>Java</p>
            </div>
            <div className='md'>
              <img src='./icons/markdown.svg' alt='' />
              <p>Markdown</p>
            </div>
            <div className='tpscript'>
              <img src='./icons/typescript.svg' alt='' />
              <p>TypeScript</p>
            </div>
            <div className='c'>
              <img src='./icons/cpp.svg' alt='' />
              <p>C/C++</p>
            </div>
            <div className='json'>
              <img src='./icons/json.svg' alt='' />
              <p>JSON</p>
            </div>
            <div className='powershell'>
              <img src='./icons/powershell.svg' alt='' />
              <p>Powershell</p>
            </div>
            <div className='htmlcss'>
              <img src='./icons/html.svg' alt='' />
              <p>HTML/CSS</p>
            </div>
            <div className='C'>
              <img src='./icons/csharp.svg' alt='' />
              <p>C#</p>
            </div>
            <div className='php'>
              <img src='./icons/php.svg' alt='' />
              <p>PHP</p>
            </div>
            <div className='yaml'>
              <img src='./icons/yaml.svg' alt='' />
              <p>YAML</p>
            </div>
          </div>
          <div className='more'>
            <a href='#'>and many more languages on the Marketplace...</a>
          </div>
        </div>

        <div className='btn-start'>
          <button id='btn-start-now'>Get Start Now</button>
        </div>
      </section>

      <div className='requireds-so'>
        <div className='election-so__download'>
          <div className='btn-download__windows btn-section__required'>
            <div className='img-logo__so-windows'></div>
            <a href='#'>
              <button
                type='button'
                style={{ cursor: 'pointer' }}
                className='btn-download-windows'>
                <img src='./icons/download.svg' alt='' />
                Windows
                <p>Windows 8, 10, 11</p>
              </button>
            </a>

            <table className='table-arq'>
              <tbody className='tbopdy-wind'>
                <thead>
                  <td className='title-strong'>
                    <strong>User Installer</strong>
                  </td>
                  <td>
                    <a className='dlink platform-link' href='#'>
                      64 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      32 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      ARM
                    </a>
                  </td>
                </thead>
                <tr>
                  <td className='title-strong'>
                    <strong>System Installer</strong>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      64 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      32 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      ARM
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='title-strong'>
                    <strong>.zip</strong>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      64 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      32 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      ARM
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='btn-download__linux btn-section__required'>
            <div className='img-logo__so-lnx'></div>

            <a href='#' style={{ textDecoration: 'none' }}>
              <button
                style={{ cursor: 'pointer' }}
                type='button'
                className='btn-dowsload__lnx'>
                <img src='./icons/download.svg' alt='' />
                .deb
                <p>Debian, Ubuntu</p>
              </button>
            </a>

            <a href='#' style={{ textDecoration: 'none' }}>
              <button
                style={{ cursor: 'pointer' }}
                type='button'
                className='btn-dowsload__lnx'>
                <img src='./icons/download.svg' alt='' />
                .rpm
                <p>Red Hat, Fedora, SUSE</p>
              </button>
            </a>

            <table className='table-arq'>
              <tbody className='tbody-lnx'>
                <tr>
                  <td className='title-strong-lnx'>
                    <strong>.deb</strong>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      64 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      32 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      ARM
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      ARM 64
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='title-strong-lnx'>
                    <strong>.rpm</strong>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      64 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      32 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      ARM
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      ARM 64
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='title-strong-lnx'>
                    <strong>.tar.gz</strong>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      64 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      32 bit
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      ARM
                    </a>
                  </td>
                  <td>
                    <a className='platform-link' href='#'>
                      ARM 64
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    className='td-snp-str'
                    colSpan='4'
                    style={{ paddingTop: '6px' }}>
                    <a className='platform-link snap-store' href='#'>
                      Snap Store
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='btn-download__windows btn-section__required'>
            <div className='img-logo__so-mac'></div>
            <div className='btn-down-mac'>
              <a href='https://youtube.com' style={{ textDecoration: 'none' }}>
                <button style={{ cursor: 'pointer' }} type='button'>
                  <img src='./icons/download.svg' alt='' />
                  Mac
                  <p>macOS 10.11+</p>
                </button>
              </a>
            </div>

            <div className='install-features'>
              <table className='table-mac'>
                <tbody>
                  <tr>
                    <td style={{ paddingTop: '10px' }}>
                      <strong>.zip</strong>
                    </td>
                    <td colSpan='2' style={{ paddingLeft: '3px' }}>
                      <a href='#' className='dlink platform-link'>
                        Universal
                      </a>
                    </td>
                    <td colSpan='2' style={{ paddingLeft: '3px' }}>
                      <a href='#' className='platform-link dlink'>
                        Intel Chip
                      </a>
                    </td>
                    <td colSpan='4' style={{ paddingLeft: '3px' }}>
                      <a href='#' className='platform-link dlink'>
                        Apple Silicon
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <section className='section-terms-privacy'>
        <div className='contain-features'>
          <div className='new-features'>
            <h3>Want new features sooner?</h3>
            <span className='text-small-features'>
              Get the <a href='#'>Insiders build</a> build instead.
            </span>
          </div>

          <div className='vscode-dev'>
            <h3>
              Use <b>vscode.dev</b> for quick edits online!
            </h3>
            <span className='text-small-features'>
              GitHub, Azure Repos, and local file
            </span>
          </div>
        </div>

        <div className='section-terms-container'>
          <div className='contain-license-privacy'>
            <div className='license-privacy-terms'>
              <p>LICENSE AND PRIVACY TERMS</p>
              <span>
                By downloading and using Visual Studio Code, you agree to the{' '}
                <a href='#'>license terms</a>
                and{' '}
                <a href='#'>
                  privacy <br /> statement.
                </a>
                VS Code automatically sends telemetry data and crash dumps to
                help us improve the <br /> product. If you would prefer not to
                have this data sent please go see
                <a href='#'>
                  How to Disable Crash <br /> Reporting
                </a>{' '}
                to learn how to disable it.
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='redes-sociales'>
          <a href='#' id='greeting-gh'>
            Hello from Seattle.
          </a>
          <a href='#' id='follow'>
            Follow @Wilpost
          </a>
          <button className='btn-gh social'>
            <img className='gh-icon' src='./icons/Icon-github.svg' alt='GH' />
            <h6 id='text-res'>Star</h6>
          </button>
          <button className='btn-gh__follows social'>134,767</button>
        </div>
        <div className='terms-contain'>
          <div className='terms'>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
            <li>
              <a href='#'>Term of Use</a>
            </li>
            <li>
              <a href='#'>License</a>
            </li>
          </div>
          <div className='obj-mcft'>
            <img
              className='microsoft-logo'
              src='./images/microsoft-logo.png'
              alt='microsoft-logo'
            />
            <small>© 2022 Microsoft</small>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
