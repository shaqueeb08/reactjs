import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      // fetch data from API through axios
      //const response = await axios.get(
      // `https://picsum.photos/v2/list?page=${index}&limit=10`,
      //  );
      //setUserData(Response.data);
      /*
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${index}&limit=10`,
      );

      const data = await response.json();
*/

      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`,
      );

      setUserData(data);

      setLoading(false);
    };

    getData();
  }, [index]);

  return (
    <div>
      <h1>Gallery</h1>
      {loading && <h2 className="loading">Loading...</h2>}

      {!loading && (
        <div className="gallery">
          {userdata.map((item) => (
            <div key={item.id}>
              <a href={item.url} target="_blank">
                <img src={item.download_url} alt={item.id} />
              </a>
              <p>{item.author}</p>
            </div>
          ))}
        </div>
      )}
      <div className="style">
        <button
          disabled={index === 1 || loading}
          onClick={() => {
            setIndex((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <p>Page {index}</p>
        <button
          disabled={loading}
          onClick={() => {
            setIndex((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
