/**
 * Button Calendar icon
 */
import IconCalendar from "./IconCalendar";


const DatePicker = ({show, css, text, text_acc}) => {
    if (!show) return null;

    const classes = ["ocButton", css].join(" ");

	return (
        <div className="date-picker-container">
            <button type="button" className={classes}>
                <IconCalendar title={text}  />
            </button>
            <input className="ocDatePicker" aria-label={text_acc} type="date" hidden />
        </div>
	);
};

export default DatePicker;
