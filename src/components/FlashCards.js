import { useState, useEffect } from "react";
import { NavLink, Switch, useLocation } from "react-router-dom";

import PrivateRoute from "../utils/PrivertRoute";
import LevelList from "./LevelList";
import VocabularyList from "./VocabList";
import LearnedWords from "./LearnedWords";
import DifficultWords from "./DifficultWords";
import Guide from "./Guide";
import classes from "./Flashcards.module.css";

const Flashcards = () => {
  const [hasContent, setHasContent] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/flashcards") {
      setHasContent(false);
    } else setHasContent(true);
  }, [location.pathname]);

  return (
    <div className={classes.Flashcards}>
      <div className={classes["flashcards_actions"]}>
        <NavLink
          activeClassName={classes["active-link"]}
          className={classes.link}
          to="/flashcards/vocabulary-list"
        >
          Vocabulary List
        </NavLink>
        <NavLink
          activeClassName={classes["active-link"]}
          className={classes.link}
          to="/flashcards/practice"
        >
          Let's Study
        </NavLink>
        <NavLink
          activeClassName={classes["active-link"]}
          className={classes.link}
          to="/flashcards/learned-words"
        >
          Learned Words
        </NavLink>
        <NavLink
          activeClassName={classes["active-link"]}
          className={classes.link}
          to="/flashcards/difficult-words"
        >
          Difficult Words
        </NavLink>
      </div>

      <div className={classes.content}>
        {!hasContent && (
          <div className={classes.empty}>
            <i>(Choose your tab to see content.)</i>
          </div>
        )}
        <Switch>
          <PrivateRoute path="/flashcards/vocabulary-list">
            <VocabularyList />
          </PrivateRoute>
        </Switch>
        <Switch>
          <PrivateRoute path="/flashcards/practice">
            <LevelList />
          </PrivateRoute>
        </Switch>
        <Switch>
          <PrivateRoute path="/flashcards/learned-words">
            <LearnedWords />
          </PrivateRoute>
        </Switch>
        <Switch>
          <PrivateRoute path="/flashcards/difficult-words">
            <DifficultWords />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};
export default Flashcards;
