import { NavLink } from "react-router-dom";

const links = [
  {
     title: "Home",
     to: "/",
     id: "homepage1"
  },
  {
    title: "Product",
    to: "/products",
    id: "productpage1"
 }
];

export const Navbar = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>      
        {links.map((el) => {
          return (
            <NavLink key={el.to} style={{ padding: "10px" }} to={el.to}>
              {el.title}
            </NavLink>
          );
        })}

      </div>
      
    </div>
  );
};
