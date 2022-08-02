import {Link} from 'react-router-dom'
import Context from '../Context'
import Display from '../Display'

const Home = () => (
  <Context.Consumer>
    {value => {
      const {isTrue} = value
      return (
        <div>
          {isTrue ? (
            <div>
              <nav>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
                <div className="bg_container">
                  <div className="main_container">
                    <h1>Welcome to Meetup</h1>
                    <p>Please register for the topic</p>
                    <Link to="/register">
                      <button className="register" type="button">
                        Register
                      </button>
                    </Link>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </div>
                </div>
              </nav>
            </div>
          ) : (
            <Display />
          )}
        </div>
      )
    }}
  </Context.Consumer>
)

export default Home
