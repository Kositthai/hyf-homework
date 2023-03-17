import { SearchingContext } from "../SearchContext";
import { useContext } from "react"

export default function UserSeacher() {
  const { handleInputChange, query, userList, loading, renderUser, error } = useContext(SearchingContext);

  return (
    <div>
      <div>
        <h1>Github user seacher</h1>
        <input type="text" onChange={handleInputChange} />
      </div>
      <div>
        {loading ? <h1>Loading...</h1> : null}
        {query.length && userList ? renderUser() : <p>No Item</p>}
        {error && error !== "The user aborted a request." ? <p>Error Fetching: {error}</p> : null}
      </div>
    </div>
  );
}