import { FC } from 'react';
import { parseISO, format } from 'date-fns';

interface ownProps {
  date: Date;
  includeYear?: boolean;
}

const FormattedDate: FC<ownProps> = (props: ownProps) => {
  const dateString = props.date.toISOString();
  const dateIso = parseISO(dateString);

  if (props.includeYear) {
    return (
      <time dateTime={dateString}>{format(dateIso, 'eeee d LLLL yyyy')}</time>
    );
  }

  return <time dateTime={dateString}>{format(dateIso, 'eeee d LLLL')}</time>;
};

export default FormattedDate;
