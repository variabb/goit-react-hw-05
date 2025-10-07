import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={s.notFoundWrapper}>
      <h1>Page Not Found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
