import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("key") === null) {
      navigate("/Signin");
    }
  }, []);
  const { cartItems } = props;
  console.log("Cart - cartItems -> " + cartItems);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  var quantity;
  // let produtxyz = cartItems[0].productName;
  // console.log(produtxyz);
  // let sentOrder = {
  //   productName: cartItems.data,
  //   itemsPrice: itemsPrice,
  //   taxPrice: taxPrice,
  //   shippingPrice: shippingPrice,
  //   totalPrice: totalPrice,
  // };
  //   let city = sessionStorage.getItem("city");
  //   let email = sessionStorage.getItem("email");

  var date = new Date();
  var current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  var current_date2 = current_date.toString();

  var userobj = JSON.parse(localStorage.getItem("key"));
  var eveobj = JSON.parse(localStorage.getItem("eveobj"));

  var bookingObj = {
    bookingPrice: eveobj.eventCost,
    eventName: eveobj.eventName,
    bookingDate: current_date2,
  };
  console.log(bookingObj);
  let bookfunc = async () => {
    await axios
      .post(
        `http://localhost:8080/booking/addBooking.paradise/${userobj.data.visitorId}`,
        bookingObj
      )
      .then(
        (response) => {
          alert("SUCCESS : Booked ");
          console.log(response.data);
        },
        (error) => {
          console.log(error);
          alert(" ERROR : Booking failed");
        }
      );
  };

  return (
    <>
      <div
        className="btn btn-primary btn-lg"
        style={{ marginLeft: 130 }}
        onClick={bookfunc}>
        {" "}
        Book{" "}
      </div>
    </>
  );
};

export default Cart;
