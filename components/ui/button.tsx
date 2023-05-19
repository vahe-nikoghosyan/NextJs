import Link from "next/link";

import classes from "./button.module.css";
function Button(props: any) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button onChange={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
}

export default Button;
