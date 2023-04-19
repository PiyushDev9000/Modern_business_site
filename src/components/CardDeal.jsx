import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Publishers
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Maximize your revenue with us! With our technology, we can target the most appropriate ad for your audience, regardless of where the users are sent from, guaranteeing you unmatched eCPMs.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
