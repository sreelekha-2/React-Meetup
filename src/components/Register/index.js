import {Component} from 'react'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {username: '', selected: topicsList[0].id, userErr: true}

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getCourse = event => {
    // this.setState({selected: event.target.value})
  }

  submitUser = event => {
    event.preventDefault()
    const {username} = this.state
    if (username === '') {
      this.setState({userErr: true})
    } else {
      this.setState({userErr: false})
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {username, selected, userErr} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
        <div className="forms">
          <div className="main_sec">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="img_form"
            />
            <form className="from_container" onSubmit={this.submitUser}>
              <h1>Let us join</h1>
              <div className="text_con">
                <label htmlFor="nameId">NAME</label>
                <input
                  id="nameId"
                  className="text_field"
                  type="text"
                  placeholder="Your name"
                  value={username}
                  onChange={this.getUsername}
                />
              </div>
              <div className="text_con">
                <label htmlFor="topicId">TOPICS</label>
                <select
                  className="text_field"
                  id="topicId"
                  onChange={this.getCourse}
                  value={selected}
                >
                  {topicsList.map(items => (
                    <option value={items.id} key={items.id}>
                      {items.displayText}
                    </option>
                  ))}
                </select>
                <input
                  className="submit_btn"
                  type="submit"
                  value="Register Now"
                />
                {userErr ? <p className="error">Please enter your name</p> : ''}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
