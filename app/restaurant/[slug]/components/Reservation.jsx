"use client";
import { useState } from "react";
import { costemers, times } from "../../../../data";
import DatePicker from "react-datepicker";
import useAvilabel from "../../../../hooks/useAvilabel";
import { CircularProgress } from "@mui/material";
import Link from "next/link";

const Reservation = ({ openTime, closeTime, slug }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { loading, data, error, getData } = useAvilabel();

  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState(2);
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  const restaurantTimesWindow = () => {
    const timsWindow = [];
    let isWhitheInWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWhitheInWindow = true;
      }
      if (isWhitheInWindow) {
        timsWindow.push(time);
      }
      if (time.time === closeTime) {
        isWhitheInWindow = false;
      }
    });
    return timsWindow;
  };

  const handelDay = (date) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setStartDate(date);
    }

    return setStartDate(null);
  };

  const handelRequest = () => {
    getData({
      slug,
      partySize,
      day,
      time,
    });
  };

  return (
    <div className="w-[80%] m-outo bg-white rounded px-3 py-2 shadow md:w-[100%]  md:m-4 dark:bg-slate-900">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-2 flex flex-col">
        <label htmlFor="">Party size </label>
        <select
          name=""
          className="py-2 border-b font-light dark:bg-slate-900"
          id=""
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
        >
          {costemers.map((costemer) => {
            return <option value={costemer.value}>{costemer.label}</option>;
          })}
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => handelDay(date)}
            className="py-3 border-b font-light text-reg w-28 dark:bg-slate-900"
            dateFormat="MMM d"
            wrapperClassName="w-[48%]"
          />
        </div>
        <div className="flex flex-col w-[48%] ml-5">
          <label htmlFor="">Time</label>
          <select
            name=""
            id=""
            className="py-2 border-b font-light  dark:bg-slate-900"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {restaurantTimesWindow().map((time) => (
              <option value={time.time}>{time.displayTime}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-2">
        <button
          className="bg-red-600 rounded w-full px-4 text-white font-bold h-14 dark:bg-red-900"
          onClick={handelRequest}
          disabled={loading}
        >
          {loading ? <CircularProgress color="inherit" /> : "Find a Time"}
        </button>
      </div>
      {data && data.length && (
        <div className="mt-4">
          <p className="text-reg">Select a Time</p>
          <div className="flex flex-wrap mt-2">
            {data.map((time) => {
              return time.avilable ? (
                <Link
                  key={time.time}
                  href={`reservation/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                  className="bg-red-600 cursor-pointer p-2 px-3 w-24 text-center text-white mb-3 rounded mr-3"
                >
                  <p className="text-sm font-bold">{`${
                    time.time.split(":")[0]
                  } : ${time.time.split(":")[1]}`}</p>
                </Link>
              ) : (
                <p className="bg-gray-300  p-2 w-24 text-center mb-3 rounded mr-3"></p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
