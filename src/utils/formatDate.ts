const formatDate = (date: Date): string => {
  if (!date) return '';
  const s = date.toString();
  try {
    return new Intl.DateTimeFormat('en-GB').format(new Date(s));
  } catch (err) { console.log(err.message); }
  return s;
}

export default formatDate;
