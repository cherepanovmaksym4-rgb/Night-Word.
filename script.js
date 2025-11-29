function showSection(id) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function startChat() {
  const chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += "<p>Поддержка: Привет! Чем могу помочь?</p>";
}

async function askAI() {
  const input = document.getElementById('aiInput').value;
  const responseBox = document.getElementById('aiResponse');

  const res = await fetch('/ask', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({question: input})
  });

  const data = await res.json();
  responseBox.innerHTML = `<p>${data.answer}</p>`;
}
