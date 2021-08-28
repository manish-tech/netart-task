import "./Main.css";
function Main() {
  return (
    <main className="main">
      <div className="main__container-a">
        <div className="container-a-sub1">
          <img className="prize" src="./images/1.png" alt="prize" />
        </div>
        <div className="container-a-sub2">
          <div className="paragraph">
            <h4 className="paragraph_heading">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>

            <ul className="paragraph_list paragraph_list-font">
              <li className = "paragraph_list-font">
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li className = "paragraph_list-font">
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.{" "}
              </li>
            </ul>
          </div>
          <img
            className="receiving_prize"
            src="./images/2.png"
            alt="receiving_prize"
          />
          <p className="paragraph_list-font">
            Government of India has awarded the{" "}
            <span className="font-bold paragraph_list-font">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="main__container-b">
        <div className="container-b-sub1">
          <p className="main__container-b-paragraph paragraph_list-font">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <img className="machines" src="./images/3.png" alt="machines" />
        </div>
        <div className="container-b-sub2">
          <p className="container-b-sub2_paragraph1 text-aligin-center">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
          <hr className="container-b-sub2_hr" />
          <h4 className="paragraph_heading width-50 text-aligin-center mg-b-1em">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </h4>
          <p className="container-b-sub2_paragraph2">
            CHEMICALS & PROCESS
            <span className="container-b-sub2_span">|</span>POWER{" "}
            <span className="container-b-sub2_span">|</span>
            WATER & WASTE WATER<span className="container-b-sub2_span">|</span>
            OILS & GAS<span className="container-b-sub2_span">|</span>
            PHARMA <span className="container-b-sub2_span">|</span>
            SUGARS & DISTILLERIES{" "}
            <span className="container-b-sub2_span">|</span>
            PAPER & PULP <span className="container-b-sub2_span">|</span>
            MARINE & DEFENCE<span className="container-b-sub2_span">|</span>
            METAL & MINING <span className="container-b-sub2_span">|</span>
            FOOD & BEVERAGE <span className="container-b-sub2_span">|</span>
            PETROCHEMICAL & REFINERIES{" "}
            <span className="container-b-sub2_span">|</span>
            SOLAR <span className="container-b-sub2_span">|</span>
            BUILDING <span className="container-b-sub2_span">|</span>
            HVAC <span className="container-b-sub2_span">|</span>
            FIRE <span className="container-b-sub2_span">|</span>
            FIGHTING <span className="container-b-sub2_span">|</span>
            AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
