import Button from "../ui/button";
import classes from "./events-search.module.css";
import { useRef } from "react";

function EventsSearch(props: any) {
  const yearInputRef = useRef(null);
  const monthInputRef = useRef(null);
  function submitHandler(event: any) {
    event.preventDefault();

    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          {/*@ts-ignore*/}
          <select name="" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          {/*@ts-ignore*/}
          <select name="month" id="month" ref={monthInputRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="8">July</option>
            <option value="9">Aug</option>
            <option value="10">Sep</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
