import Image from "next/image";
import classes from "../styles/Image.module.css";
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function index({ data }) {
  return (
    <div className={classes.mainContainer}>
      {data &&
        data.map((item, index) => (
          <div className={classes.imageContainer} key={index}>
            <Image src={item.image} width={"400"} height={"400"} alt="images" />
            <p className={classes.title}>{item.title}</p>
            <p className={classes.title}>Price: {item.price}</p>
          </div>
        ))}
    </div>
  );
}
