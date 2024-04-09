import { useState, useEffect } from 'react';

export default function CreateDate() {
  const [date, setDate] = useState(null);

  useEffect(() => setDate(new Date()), []);

  return date;
}
