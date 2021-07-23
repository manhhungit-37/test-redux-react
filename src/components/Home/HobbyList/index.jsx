import React from 'react'
import PropTypes from 'prop-types'

function HobbyList(props) {
  const { hobbyList, activeId, setActiveId } = props;

  function setActiveHobby(id) {
    setActiveId(id)
  }

  return (
    <ul className="hobby-list">
      {hobbyList.length > 0 && hobbyList.map(hobby => (
        <li 
          key={hobby.id}
          className={activeId === hobby.id ? "active" : null}
          onClick={() => setActiveHobby(hobby.id)}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  )
}

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
};

HobbyList.defaultProps = {
  hobbyList: []
};

export default HobbyList;

