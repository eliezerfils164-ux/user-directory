import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const users = [
  { id: '1', name: 'Alice Nguyen', role: 'Instructor', bio: 'Loves React and coffee.' },
  { id: '2', name: 'Brian Okafor', role: 'Student', bio: 'Building his first SPA.' },
  { id: '3', name: 'Carla Mendes', role: 'Admin', bio: 'Keeps the academy running.' },
  { id: '4', name: 'David Kim', role: 'Student', bio: 'Converted from WordPress.' },
  { id: '5', name: 'Efe Eze', role: 'Instructor', bio: 'useReducer enthusiast.' },
];

function Profile() {

  // Lire l'id depuis l'URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Trouver l'utilisateur correspondant
  const user = users.find(u => u.id === id);

  useEffect(() => {
    document.title = user ? `Profil - ${user.name}` : "Utilisateur introuvable";
  }, [user]);

  // Si l'utilisateur n'existe pas
  if (!user) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>❌ Utilisateur introuvable !</h2>
        <button onClick={() => navigate(-1)}>← Retour</button>
      </div>
    );
  }

  return (
    <div style={{
      padding: "20px",
      maxWidth: "500px",
      margin: "0 auto"
    }}>
      <h1>👤 Profil</h1>

      <div style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <h2>{user.name}</h2>
        <p><strong>Rôle :</strong> {user.role}</p>
        <p><strong>Bio :</strong> {user.bio}</p>
        <p><strong>ID :</strong> /profile/{id}</p>
      </div>

      {/* Bouton retour avec useNavigate */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#1a1a2e",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        ← Retour
      </button>
    </div>
  );
}

export default Profile;
