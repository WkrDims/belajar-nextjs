'use client';

import { useState } from 'react';

export default function CrudPage() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    if (editingIndex !== null) {
      const updated = [...items];
      updated[editingIndex] = name;
      setItems(updated);
      setEditingIndex(null);
    } else {
      setItems([...items, name]);
    }

    setName('');
  };

  const handleEdit = (index) => {
    setName(items[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Halaman CRUD (App Router)</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button type="submit">{editingIndex !== null ? 'Update' : 'Tambah'}</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => handleEdit(index)}>Edit</button>{' '}
            <button onClick={() => handleDelete(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
