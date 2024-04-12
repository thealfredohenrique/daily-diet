import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Input } from "@components/Input";
import { formatDate, formatTime } from "@utils/date";
import { FieldWrapper } from "./styles";

interface DateTimeInputProps {
  datetime: Date;
  onChange: (selectedDateTime: Date) => void;
}

export function DateTimeInput({ datetime, onChange }: DateTimeInputProps) {
  const [date, setDate] = useState(formatDate(datetime));
  const [time, setTime] = useState(formatTime(datetime));
  const [isShowingDatePicker, setIsShowingDatePicker] = useState(false);
  const [isShowingTimePicker, setIsShowingTimePicker] = useState(false);

  function toggleDatePicker() {
    if (isShowingTimePicker) {
      toggleTimePicker();
    }

    setIsShowingDatePicker((value) => !value);
  }

  function toggleTimePicker() {
    if (isShowingDatePicker) {
      toggleDatePicker();
    }

    setIsShowingTimePicker((value) => !value);
  }

  function handleChangeDate(event: unknown, selectedDate?: Date) {
    if (selectedDate) {
      setDate(formatDate(selectedDate));
      onChange(selectedDate);
    }
  }

  function handleChangeTime(event: unknown, selectedTime?: Date) {
    if (selectedTime) {
      setTime(formatTime(selectedTime));
      onChange(selectedTime);
    }
  }

  return (
    <>
      <FieldWrapper>
        <Input
          caption="Data"
          value={date}
          editable={false}
          onPressOut={toggleDatePicker}
          style={{ flex: 1, flexGrow: 1 }}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Input
          caption="Hora"
          value={time}
          editable={false}
          onPressOut={toggleTimePicker}
          style={{ flex: 1, flexGrow: 1 }}
        />
      </FieldWrapper>

      {isShowingDatePicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          maximumDate={new Date()}
          value={datetime}
          onChange={handleChangeDate}
        />
      )}

      {isShowingTimePicker && (
        <DateTimePicker
          mode="time"
          display="spinner"
          maximumDate={new Date()}
          value={datetime}
          onChange={handleChangeTime}
        />
      )}
    </>
  );
}
