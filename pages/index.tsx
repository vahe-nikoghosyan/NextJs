import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world</h1>

      <ul>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/clients">
            Clients
          </Link>
        </li>
      </ul>
    </main>
  );
}
