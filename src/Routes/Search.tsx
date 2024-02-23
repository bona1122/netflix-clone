import { useLocation } from "react-router-dom";

function Search() {
  const loacation = useLocation();
  const keyword = new URLSearchParams(loacation.search).get("keyword");
  return null;
}
export default Search;
