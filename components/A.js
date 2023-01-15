import Link from "next/link";
import style from "../styles/A.module.scss";

const A = ({ href, text }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={style.link} href="">
        {" "}
        {text}
      </a>
    </Link>
  );
};

export default A