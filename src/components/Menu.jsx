import { useEffect, useState } from "react";
import { Category } from "../components/Category";
import { useGlobalMenu } from "../hooks/useGlobalMenu";

export function Menu(props) {
  let { page, setPage } = useGlobalMenu();
  let [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/")
      .then((resp) => {
        /* console.log(resp.ok); */
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        const categoryNames = Object.keys(data.result);
        setCategory(categoryNames);
      })
      .catch((error) => console.log(error));
  }, []);

  const categories = category
    .filter((i) => i !== "films")
    .map((item, i) => {
      return (
        <a
          className="options"
          onClick={() => {
            setPage(item);
          }}
          key={i}
        >
          {item.toUpperCase()}
        </a>
      );
    });
  return (
    <>
      <div className="container">
        <div className="menu-categories">{categories}</div>
      </div>
    </>
  );
}
