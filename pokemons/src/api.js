import fetch from "isomorphic-unfetch";

export async function getPokemons() {
  try {

    const res = await fetch("https://nba-players.herokuapp.com/players-stats");
    const data = await res.json();
    // console.log("print 1", data);

    return data;
  } catch (err) {
    console.error(err);
  }
}
