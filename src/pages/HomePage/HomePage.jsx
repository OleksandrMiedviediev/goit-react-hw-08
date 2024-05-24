import css from "./HomePage.module.css";
// import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to Your Phone Book
        <span role="img" aria-label="Greeting icon">
          💁
        </span>
      </h1>
      <p className={css.subtitle}>
        Manage your contacts easily and efficiently
      </p>
    </div>
  );
}