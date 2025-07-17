"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between md:border-none border border-primary-800">
      <div className="w-full overflow-x-auto ">
        <div className=" min-w-[320px] sm:min-w-full">
          <DayPicker
            className=" pt-8 px-4 place-items-center md:px-6 w-full text-sm"
            mode="range"
            onSelect={setRange}
            selected={displayRange}
            min={minBookingLength + 1}
            max={maxBookingLength}
            fromMonth={new Date()}
            fromDate={new Date()}
            toYear={new Date().getFullYear() + 5}
            captionLayout="dropdown"
            numberOfMonths={1}
            disabled={(curDate) =>
              isPast(curDate) ||
              bookedDates.some((date) => isSameDay(date, curDate))
            }
          />
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-2 justify-between px-6 py-3 bg-accent-500 text-primary-800 md:mt-0 mt-10">
        <div className="flex items-baseline md:gap-6 gap-4">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="lg:text-2xl text-lg">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="lg:text-2xl text-lg">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 lg:text-2xl text-lg">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="lg:text-lg text-sm font-bold uppercase">
                  Total
                </span>{" "}
                <span className="lg:text-2xl text-lg font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
