import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesAction, getMessageSuccessAction } from '../redux/greeting';

const Greeting = () => {
  const state = useSelector((state) => state.greetReducer);
  const dispatch = useDispatch();

  // const messageStore = state.map((response) => {
  //   return <li>{response.message}</li>;
  // });

  console.log(state, 'state');

  const getMessage = () => {
    dispatch(getMessagesAction());
    fetch('v1/messages.json')
      .then((response) => response.json())
      .then((data) => dispatch(getMessageSuccessAction(data.messages)))
      // .catch((error) => console.log(error));
      .then((data) => console.log(data));
  };

  return (
    <div>
      <button type="button" onClick={() => getMessage()}>
        Get Message
      </button>
      {state.message && <span>{state.message}</span>}
    </div>
  );
};

export default Greeting;
