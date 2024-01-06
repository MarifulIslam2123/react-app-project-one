import Card from "./components/Card";
import Header from "./components/Header";

function App() {

  const cardData = [
    {
      Name: "Samsung Galaxy S24 Ultra",
      Price: "80000",
      des: "Samsung is launching the Galaxy S24 series in less than two weeks.",
      imgUrl: "https://www.assuredzone.com/ae/wp-content/uploads/sites/2/2023/02/Samsung-Galaxy-S23.jpg"
    },
    {
      Name: "iPhone 15 Pro Max",
      Price: "169500",
      des: "iPhone 15 Pro and iPhone 15 Pro Max. Titanium design. A17 Pro chip. Action button.",
      imgUrl: "https://diamu.com.bd/wp-content/uploads/2023/09/Apple-iPhone-15-Pro-Max-Natural-Titanium-Diamu-300x300.png"
    },
    {
      Name: "Nothing Phone 1",
      Price: "77990",
      des: "Nothing Phone (1) smartphone is rumored to launch at an event on 12 July, 2022.",
      imgUrl: "https://diamu.com.bd/wp-content/uploads/2023/07/Nothing-Phone-2-White-Online-Shopping-Bangladesh-Diamu-300x300.jpg"
    },
    {
      Name: "OnePlus Nord 3",
      Price: "63990",
      des: "OnePlus Nord 3 smartphone is rumored to launch at an event on 12 July, 2022.",
      imgUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://nijerit.com/wp-content/uploads/2023/11/OnePlus-Nord-3-5G-Green-300x300.webp"
    },

  ];

  return (
    <div >
      <Header />
      <div className="flex gap-5 justify-center mt-10">
        {
          cardData.map((item, i) => (
            <Card cardInfo={item} key={i} />
          ))
        }
      </div>

    </div>
  )
}

export default App