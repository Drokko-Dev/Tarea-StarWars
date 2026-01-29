import { useGlobalFavorite } from "../hooks/useGlobalFavorite";

export function Sidebar() {
  let { favorite, setFavorite } = useGlobalFavorite();

  const favoriteElements = favorite;

  return (
    <>
      <div className="sidebar">
        <h1>Favoritos</h1>
        {Object.values(favorite).map((u) => {
          <div className="favoriteCard" key={u[2]}>
            <h1>{u[2]}</h1>
            <span>{u[1]}</span>
          </div>;
        })}
      </div>
    </>
  );
}
