import css from "./Layout.module.css";
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}