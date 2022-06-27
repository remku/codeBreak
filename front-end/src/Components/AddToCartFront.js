import { useParams } from "react-router-dom";

const AddToCartFront = (id) => {
  return async () => {
    const myMail = localStorage.getItem("User");
    console.log(id, myMail);
    const data = await fetch("http://localhost:3001/addToCart", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id.id,
        email: myMail,
      }),
    });
    if (data.ok) {
      alert("Added");
    }
  };
};

export default AddToCartFront;