import React, { useState } from "react";
import { Calendar } from "react-calendar";

const Mealcalendar = (): JSX.Element => {
    const [value, onChange] = useState(new Date());

    return(
        <div>
            <Calendar onChange={onChange} value={value} />
            <div>
                {value.toISOString()}
            </div>
        </div>
    )
}

export default Mealcalendar;