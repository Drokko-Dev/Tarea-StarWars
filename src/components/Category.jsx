import { useEffect, useState } from "react";
import { useGlobalMenu } from "../hooks/useGlobalMenu";
import { useGlobalFavorite } from "../hooks/useGlobalFavorite";

export function Category(props) {
  let [detailsCategory, setDetailsCategory] = useState([]);
  let [like, setLike] = useState(false);
  let { page, setPage } = useGlobalMenu();
  let { favorite, setFavorite } = useGlobalFavorite();
  let [loading, setLoading] = useState(false);
  const nameCategory = page.charAt(0).toUpperCase() + page.slice(1);
  useEffect(() => {
    setLoading(true);
    fetch(`https://www.swapi.tech/api/${page}?limit=20`)
      .then((resp) => {
        /* console.log(resp.ok); */
        return resp.json();
      })
      .then((data) => {
        /* console.log(data); */
        setDetailsCategory(data.results);
        setLoading(false);
      });
  }, [page]);
  /* console.log(detailsCategory);
  console.log(detailsCategory); */

  const details = detailsCategory.map((detail, i) => {
    return (
      <article key={i}>
        <img
          src={
            page === "people"
              ? `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/${page}/${i + 1}.jpg`
              : "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/2.jpg"
          }
          alt=""
        />
        <div className="category-content">
          <h3>{detail.name}</h3>
          <button
            className="like-btn"
            onClick={() => {
              let key = `${page}-${detail.uid}`;
              let favoriteCopy = { ...favorite };
              if (favoriteCopy[key]) {
                delete favoriteCopy[key];
                setFavorite(favoriteCopy);
              } else {
                favoriteCopy[key] = [page, detail.uid, detail.name];
                console.log(favoriteCopy);

                setFavorite(favoriteCopy);
              }
            }}
          >
            {favorite[`${page}-${detail.uid}`] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185-.048.041-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082-7.493-7.422A6 6 0 0 1 6.979 3.074z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
              </svg>
            )}
          </button>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam
            officia facilis debitis vero magnam
          </p>
        </div>
      </article>
    );
  });

  return (
    <div className="container">
      <div className="categories">
        <div className="category">
          <h2>{nameCategory}</h2>

          {loading ? (
            <div className="loading-wrapper">
              <div className="saber-loader"></div>
              <p className="loading-hologram">Escaneando sector...</p>
            </div>
          ) : (
            <div className="details">{details}</div>
          )}
        </div>
      </div>
    </div>
  );
}
