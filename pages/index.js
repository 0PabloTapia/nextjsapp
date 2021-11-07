import Link from "next/link";
const Pokiman = ({ pokiman }) => {
  const pokeIds = pokiman.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <Link href={`pokemones/${pokeIds}`}>
      <li>{pokiman.name}</li>
    </Link>
  );
};

export default function Pokimans({ pokimans }) {
  console.log(pokimans);

  return (
    <div>
      <p>My Pokimans</p>
      <ul>
        {pokimans.map((poke) => (
          <Pokiman pokiman={poke} key={poke.name} />
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return {
    props: { pokimans: data.results },
  };
};
