// import { createElement } from "react";
import { Link } from "react-router-dom";
// const Pet = (props) => {
//     return createElement("div", {}, [
//       createElement("h1", {}, props.name),
//       createElement("h2", {}, props.animal),
//       createElement("h2", {}, props.breed),
//     ]);
//   };

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/detail/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
