Autheur: NAMA NKOA GUERSHOM
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const users = [
  { id: '1', name: 'Alice Nguyen', role: 'Instructor', bio: 'Loves React and coffee.' },
  { id: '2', name: 'Brian Okafor', role: 'Student', bio: 'Building his first SPA.' },
  { id: '3', name: 'Carla Mendes', role: 'Admin', bio: 'Keeps the academy running.' },
  { id: '4', name: 'David Kim', role: 'Student', bio: 'Converted from WordPress.' },
  { id: '5', name: 'Efe Eze', role: 'Instructor', bio: 'useReducer enthusiast.' },
];

function Home() {

  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "User Directory";
  }, []);

  // Filtrer les utilisateurs selon la recherche
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>👥 User Directory</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher un utilisateur..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />

      {/* Message si aucun résultat */}
      {filteredUsers.length === 0 && (
        <p style={{ textAlign: "center", color: "gray" }}>
          Aucun utilisateur trouvé 😕
        </p>
      )}

      {filteredUsers.map(user => (
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
