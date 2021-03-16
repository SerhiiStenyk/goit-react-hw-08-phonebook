import React from 'react';
import s from './ContactList.module.css';
import { BsFillXSquareFill } from "react-icons/bs";

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={s.item}>
      {' '}
      <span>{name}</span> <span>{number}</span>
        <button
          className={s.delete}
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
        >
          <BsFillXSquareFill className={s.icon} />
        </button>
    </li>
  );
};
export default ContactListItem;
