import { useState, useCallback } from "react";
import axios from "axios";
import "./contactForm.css";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const validateEmail = useCallback((email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }, []);

  const sendMail = async () => {
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Please enter your email");
      return;
    } else if (!validateEmail(email)) {
      setError("Wrong format of email");
      return;
    } else if (!message) {
      setError("You must write something...");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://api.algobook.info/v1/mail/send", {
        recipient: `your-trusted-mail@gmail.com`,
        subject: `Message from ${email}`,
        text: message,
      });

      if (response.data.error) {
        setError(response.data.error);
      } else if (response.data.status === "SUCCESS") {
        setEmail("");
        setMessage("");
        setSuccess(true);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mail">
      <h2>Contact us</h2>
      <div className="wrapper">
  <div className="areaContainer">
    <input
      value={email}
      type="email"
      className="input"
      onChange={(ev) => setEmail(ev.target.value)}
      placeholder="Your email"
    />
    <textarea
      value={message}
      className="area"
      onChange={(ev) => setMessage(ev.target.value)}
      placeholder="What's on your mind?"
    />
    <button
      onClick={sendMail}
      style={{
        backgroundColor: "#104b72",
        color: "white",
        padding: "0.75rem 1.5rem",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px",
        marginTop: "1rem",
      }}
      disabled={isLoading}
    >
      {isLoading ? "Sending..." : "Send"}
    </button>
  </div>
</div>

      {success ? (
        <span className="success">Thanks for contacting us!</span>
      ) : error ? (
        <span className="error">{error}</span>
      ) : null}
    </div>
  );
};
