import { format, isValid } from "date-fns";

export default function(title, description, date, priority) {
  const getFormattedDate = (date) => {
    console.log(date);
    if (isValid(new Date(date))) {
      return format(date, 'dd/MMM/yyyy');
    }
    return ''
  }

  return {
    title,
    description,
    date,
    priority,
    getFormattedDate
  }
}