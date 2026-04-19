// IMPORTANT: Change this to your Render URL after Step 8
const API_URL = "https://notes-app-backend-2mjg.onrender.com";

async function fetchNotes() {
    const res = await fetch(`${API_URL}/notes`);
    const notes = await res.json();
    const list = document.getElementById('notesList');
    list.innerHTML = '';
    notes.forEach(note => {
        list.innerHTML += `
            <div class="note-card">
                <span>${note.content}</span>
                <button class="delete-btn" onclick="deleteNote(${note.id})">Delete</button>
            </div>
        `;
    });
}

async function addNote() {
    const content = document.getElementById('noteInput').value;
    if(!content) return;
    await fetch(`${API_URL}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    });
    document.getElementById('noteInput').value = '';
    fetchNotes();
}

async function deleteNote(id) {
    await fetch(`${API_URL}/notes/${id}`, { method: 'DELETE' });
    fetchNotes();
}

fetchNotes(); // Load notes on startup