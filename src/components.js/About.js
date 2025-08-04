import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">About QuickQuill</h2>
      <p>
        <strong>QuickQuill</strong> is a powerful yet minimal note-taking
        application that allows users to manage their personal notes securely
        and efficiently. Designed with a clean UI and smooth user experience,
        this app helps you stay organized without distractions.
      </p>

      <h4 className="mt-4">🔐 Authentication</h4>
      <ul>
        <li>Secure user registration and login</li>
        <li>JWT-based authentication for protected routes</li>
        <li>Auto-redirect to login page if unauthorized</li>
      </ul>

      <h4 className="mt-4">📝 Note Features</h4>
      <ul>
        <li>Create, edit, delete, and tag your notes</li>
        <li>All notes are stored securely in the database</li>
        <li>Each note is timestamped with the creation date and time</li>
        <li>Search functionality to quickly filter notes by title or description</li>
      </ul>

      <h4 className="mt-4">📦 Tech Stack</h4>
      <ul>
        <li><strong>Frontend:</strong> React.js, Bootstrap 5</li>
        <li><strong>Backend:</strong> Node.js, Express.js, MongoDB (Mongoose)</li>
        <li><strong>Security:</strong> bcrypt for password hashing, JWT for secure access</li>
      </ul>

      <h4 className="mt-4">🧠 How It Works</h4>
      <ol>
        <li>User signs up or logs in to access their dashboard</li>
        <li>Notes are fetched using a secure token</li>
        <li>All operations (add, update, delete) are authorized using the token</li>
        <li>Notes can be edited or removed with real-time UI updates</li>
        <li>Notes are displayed along with the tag and creation time</li>
      </ol>

      <h4 className="mt-4">📱 Mobile Responsive</h4>
      <p>
        QuickQuill is fully responsive, allowing users to manage notes seamlessly across devices.
      </p>

      <h4 className="mt-4">💡 Future Enhancements</h4>
      <ul>
        <li>Note pinning and color customization</li>
        <li>Rich text support</li>
        <li>Cloud sync & backups</li>
        <li>User profile & settings page</li>
      </ul>

      <h4 className="mt-4">📬 Contact</h4>
      <p>
        For suggestions or contributions, feel free to reach out or raise an issue on the project repository.
      </p>
    </div>
  );
};

export default About;
