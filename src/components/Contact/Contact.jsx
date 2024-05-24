import { HiPhone } from "@react-icons/all-files/hi/HiPhone";
import { HiUser } from "@react-icons/all-files/hi/HiUser";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";


export default function Contact({contact}) {
  const dispatch = useDispatch();
  return (
      <>
      <li>
        <div className={css.container}>
            <div>
                <p className={css.text}><HiUser/> {contact.name}</p>
                <p className={css.text}><HiPhone /> {contact.number}</p>
            </div>
                <button className={css.btn} onClick={()=>dispatch(deleteContact(contact.id))}>Delete</button>
        </div>
        </li>
    </>
  )
}