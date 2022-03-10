import React from 'react';
import moment from 'moment';

const Time = ({ update }) => (
  <div className="text-right py-2 mx-4 mb-4 border-b">{moment(update).fromNow()}</div>
);

export default Time;
