const ProgrammerList = ({ programmers }) => {
  return (
    <>
      <h2>List of Programmers: </h2>
      <ol>
        {programmers.map((p) => (
          <li key={p.id}>
            <h3>GitHub: {p.github} </h3>
            <p>Language: {p.language}</p>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ProgrammerList;
