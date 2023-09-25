"use client";
import { useContext, useEffect, useState } from "react";
import useBooking from "../../../../hooks/useBooking";
import { CircularProgress } from "@mui/material";
import { AuthantcationContaxt } from "../../../context/AuthContext";
import Link from "next/link";

//import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";<KeyboardReturnIcon />

const Form = ({ slug, searchParams }) => {
  const { data } = useContext(AuthantcationContaxt);
  //console.log("🚀 ~ file: Form.jsx:12 ~ Form ~ data:", data);

  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false);
  const [dataa, setdata] = useState({
    bookerEmail: data ? data.email : "",
    bookerPhone: data ? data.phone : "",
    bookerFirstName: data ? data.first_name : "",
    bookerLastName: data ? data.last_name : "",
    bookerOccasion: "",
    bookerRequest: "",
  });
  const { loading, error, creatNewBooking } = useBooking();

  const handelData = (e) => {
    setdata({
      ...dataa,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      dataa.bookerFirstName &&
      dataa.bookerLastName &&
      dataa.bookerEmail &&
      dataa.bookerPhone
    ) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [dataa]);

  const handelBook = async () => {
    const booking = await creatNewBooking({
      slug,
      partySize: searchParams.partySize,
      day: searchParams.date.split("T")[0],
      time: searchParams.date.split("T")[1],
      bookerEmail: dataa.bookerEmail,
      bookerPhone: dataa.bookerPhone,
      bookerFirstName: dataa.bookerFirstName,
      bookerLastName: dataa.bookerLastName,
      bookerOccasion: dataa.bookerOccasion,
      bookerRequest: dataa.bookerRequest,
      setSuccess,
    });
  };

  const times = searchParams.date.split("T")[1];
  const hour = times.split(":")[0];
  const minutes = times.split(":")[1];

  return (
    <div className="mt-10 flex flex-col justify-between w-[100%] md:w-[70%] md:grid-cols-2 md:mt-10 md:ml-0">
      {success ? (
        <div className="mt-10 w-[660px]  uppercase text-slate-500 dark:text-white">
          <h1 className="text-2xl leading-loose">You successfully booked in</h1>
          <p className="text-2xl leading-loose">
            {searchParams.date.split("T")[0]} at {`${hour} : ${minutes}`}
          </p>
          <h3 className="text-2xl leading-loose">we wish you a nice diner</h3>
          <Link href={"/"} className="text-2xl ">
            return
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1  gap-4 md:grid-cols-2">
            <input
              type="text"
              className="border rounded p-3 w-[100%] mb-4"
              placeholder="First name"
              value={dataa.bookerFirstName}
              onChange={handelData}
              name="bookerFirstName"
            />
            <input
              type="text"
              className="border rounded p-3 w-[100%]  mb-4"
              placeholder="Last name"
              value={dataa.bookerLastName}
              onChange={handelData}
              name="bookerLastName"
            />
            <input
              type="text"
              className="border rounded p-3 w-[100%]  mb-4"
              placeholder="Phone number"
              value={dataa.bookerPhone}
              onChange={handelData}
              name="bookerPhone"
            />
            <input
              type="text"
              className="border rounded p-3 w-[100%]  mb-4"
              placeholder="Email"
              value={dataa.bookerEmail}
              onChange={handelData}
              name="bookerEmail"
            />
            <input
              type="text"
              className="border rounded p-3 w-[100%]  mb-4"
              placeholder="Occasion (optional)"
              value={dataa.bookerOccasion}
              onChange={handelData}
              name="bookerOccasion"
            />
            <input
              type="text"
              className="border rounded p-3 w-[100%]   mb-4"
              placeholder="Requests (optional)"
              value={dataa.bookerRequest}
              onChange={handelData}
              name="bookerRequest"
            />
          </div>
          <div className="w-[100%] ">
            <button
              className="bg-red-600 p-3 text-white font-bold rounded disabled:bg-gray-300 dark:bg-red-900 w-[100%]  md:w-full"
              disabled={disabled || loading}
              onClick={handelBook}
            >
              {loading ? (
                <CircularProgress color="inherit" />
              ) : (
                "Complete reservation"
              )}
            </button>
            <p className="mt-4 text-sm">
              By clicking “Complete reservation” you agree to the OpenTable
              Terms of Use and Privacy Policy. Standard text message rates may
              apply. You may opt out of receiving text messages at any time.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
