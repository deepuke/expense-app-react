const PanelDate = (props) => {
  const month = new Date(props.date).toLocaleDateString("en-US", {
    month: "short",
  });
  const year = new Date(props.date).getFullYear();
  const day = new Date(props.date).toLocaleDateString("en-US", {
    day: "2-digit",
  });
  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
};

export default PanelDate;
