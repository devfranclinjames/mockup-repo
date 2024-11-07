import { useState, useEffect } from "react";

const getGameService = async () => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbzU50SUvQj2Qrdn2b8FpvMVz8-gO3aQPh2r8tAR1YmPLU9ztXC_FeWpTn26SS2A33jswA/exec";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
};

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]); // Store

  useEffect(() => {
    const getGames = async () => {
      const games = await getGameService();
      console.log(games);
      setGames(games.data);
      setAllGames(games.data); // Save the original list here
    };
    getGames();
  }, []);

  // Search handler
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    // Filters
    const filteredItems = allGames.filter(
      (data) =>
        data.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.gameName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setGames(filteredItems);
  };

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      <div className="d-flex flex-wrap allgames">
        {games.map((item) => (
          <div key={item.gameName} className="gameclass ml-2 mb-5">
            <strong>Game Name: {item.gameName}</strong>
            <br />
            <strong>Publisher: {item.publisher}</strong>
            <img
              className="w-100"
              src={item.bannerLocation}
              alt={item.gameName}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
