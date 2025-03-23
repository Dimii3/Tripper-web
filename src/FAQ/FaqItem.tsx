import { useState } from "react";
import "./FaqItem.scss";
import { GoDotFill } from "react-icons/go";

type FaqItemT = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: FaqItemT) {
  const [activeItem, setActiveItem] = useState(false);

  const handleToggle = () => {
    setActiveItem((prev) => !prev);
  };
  return (
    <li
      className={`faq-list__item ${activeItem && "faq-list__item--expanded"}`}
    >
      <button onClick={handleToggle} className="faq-list__button">
        {question}
        <div className="faq-list__icon">
          <GoDotFill />
        </div>
      </button>
      <div className={`faq-list__answer`}>
        <p className="paragraphs-primary">{answer}</p>
      </div>
    </li>
  );
}
