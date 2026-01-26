import { useEffect, useState } from "react";
import { Category } from "../components/Category";
import { useGlobalMenu } from "../hooks/useGlobalMenu";

export function Home() {
  let { page, setPage } = useGlobalMenu();
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
