import { Switch, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import CreateBook from "./components/CreateBook";
// import Posts from "./components/Posts";
import UpdateBook from "./components/UpdateBook";
import NavBar from "./shared/NavBar";

function App() {
  return (
    <>
      {/* <Posts /> */}
      <NavBar />
      <Switch>
        <Route path="/create-book">
          <CreateBook />
        </Route>
        <Route path="/update-book/:id">
          <UpdateBook />
        </Route>
        <Route path="/">
          <BooksList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
