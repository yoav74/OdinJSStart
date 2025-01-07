async function fetchpokemon() {
  const inputVal = document.querySelector("#input").value.toLowerCase();
  console.log(inputVal);
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputVal}`);
    if (!res.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await res.json();
    const pokeimg = document.querySelector("#pokesprite");
    const PokeNameH = document.querySelector("#pokeName");
    const List = document.querySelector("#foundin");
    console.log(json);
    pokeimg.src = json.sprites.front_default;
    PokeNameH.textContent = `Pokemon Name: ${json.name}`;
    console.log(json.game_indices);
    List.textContent = "Found In: ";
    for (const games of json.game_indices) {
      console.log(games.version.name);
      const ListItem = document.createElement("li");
      ListItem.textContent = games.version.name;
      List.appendChild(ListItem);
    }
  } catch (error) {
    console.error(error.message);
  }
}
const input = document.querySelector("#input");
const btn = document.querySelector("#submit");
input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    btn.click();
  }
});
