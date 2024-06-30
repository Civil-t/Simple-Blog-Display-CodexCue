import Card from "./components/Card";
import { useEffect, useState } from "react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  className: "center",
  centerMode: false,
  infinite: true,
  centerPadding: "50px",
  dots: true,
  slidesToShow: 3,
  speed: 700,
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../public/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Card
            key={index}
            logo={item.logo}
            car={item.car}
            name={item.name}
            price={item.price}
            seat={item.seat}
            speaker={item.speaker}
            speed={item.speed}
          />
        ))}
      </Slider>
    </>
  );
}

export default App;

