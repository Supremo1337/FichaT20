export const inputs = (account) => [
  {
    title: "Personagem",
    gridColumn: "1/2",
    gridRow: "1/2",
    width: "95%",
    value: account.character,
    name: "character"
  },
  {
    title: "Jogador",
    gridColumn: "1/2",
    gridRow: "2/3",
    width: "95%",
    value: account.name,
    name: "name"
  },
  {
    title: "Raça",
    gridColumn: "1/2",
    gridRow: "3/4",
    width: "95%",
    value: account.race,
    name: "race"
  },
  {
    title: "Origem",
    gridColumn: "2/4",
    gridRow: "1/2",
    width: "95%",
    value: account.origin,
    name: "origin"
  },
  {
    title: "Classe",
    gridColumn: "2/3",
    gridRow: "2/3",
    width: "95%",
    value: account.role,
    name: "role"
  },
  {
    title: "Nível",
    gridColumn: "3/4",
    gridRow: "2/3",
    width: "84%",
    type: "number",
    value: account.level,
    name: "level"
  },
  {
    title: "Divindade",
    gridColumn: "2/4",
    gridRow: "3/4",
    width: "95%",
    value: account.divinity,
    name: "divinity"
  },
];
