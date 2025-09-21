const App = () => {
  const name = "John";
  const x = 10;
  const y = 20;

  const names = ["Frank", "John", "James", "Sarah"];

  const loggedIn = true;

  const styles = { color: "red", fontSize: "1.5rem" };
  // if(loggedIn){
  //   return <h1>Hello Member</h1>
  // }

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={styles}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>

      <ul>
        {names.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>

      {/* {loggedIn ? <h1>Hello Member</h1>: ""} */}
      {loggedIn && <h1>Hello World</h1>}
    </>
  );
};
export default App;
