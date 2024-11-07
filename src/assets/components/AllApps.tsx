import { useEffect, useState } from "react";

const getGameService = async () => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbzU50SUvQj2Qrdn2b8FpvMVz8-gO3aQPh2r8tAR1YmPLU9ztXC_FeWpTn26SS2A33jswA/exec";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
function AllApps() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const games = await getGameService();
      // console.log(games);
      setGames(games.data);
    };
    getGames();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap allgames">
        {games.map((item) => (
          <div key={item.gameName} className="gameclass ml-2 mb-5">
            <p>Publisher: {item.publisher}</p>
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
export default AllApps;
