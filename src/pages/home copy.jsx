import { useEffect, useState } from "react";
import { Category } from "../components/Category";

export function Home(props) {
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
    .map((item, i) => <Category name={item} key={i} />);
  return (
    <>
      <div className="container">
        {/*  <div className="categories">{categories}</div> */}
        <div className="categories">
          <Category name={props.name} />
        </div>
      </div>
    </>
  );
}
