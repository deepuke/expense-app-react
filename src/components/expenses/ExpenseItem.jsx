import Card from "../UI/Card";
import "./ExpenseItem.css";
import PanelDate from "../PanelDate";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const updateTitle = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        <PanelDate date={props.date} />
        <div className="details">
          <div>
            <h2 className="title">{title}</h2>
          </div>
          <div className="amount">{props.amount}</div>
          <button onClick={updateTitle}>Update title</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
