import "./index.css";

const HomeItems = (props) => {
  const { itemsDetails } = props;
  const { birthYear, created, edited } = itemsDetails;

  return (
    <li className="list-items">
      <p>{birthYear}</p>
      <p>{created}</p>
      <p>{edited}</p>
    </li>
  );
};

export default HomeItems;
