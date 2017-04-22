var React = require('react');

var About = (props) => {
  return (
  <div>
    <h1 className="text-center page-title">About</h1>
    <p>This was an app created to learn React. Here's some info about this app:</p>
    <ul>
      <li>
        This was created as a project for <a href="https://www.udemy.com">this class</a>
      </li>
      <li>
        <a href="https://github.com/webbjordy">My GitHub profile</a>
      </li>
    </ul>
  </div>

  )
}

module.exports = About;
