import { useEffect, useState } from "react";
import "./UserTable.css";

interface User {
  name: string;
  age: number;
}

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 500);
  });

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody data-testid="users">
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="no-users">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showMessage && (
        <div
          data-testid="welcome"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(83, 197, 68, 0.8)",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            transition: "opacity 0.3s ease-in-out",
            opacity: 1,
            animation: "fadeIn 0.5s ease-in-out",
            width: "400px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            This is a message
          </p>
          <button
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              color: "#333",
              border: "none",
              padding: "5px 10px",
              borderRadius: "3px",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={() => setShowMessage(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UserTable;
