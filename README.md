# 📝 Sistema de Anotações - PWA

Um aplicativo web progressivo (PWA) para criação, gerenciamento e compartilhamento de anotações, com autenticação e banco de dados em nuvem via **Firebase**.  
Funciona online e offline, podendo ser instalado no desktop ou celular.

---

## 🚀 Funcionalidades
- 🔐 **Login e cadastro** com autenticação Firebase.
- 📄 **CRUD de anotações** (criar, ler, editar e excluir).
- 🌐 **Notas públicas** e 🔒 **notas privadas**.
- ✅ **Marcar como concluída** com observações.
- ⏰ **Lembretes** com notificações do navegador.
- 🔍 **Busca e filtros** por status e visibilidade.
- 📱 **PWA**: instalável e funcional offline via **Service Worker**.
- 🎨 Interface responsiva e moderna com **CSS customizado** e **Font Awesome**.

---

## 📂 Estrutura do Projeto
├── index.html # Estrutura HTML, CSS e JavaScript principal
├── manifest.json # Configuração PWA
├── service-worker.js # Cache e funcionamento offline
├── icon-192.png # Ícone PWA 192x192
├── icon-512.png # Ícone PWA 512x512


---

## 🛠 Tecnologias Utilizadas
- **HTML5** → Estrutura da interface.
- **CSS3** → Estilo, responsividade e animações.
- **JavaScript (ES6)** → Lógica do aplicativo.
- **Firebase Auth** → Login e registro de usuários.
- **Firebase Firestore** → Banco de dados em tempo real.
- **Manifest PWA** → Permite instalação como app.
- **Service Worker** → Cache e suporte offline.
- **Font Awesome** → Ícones vetoriais.
---

## ⚙ Configuração e Uso

1. **Clone o repositório**
git clone https://danielsantos-dev22.github.io/anota-ao-empresa/
cd sistema-anotacoes-pwa


2️⃣ Configure o Firebase
Acesse Firebase Console.
Crie um projeto.

Ative Authentication (método Email/Senha).

Ative Cloud Firestore.

Copie as credenciais para o index.html:

javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
  measurementId: "SEU_MEASUREMENT_ID"
};


3️⃣ Execute o projeto

npx serve .

Acesse http://localhost:3000

4️⃣ Instale como PWA
No navegador, clique em Instalar ou Adicionar à Tela Inicial..

📌 Observações
Notificações de lembrete precisam de permissão do usuário no navegador.

O modo offline depende do cache feito pelo Service Worker.


