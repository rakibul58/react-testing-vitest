/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center" as React.CSSProperties["textAlign"],
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    boxSizing: "border-box" as const,
  },
  inputError: {
    border: "1px solid #ff3860",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  checkbox: {
    marginRight: "10px",
  },
  error: {
    color: "#ff3860",
    fontSize: "14px",
    marginTop: "5px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4a69bd",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  buttonHover: {
    backgroundColor: "#3c55a5",
  },
  usersList: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  userItem: {
    padding: "15px 0",
    borderBottom: "1px solid #eee",
  },
  userName: {
    margin: "0 0 5px 0",
    fontWeight: "bold",
  },
  userEmail: {
    margin: "0",
    color: "#666",
    fontSize: "14px",
  },
  noUsers: {
    color: "#999",
    fontStyle: "italic",
  },
};

export default function Users() {
  const [users, setUsers] = useState<{ id: number; name: string; email: string; acceptedTerms?: boolean }[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    acceptedTerms: false,
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; acceptedTerms?: string }>({});
  const [buttonHover, setButtonHover] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = {...formData, id: users.length + 1};
    setUsers([...users, newData])
    // Reset form
    setFormData({
      name: "",
      email: "",
      acceptedTerms: false,
    });
    setErrors({});
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Registration</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              ...styles.input,
              ...(errors.name ? styles.inputError : {}),
            }}
            placeholder="Enter your name"
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              ...styles.input,
              ...(errors.email ? styles.inputError : {}),
            }}
            placeholder="Enter your email"
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              style={styles.checkbox}
            />
            <span>I accept the terms and conditions</span>
          </label>
          {errors.acceptedTerms && (
            <p style={styles.error}>{errors.acceptedTerms}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(buttonHover ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Submit
        </button>
      </form>

      <div style={styles.usersList}>
        <h2 style={styles.title}>Registered Users</h2>

        {users.length === 0 ? (
          <p style={styles.noUsers}>No users registered yet.</p>
        ) : (
          <div>
            {users.map((user) => (
              <div key={user.id} style={styles.userItem}>
                <p style={styles.userName}>{user.name}</p>
                <p style={styles.userEmail}>{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
