import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

function HomePage() {
  const hobbyList = useSelector(state => state.hobby.list);
  const activeHobbyId = useSelector(state => state.hobby.activeHobbyId);
  const dispatch = useDispatch();
  
  console.log(activeHobbyId);

  const randomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  function handleAddHobby() {
    const newId = randomId();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    }

    dispatch(addNewHobby(newHobby));
  }

  function setActiveId(id) {
    dispatch(setActiveHobby(id));
  }

  return (
    <div>
      <h1>REDUX HOOKS - Home Page</h1>

      <button onClick={handleAddHobby}>Add</button>
      <HobbyList hobbyList={hobbyList} activeId={activeHobbyId} setActiveId={setActiveId} />
    </div>
  )
}

HomePage.propTypes = {

}

export default HomePage

