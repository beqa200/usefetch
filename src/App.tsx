import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "../hooks/useFetch";

function App() {
  const [userName, setUserName] = useState("");
  const [fetchData, { data, loading, error }] = useFetch();

  useEffect(() => {
    console.log({ data, error, loading });
  }, [data, error, loading]);

  const getUser = async () => {
    await fetchData(`https://api.github.com/users/${userName}`);
  };

  return (
    <>
      <div>
        <p>Enter Github userName</p>
        <input
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        />

        <button onClick={() => getUser()}>button</button>
        {loading && <h1>loading...</h1>}
      </div>
      <img src={data?.avatar_url} alt="" />
    </>
  );
}

export default App;
