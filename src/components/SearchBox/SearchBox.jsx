import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectUsersQuery } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectUsersQuery);

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}