import { Element } from "react-scroll";
import Heading from "../components/Heading";
import { questions } from "../constants";

import "./FAQ.scss";
import FaqItem from "./FaqItem";

export default function FAQ() {
  return (
    <Element name="faq" className="container">
      <section className="faq">
        <ul className="faq-list">
          {questions.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </ul>
        <div className="faq-heading">
          <Heading
            header="FAQ"
            headerClasses="mb-5"
            paragraphClasses="mb-5"
            paragraph="Planning an expedition can bring a lot of questions—don’t worry, we’ve
          got you covered! Below are some of the most common inquiries from our
          adventurers."
          ></Heading>
          <h3 className="faq-heading__info">
            Still have questions? Contact us at
            <br />
            contact@tripper.com – we’re happy to help
          </h3>
        </div>
      </section>
    </Element>
  );
}
