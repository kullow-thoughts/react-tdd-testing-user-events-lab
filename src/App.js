import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userInterests, setUserInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setUserEmail(e.target.value);
  const handleCheckboxChange = (e) =>
    setUserInterests({
      ...userInterests,
      [e.target.name]: e.target.checked,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main>
      <h1>Hey, I'm (your name)</h1>
      <img alt="My avatar" src="https://via.placeholder.com/350" />
      <h2>About Myself</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">Visit my GitHub</a>
        <a href="https://linkedin.com">Connect on LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Your Name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="userEmail">Your Email:</label>
          <input
            type="email"
            id="userEmail"
            value={userEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <h3>Select Your Interests:</h3>
          <label>
            <input
              type="checkbox"
              name="interest1"
              checked={userInterests.interest1}
              onChange={handleCheckboxChange}
            />
            Interest 1
          </label>
          <label>
            <input
              type="checkbox"
              name="interest2"
              checked={userInterests.interest2}
              onChange={handleCheckboxChange}
            />
            Interest 2
          </label>
          <label>
            <input
              type="checkbox"
              name="interest3"
              checked={userInterests.interest3}
              onChange={handleCheckboxChange}
            />
            Interest 3
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <p>
          Thank you, {userName}! Your form has been submitted. Interests:{" "}
          {Object.keys(userInterests)
            .filter((key) => userInterests[key])
            .join(", ")}
        </p>
      )}
    </main>
  );
}

export default App;