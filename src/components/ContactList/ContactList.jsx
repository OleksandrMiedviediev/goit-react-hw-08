import Contact from "../Contact/Contact"
import { selectFiltredContacts } from "../../redux/filters/selectors";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css"

export default function ContactList() {

  const contacts = useSelector(selectFiltredContacts);

  return (
      <>
          <ul className={css.container}>
            {contacts.map((contact => (
                <Contact key={contact.id} contact={contact} />
            )))}
        </ul>
    </>
  )
}

