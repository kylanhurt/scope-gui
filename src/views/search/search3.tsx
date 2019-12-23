import React, { Component } from "react"
import { Row, Col } from "reactstrap"
import { Search } from "react-feather"
import classnames from "classnames"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class SearchThree extends Component {
  state = {
    formOpen: false,
  }
  render() {
    document.documentElement.className = "js3"
    document.body.classList.add("demo-3")
    document.body.classList.remove("demo-2")
    document.body.classList.remove("demo-1")
    return (
      <Row>
        <Col md={12}>
          <svg className="hidden">
            <defs>
              <symbol id="icon-arrow" viewBox="0 0 24 24">
                <title>arrow</title>
                <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
              </symbol>
              <symbol id="icon-drop" viewBox="0 0 24 24">
                <title>drop</title>
                <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
                <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
              </symbol>
              <symbol id="icon-search" viewBox="0 0 24 24">
                <title>search</title>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </symbol>
              <symbol id="icon-cross" viewBox="0 0 24 24">
                <title>cross</title>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </symbol>
            </defs>
          </svg>

          <main
            className={classnames("main-wrap", {
              "main-wrap--move": this.state.formOpen,
            })}
          >
            <header className="codrops-header">
              <div className="search-wrap">
                <button
                  className="btn btn--search search3"
                  onClick={() => this.setState({ formOpen: true })}
                >
                  <svg className="icon icon--search">
                    <Search size={18} />
                  </svg>
                </button>
              </div>
            </header>
            <div className="bottom-nav">
              <nav className="codrops-demos">
                <span>More demos: </span>
                <NavLink exact activeClassName="current-demo" to="/search/one">
                  1
                </NavLink>
                <NavLink exact activeClassName="current-demo" to="/search/two">
                  2
                </NavLink>
                <NavLink exact activeClassName="current-demo" to="/search/three">
                  3
                </NavLink>
              </nav>
            </div>
          </main>
          <div
            className={classnames("search", {
              "search--open": this.state.formOpen,
            })}
          >
            <button
              className="btn btn--search-close"
              onClick={() => this.setState({ formOpen: false })}
            >
              <svg className="icon icon--cross">
                <FontAwesomeIcon icon="times" className="f-18" />
              </svg>
            </button>
            <form className="search__form" onSubmit={e => e.preventDefault()}>
              <input className="search__input" type="search" />
              <span className="search__info">
                Hit enter to search or ESC to close
              </span>
            </form>
            <div className="search__related">
              <div className="search__suggestion">
                <h3>May We Suggest?</h3>
                <p>
                  #drone #funny #catgif #broken #lost #hilarious #good #red
                  #blue #nono #why #yes #yesyes #aliens #green
                </p>
              </div>
              <div className="search__suggestion">
                <h3>Needle, Where Art Thou?</h3>
                <p>
                  #broken #lost #good #red #funny #lala #hilarious #catgif #blue
                  #nono #why #yes #yesyes #aliens #green #drone
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default SearchThree
