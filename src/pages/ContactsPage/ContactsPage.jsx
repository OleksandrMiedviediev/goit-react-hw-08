import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";

import css from "./ContactsPage.module.css";

import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLoading, selectError } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.container}>
        <div>
          <ContactForm />
        </div>
        <div className={css.thumb}>
          <SearchBox />
          {error && <p>Error!</p>}
          {loading ? <Loader /> : <ContactList />}
        </div>
      </div>
    </div>
  );
}