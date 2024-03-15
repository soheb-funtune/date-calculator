import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {
  getYear,
  getMonth,
  addDays,
  differenceInYears,
  differenceInDays,
  differenceInWeeks,
  startOfYear,
  differenceInHours,
  startOfDay,
  getHours,
  getDate,
  differenceInMonths,
  subYears,
  subMonths,
  getDay,
  getDaysInMonth,
  formatDistance,
  formatDistanceToNow,
  intervalToDuration,
  subDays,
} from "date-fns";
import _ from "lodash";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";

const AgeCalculator = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log({ selectedDate });
  const years = _.range(1990, getYear(new Date()) + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Birthdate
  const birthdate = new Date(selectedDate);

  // Today's date
  const today = new Date();

  const year = differenceInYears(today, birthdate);
  const monthss = differenceInMonths(
    today,
    subYears(
      new Date(
        `${getYear(today)}-${getMonth(birthdate) + 1}-${getDate(birthdate)}`
      ),
      1
    )
  );
  const days = differenceInDays(
    today,
    // subMonths(
    new Date(
      `${getYear(today)}-${getMonth(today) + 1}-${getDate(birthdate) + 1}`
    )
    //   1
    // )
  );

  // months starts from 0 so whenever using month add + 1
  console.log(
    new Date(`${getYear(today)}-${getMonth(today)}-${getDate(today)}`),
    `${getYear(today)}-${getMonth(today)}-${getDate(today)}`
  );

  const monthsOld = differenceInMonths(new Date(), birthdate);
  const weeksOld = differenceInWeeks(new Date(), birthdate);
  const daysOld = differenceInDays(subDays(new Date(), 1), birthdate);
  const hoursOld = differenceInHours(subDays(new Date(), 1), birthdate);

  return (
    <>
      <h2>Select DOB</h2>
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        showIcon
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        // startDate={startDate} // Selected start date
        // endDate={endDate} // Selected End date
        // selectsRange
        // inline             // it will not close datepicker after selecting date
        // withPortal      // it will show DatePicker As PopUp
        // includeDates={[new Date(), addDays(new Date(), 1)]}    // It will show only Range of Dates
        // shouldCloseOnSelect={false} // Allow to open/close on Date-Select
        // dateFormat=  "dd/mm/yyyy" // we can show formatted output
      />

      <h2>{` ${year} YEAR, ${monthss} MONTH, ${days} DAY`} Old.</h2>
      <h2>{` ${monthsOld} Months Old`}.</h2>
      <h2>{` ${weeksOld} Weeks Old`}.</h2>
      <h2>{` ${daysOld} Days Old`}.</h2>
      <h2>{` ${hoursOld} Hours Old`}.</h2>
    </>
  );
};

export default AgeCalculator;
