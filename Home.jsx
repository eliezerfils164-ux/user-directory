import { useEffect } from "react";
import { Link } from "react-router-dom";
const users = [
  { id: '1', name: 'Alice Nguyen', role: 'Instructor', bio: 'Loves React and coffee.' },
  { id: '2', name: 'Brian Okafor', role: 'Student', bio: 'Building his first SPA.' },
  { id: '3', name: 'Carla Mendes', role: 'Admin', bio: 'Keeps the academy running.' },
  { id: '4', name: 'David Kim', role: 'Student', bio: 'Converted from WordPress.' },
  { id: '5', name: 'Efe Eze', role: 'Instructor', bio: 'useReducer enthusiast.' },
];

function Home() {

  useEffect(() => {
    document.title = "User Directory";
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>👥 User Directory</h1>

      {users.map(user => (
        <div
          key={user.id}
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <h3 style={{ margin: 0 }}>{user.name}</h3>
            <p style={{ margin: 0, color: "gray" }}>{user.role}</p>
          </div>

          {/* Lien vers la page profil */}
          <Link
            to={`/profile/${user.id}`}
            style={{
              backgroundColor: "#1a1a2e",
              color: "white",
              padding: "8px 15px",
              borderRadius: "5px",
              textDecoration: "none"
            }}
          >
            Voir profil →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
