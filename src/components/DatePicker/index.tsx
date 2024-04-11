import { useState } from "react";
import type { TextInputProps } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Input } from "@components/Input";
import { formatDate } from "@utils/date";

interface DatePickerProps extends TextInputProps {
  caption: string;
}

export function DatePicker({ caption, ...rest }: DatePickerProps) {
  const [date, setDate] = useState(new Date());
  const [isShowing, setIsShowing] = useState(false);
  const [value, setValue] = useState(formatDate(date));

  function toggleDatePicker() {
    setIsShowing((state) => !state);
  }

  function handleChange(event: unknown, selectedDate?: Date) {
    if (selectedDate) {
      setValue(formatDate(selectedDate));
      setDate(selectedDate);
      toggleDatePicker();
    }
  }

  return (
    <>
      <Input
        caption={caption}
        editable={false}
        value={value}
        onPressIn={toggleDatePicker}
        {...rest}
      />

      {isShowing && (
        <DateTimePicker
          display="inline"
          maximumDate={new Date()}
          value={date}
          onChange={handleChange}
        />
      )}
    </>
  );
}
