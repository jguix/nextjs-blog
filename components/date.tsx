import { parseISO, format } from 'date-fns';
import React, { FC } from 'react';

type OwnProps = {
  dateString: string;
};

type Props = OwnProps;

const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
