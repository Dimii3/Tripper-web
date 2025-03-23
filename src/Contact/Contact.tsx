import { useState } from "react";
import Heading from "../components/Heading";
import Input from "./Input";
import { Element } from "react-scroll";
import "./Contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Name must be between 3 and 50 characters long.";
      isValid = false;
    }

    if (
      !formData.email.includes("@") ||
      formData.email.length < 5 ||
      formData.email.length > 100
    ) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (formData.message.length < 10 || formData.message.length > 500) {
      newErrors.message = "Message must be between 10 and 500 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onChangeName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const onChangeEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const onChangeMessage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, message: e.target.value });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <Element name="contact">
      <section className="contact container">
        <Heading
          header="Let’s Plan Your Next Adventure!"
          headerClasses="contact__heading"
          paragraph="Got questions? Ready to embark on the journey of a lifetime? Reach out to us—we’re here to help!"
          paragraphClasses="paragraph-contact"
        ></Heading>
        <div className="contact-container">
          <div className="contact__image">
            <img
              src="/img-contact.png"
              alt="Forest on the hill"
              loading="lazy"
            />
          </div>
          <form onSubmit={onSubmitForm} className="contact-form">
            <Input
              typeInput="text"
              idInput="name"
              forInput="name"
              nameInput="name"
              value={formData.name}
              onChange={onChangeName}
              error={errors.name}
            >
              Name
            </Input>
            <Input
              typeInput="email"
              idInput="email"
              forInput="email"
              nameInput="email"
              value={formData.email}
              onChange={onChangeEmail}
              error={errors.email}
            >
              Email
            </Input>
            <Input
              idInput="message"
              forInput="message"
              nameInput="message"
              mode="textarea"
              value={formData.message}
              onChange={onChangeMessage}
              error={errors.message}
            >
              Message
            </Input>
            <button className="btn contact-form__btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Element>
  );
}
