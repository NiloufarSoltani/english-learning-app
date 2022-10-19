import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchFlashcardsData } from "../app/flashcardsData-actions";
import AuthContext from "../store/Auth-context";
import Card from "../UI/Card";

const Study = () => {
  const dispatch = useDispatch();
  const studyLevels = [0, 1, 2, 3, 4];
  const items = useSelector((state) => state.items.words);
  const isLoading = useSelector(state => state.items.isLoading);
  // console.log('stydy renders');
  // console.log({isLoading});
  // console.log({items});
  if (items.length === 0 && isLoading) {
    // console.log('go fetch flashcards');
    dispatch(fetchFlashcardsData());
  }
  
  // const userEmail = useContext(AuthContext)

  // useEffect(() =>{}, [userEmail])

  const content = studyLevels.map((i) => {
    const quantity = items.filter((item) => Math.floor(item.level) === i).length;
    return (
      <Link to={`/flashcards/practice/level-${i + 1}`} key={i}>
        <Card>
          <h3>{`Level ${i + 1}`}</h3>
          <span>{quantity} words</span>
        </Card>
      </Link>
    );
  });

  return <ul>{content}</ul>;
};
export default Study;
