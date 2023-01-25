import dayjs from "dayjs";
import { useState } from "react";
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";

export function CalendarStep() { 
   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format("dddd") : null;
  const monthDay = selectedDate ? dayjs(selectedDate).format("DD") : null;
  const month = selectedDate ? dayjs(selectedDate).format("MMMM") : null;

  return (
    <Container isTimerPickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate}/>

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay}, <span>{monthDay} de <span>{month}</span></span>
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>10:00h</TimePickerItem>
            <TimePickerItem disabled>11:00h</TimePickerItem>
            <TimePickerItem disabled>12:00h</TimePickerItem>
            <TimePickerItem disabled>13:00h</TimePickerItem>
            <TimePickerItem>14:00h</TimePickerItem>
            <TimePickerItem>15:00h</TimePickerItem>
            <TimePickerItem>16:00h</TimePickerItem>
            <TimePickerItem>17:00h</TimePickerItem>
            <TimePickerItem>18:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}
