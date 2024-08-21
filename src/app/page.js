import Image from "next/image";
import styles from "./page.module.css";
import { Deck } from "./components/Deck";
import { Play } from "./components/PlayButton";

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Deck />
      <Play />
    </main>
  );
}
