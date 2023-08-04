import { AiFillStar } from "react-icons/ai";

const data = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="ratings-start" />,
    reviews: "(123 reviews)",
    price: 10,
    discountPrice: 5,
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    star: <AiFillStar className="ratings-start" />,
    reviews: "(123 reviews)",
    price: 50,
    discountPrice: 24,
    company: "Nike",
    color: "red",
    category: "sneakers"
  },
  {
    img: "https://m.media-amazon.com/images/I/71205al61QL._AC_UL400_.jpg",
    title: "Adidas Men's Pace VS-M",
    star: <AiFillStar className="ratings-start" />,
    reviews: "(123 reviews)",
    price: 140,
    discountPrice: null,
    company: "Adidas",
    color: "black",
    category: "flats",
  },
];

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const colors = ['black', 'red', 'white', "blue", "green"]
const categories = ['flats', 'sneakers', "sandals"]
const products = [...data, ...data, ...data]
  .map(p => ({
    ...p,
    color: colors[getRndInteger(0, colors.length - 1)],
    category: categories[getRndInteger(0, categories.length - 1)],
    price: getRndInteger(100, 200),
    discountPrice: getRndInteger(0, 99),
  }))

export default products;
