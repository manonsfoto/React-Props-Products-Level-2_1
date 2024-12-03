import "./Item.css";
interface ItemProps {
  imgURL: string;
  title: string;
  price: number;
}

const Item: React.FC<ItemProps> = (props) => {
  return (
    <article className="flex item">
      <img src={props.imgURL} alt="product" />
      <p>{props.title}</p>
      <p>${props.price}</p>
      <a href="#" className="btn_buy">
        Buy Now
      </a>
    </article>
  );
};

export default Item;
