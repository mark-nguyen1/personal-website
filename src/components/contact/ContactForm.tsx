import { useState, ChangeEvent, useEffect } from "react";

import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("meojodeb");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email sent successfully", {
        duration: 4000,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      reset();
    }
  }, [state.succeeded]);
  console.log(state.succeeded);

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <p>
          Hi Mark!
          <br />
          My name is{" "}
          <input
            id="firstName"
            name="firstName"
            placeholder="first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <ValidationError
            prefix="FirstName"
            field="firstName"
            errors={state.errors}
          />
          <input
            id="lastName"
            name="lastName"
            placeholder="last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <ValidationError
            prefix="LastName"
            field="lastName"
            errors={state.errors}
          />
          and I am reaching out from
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            style={{ width: "350px" }}
            onChange={handleChange}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          to inquire you about:{" "}
        </p>
        <textarea
          id="message"
          name="message"
          placeholder="Message here..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <label htmlFor="email"></label>

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? <ThreeDots color="lightblue" /> : "Submit"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;