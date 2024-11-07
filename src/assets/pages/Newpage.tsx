import { useEffect, useState } from "react";

// Define the structure of a Game object
interface Game {
  gameName: string;
  bannerLocation: string;
}

const getGameService = async (): Promise<{ data: Game[] }> => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbzU50SUvQj2Qrdn2b8FpvMVz8-gO3aQPh2r8tAR1YmPLU9ztXC_FeWpTn26SS2A33jswA/exec";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
    return { data: [] }; // Return an empty array if an error occurs
  }
};

function Newpage() {
  const [games, setGames] = useState<Game[]>([]); // Type the games state as Game[]

  useEffect(() => {
    const getGames = async () => {
      const gamesData = await getGameService();
      setGames(gamesData.data); // Use the correctly typed data
    };
    getGames();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap allgames">
        {games.map((item) => (
          <div key={item.gameName} className="gameclass ml-2 mb-5">
            <p>Game Name: {item.gameName}</p>
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
}

export default Newpage;