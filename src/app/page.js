import Image from "next/image";
import styles from "./page.module.css";
import { Deck } from "./components/Deck";
import { Deck2 } from "./components/Deck copy";
import { Play } from "./components/PlayButton";

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Deck2 />
    </main>
  );
}
