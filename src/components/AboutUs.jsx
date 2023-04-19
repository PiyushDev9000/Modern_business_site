import { stats } from "../constants";
import styles from "../style";
import { bill } from "../assets";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
  <div class="w-full md:w-1/2 md:pr-8 lg:pr-16">
    <h2 className="flex-1 font-poppins font-semibold ss:text-[72px]
        text-[55px] text-white ss:leading-[100.8px] leading-[75px] w-full text-justify">About Us</h2>
    <p className={`${styles.paragraph} max-w-full mt-6`}>We create highly adoptable campaign strategies to advertisers mobile promotion challenges. Our folks work closely with Advertisers and Publishers to set the best possible campaign pitch. We implement dynamic optimization campaigns to ensure accuracy in reaching out right traffic at the right time to produce best Returns-On-Ad-Spend.
    <br/>
    {" "}
Our highly engaged global supply partners enable advertisers to focus on critical KPI demands and to reach most meaningful customers to their business. Our innovative solutions have helped many advertisers and publishers to exceed their wildest app install and income expectations.</p>
  </div>
  <div class="w-full md:w-1/2 mt-8 md:mt-0">
    <img class="w-full h-auto" src={bill} alt="About Us Image"/>
  </div>
</section>

)

export default Stats;
