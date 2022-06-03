import Brand from "../assets/images/logos/brand.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={Brand} alt="brand" width="100px" />
    </Link>
  );
};

export default Logo;
