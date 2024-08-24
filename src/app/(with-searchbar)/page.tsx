import ClientComponent from "./client-component";
import ServerComponent from "./server-component";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
