import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesAction, getMessageSuccessAction } from '../redux/greeting';

const Greeting = ({ message }) => {
  const state = useSelector((state) => state.greetReducer.messages);
  const dispatch = useDispatch();

  const messageStore = state.map((response) => {
    return <li>{response.message}</li>;
  });

  console.log(state);

  const getMessage = () => {
    dispatch(getMessagesAction());
    // fetch('v1/message.json')
    //   .then((response) => response.json())
    //   .then((data) => dispatch(getMessageSuccessAction(data)))
    //   .catch((error) => console.log(error));
  };

  console.log(state);

  return (
    <div>
      <span>Message: {message}</span>
      <button type="button" onClick={() => getMessage()}>
        Get
      </button>
      <ul>{messageStore}</ul>
    </div>
  );
};

Greeting.propTypes = {
  message: PropTypes.string,
};
export default Greeting;
