import React, { useState } from "react";
import { countries } from "./CountriesData";

const Form = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !email ||
      !firstName ||
      !lastName ||
      !country ||
      !password ||
      !confirmPassword
    ) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Parollar mos kelmayapti!");
      return;
    }

    setSubmitted(true);
    alert("Formani muvaffaqiyatli yubordingiz!");
    console.log({
      email,
      firstName,
      lastName,
      country,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Ism</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Familiya</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Mamlakat</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          {countries.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Parol</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Parolni tasdiqlash</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
    </form>
  );
};

export default Form;
