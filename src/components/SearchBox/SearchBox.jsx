import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const value = useSelector((state) => state.filters.name)
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input className={css.input} type="text" value={value} onChange={(event) => dispatch(changeFilter(event.target.value))}/>
    </div>
  )
} 