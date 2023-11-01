import Places1 from "../assets/Gondar.png";
import city3 from "../assets/Gondar 3.png";
import city from "../assets/Addis.png";
import city2 from "../assets/Harar.png";
import cityy from "../assets/AddisA.png";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours will give the opportunity to see a lot within a time frame</p>

      <DestinationData
        className="firs-des"
        heading="Gondar"
        text="Gondar is a historic city in Ethiopia, located in the northwestern
      part of the country. Here are some key facts about Gondar: Served as
      the capital of Ethiopia during the Gondarine dynasty from 1632-1855.
      Home to a number of castles and royal sites from the 17th-18th
      centuries, giving rise to its nickname as Africa's Camelot.The
      royal enclosure contains six castles built by different emperors,
      now a UNESCO World Heritage Site. Nearby is Fasil Ghebbi, considered
      one of Ethiopia's most impressive architectural sites. The city is
      known for its unique Gondarine architecture a mix of indigenous
      Ethiopian and foreign influences"
        img1={Places1}
        img2={city3}
      />
      <DestinationData
        className="firs-des-reverse"
        heading="Addis Ababa"
        text="Here are some key facts about Addis Ababa, the capital and largest city of Ethiopia:
        Population: Over 3.4 million (estimate for 2021)
        Founded in 1886 by Emperor Menelik II, who built his palace there and made it the capital of Ethiopia. The name Addis Ababa means new flower in Amharic.
        Located at an elevation of 2,355 meters (7,726 ft) in the foothills of the Entoto Mountains. Has a subtropical highland climate.
        Serves as the headquarters of the African Union and many other international organizations. Also home to the Ethiopian Parliament and government ministries."
        img1={city}
        img2={cityy}
      />
      <DestinationData
        heading="Harar"
        text="Here are some key facts about Addis Ababa, the capital and largest city of Ethiopia:
        Population: Over 3.4 million (estimate for 2021)
        Founded in 1886 by Emperor Menelik II, who built his palace there and made it the capital of Ethiopia. The name Addis Ababa means new flower in Amharic.
        Located at an elevation of 2,355 meters (7,726 ft) in the foothills of the Entoto Mountains. Has a subtropical highland climate.
        Serves as the headquarters of the African Union and many other international organizations. Also home to the Ethiopian Parliament and government ministries."
        img1={city2}
        img2={city2}
      />
    </div>
  );
};

export default Destination;
