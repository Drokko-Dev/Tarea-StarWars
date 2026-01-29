import { useState } from "react";
import { useGlobalFavorite } from "../hooks/useGlobalFavorite";

const deleteicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    className="icon icon-tabler icons-tabler-filled icon-tabler-backspace"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 5a2 2 0 0 1 1.995 1.85L22 7v10a2 2 0 0 1-1.85 1.995L20 19H9a1 1 0 0 1-.608-.206l-.1-.087-5.037-5.04c-.809-.904-.847-2.25-.083-3.23l.12-.144 5-5a1 1 0 0 1 .577-.284L9 5h11zm-7.489 4.14a1 1 0 0 0-1.301 1.473l.083.094L12.585 12l-1.292 1.293-.083.094a1 1 0 0 0 1.403 1.403l.094-.083L14 13.415l1.293 1.292.094.083a1 1 0 0 0 1.403-1.403l-.083-.094L15.415 12l1.292-1.293.083-.094a1 1 0 0 0-1.403-1.403l-.094.083L14 10.585l-1.293-1.292-.094-.083-.102-.07z" />
  </svg>
);

export function Navbar() {
  const [show, setShow] = useState(false);
  let { favorite, setFavorite } = useGlobalFavorite();
  return (
    <>
      <div className="navbar">
        <h1>STAR WARS</h1>
        <button
          onClick={() => {
            console.log(!show);

            setShow(!show);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {show ? (
          <div className="sidebar">
            <div className="sidebar-header">
              <h2>Favoritos</h2>
              <button
                onClick={() => {
                  console.log(!show);

                  setShow(!show);
                }}
              >
                X
              </button>
            </div>

            {Object.values(favorite).map((u) => {
              return (
                <div className="favoriteCard" key={u[2]}>
                  <h2> {u[2]}</h2>
                  <span>{`(${u[0]})`}</span>
                  <button
                    onClick={() => {
                      let key = `${u[0]}-${u[1]}`;
                      let favoriteCopy = { ...favorite };
                      delete favoriteCopy[key];
                      setFavorite(favoriteCopy);
                    }}
                  >
                    {deleteicon}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
