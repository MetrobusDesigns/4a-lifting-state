import { useState } from "react";

const ProgrammerForm = ({ addProgrammer }) => {
  const [github, setGithub] = useState("");
  const [language, setLanguage] = useState("");

  // when we submit, add our programmer to the programmers list
//   const [programmers, setProgrammers] = useState([
//     { github: "java_coder1000", language: "Java", id: 1 },
//   ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // create a programmer object from the data
    const newProgrammer = {
        id: Date.now(),
        github, // same as github: github
        language,
    }

    // store that programmer in our programmers array
    // setProgrammers([...programmers, newProgrammer])
    addProgrammer(newProgrammer);

    // clear inputs
    setGithub("")
    setLanguage("")
  }

  return (
    <>
      <h2>Programmer Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your GitHub Account: </label>
          <input
            value={github}
            onChange={(event) => setGithub(event.target.value)}
          />
        </div>
        <div>
          <label>What language do you program in? </label>
          <input
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      {/* <ol>
        {programmers.map((p) => (
            <li key={p.id}>
                <h3>GitHub: {p.github} </h3>
                <p>Language: {p.language}</p>
            </li>
        ))}
      </ol> */}
    </>
  );
};

export default ProgrammerForm;
