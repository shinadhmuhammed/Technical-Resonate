import { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadContacts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setContacts(data);
    };

    loadContacts();
  }, []);

  const filteredContacts = contacts.filter((user) => {
    const q = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q) ||
      user.phone.toLowerCase().includes(q) ||
      user.company.name.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <header className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-wide">
          Contacts Directory
        </h1>
        <p className="text-gray-700 mt-2">
          Browse through your list of contacts
        </p>
      </header>

      <div className="max-w-6xl mx-auto mb-8">
        <input
          type="text"
          placeholder="🔍 Search contacts by name, email, phone, or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-white border border-gray-300 
                     focus:ring-2 focus:ring-blue-500 outline-none shadow"
        />
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredContacts.map((user) => (
          <ContactCard key={user.id} user={user} />
        ))}

        {filteredContacts.length === 0 && (
          <p className="col-span-full text-center text-xl text-gray-500">
            No contacts found.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
