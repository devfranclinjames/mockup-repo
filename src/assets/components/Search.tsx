import { useState, useEffect } from "react";

// Define the structure of a Game object
interface Game {
  gameName: string;
  publisher: string;
  bannerLocation: string;
}

interface ApiResponse {
  data: Game[];
}

const getGameService = async (): Promise<ApiResponse> => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbzU50SUvQj2Qrdn2b8FpvMVz8-gO3aQPh2r8tAR1YmPLU9ztXC_FeWpTn26SS2A33jswA/exec";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
};

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [games, setGames] = useState<Game[]>([]); // games state
  const [allGames, setAllGames] = useState<Game[]>([]); // allGames state

  useEffect(() => {
    const getGames = async () => {
      const gamesData = await getGameService();
      console.log(gamesData);
      setGames(gamesData.data);
      setAllGames(gamesData.data); // original list
    };
    getGames();
  }, []);

  // Search handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="container w-100 mw-100">
        <input
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Type to search"
        />
      </div>
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
