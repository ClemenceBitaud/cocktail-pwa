import {Link} from "react-router-dom";
import styled from "styled-components";
import './Navbar.css';

const Navbar = () => {

    return(
        <div className="navbar">
            <NavBarLink activeClassName="active" to="/">Accueil</NavBarLink>
            <NavBarLink to="/popular">Populaire</NavBarLink>
            <NavBarLink to="/cocktail">Cocktail</NavBarLink>
            <NavBarLink to="/favorite">Favoris</NavBarLink>
        </div>
    )
}
export default Navbar;

export const NavBarLink = styled(Link)
`
  color: black;
  text-decoration: none;
  &:hover,
  &:focus{
    background: #FFE9D7;
  }
`