import { useLocation } from "react-router-dom";

function Search() {
  const loacation = useLocation();
  console.log(loacation);
  return null;
}
export default Search;
