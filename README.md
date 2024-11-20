# Voizer

**Voizer** is a cutting-edge web application that empowers users to manage and interact with AI voice agents seamlessly. Built with modern web technologies, Voizer offers an intuitive interface for voice agent management, customizable settings, and real-time interaction capabilities. 

---

## ✨ Features

- **📋 Agent Management Dashboard**: Easily view, sort, and manage all your AI voice agents in one place.
- **🎙️ Voice Agent Selection**: Choose and customize voice agents based on language, tone, and functionality.
- **💬 Test Call/Chat Interface**: Test your AI agents through simulated calls and chats.
- **⚙️ Customizable Settings**: Adjust preferences for notifications, dark mode, and agent configurations.
- **📅 Calendar Integration**: Schedule and manage AI agent activities with an integrated calendar.
- **🔍 Search Functionality**: Quickly find agents and settings with a powerful search tool.
- **🌐 Multi-language Support**: Engage with agents in various languages to meet global needs.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **API Integration**: [Retell SDK](https://retell.ai/)
- **State Management**: [React Hooks](https://react.dev/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) v20.13 or later
- npm or yarn package manager

---

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TheUzair/VoxAI.git
   cd voizer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:
   ```bash
   cp .env.example .env.local
   ```

   Add your Retell API key in `.env.local`:
   ```env
   RETELL_API_KEY=your_api_key_here
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

---

## 📂 Project Structure

```
voizer/
├── app/
│   ├── api/           # API routes for agents and other data
│   ├── components/    # Reusable UI components
│   │   ├── AgentTable.js
│   │   ├── CalendarSidebar.js
│   │   ├── EditableNavbar.js
│   │   ├── HashtagSidebar.js
│   │   ├── IconSidebar.js
│   │   ├── PromptPage.js
│   │   ├── SettingsSidebar.js
│   │   ├── Sidebar.js
│   │   ├── TestSection.js
│   │   └── VoiceSidebar.js
│   ├── layout.js     # Layout file for consistent structure
│   └── page.js       # Main entry point for the application
├── lib/
│   └── utils.js       # Utility functions and helpers
├── public/            # Static assets
└── styles/
    └── globals.css    # Global styles
```

---

## 🖥️ Key Components

### **AgentTable**
Displays a paginated list of agents with sorting and filtering capabilities. 

### **VoiceSidebar**
Provides an interface for selecting voice agents, categorized by language and features search functionality.

### **TestSection**
Enables users to test voice agents through live calls or chat simulations.

### **SettingsSidebar**
Allows configuration of preferences such as notifications, dark mode, and account settings.

---

## 🌐 API Integration

The application integrates with the Retell SDK for seamless voice agent management:

```typescript
import { Retell } from "retell";

const client = new Retell({ apiKey: 'your_api_key_here' });
```

For detailed API documentation, refer to the [Retell SDK documentation](https://retell.ai/docs).

---

## 🎨 Styling

Voizer is styled with **Tailwind CSS** and **shadcn/ui** components, ensuring a modern and responsive design. 

### Custom Theme Configuration

Tailwind's configuration file (`tailwind.config.js`):
```javascript
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,js}", "components/**/*.{ts,js}"],
  theme: {
    extend: {
      colors: {
        // Define custom colors here
      },
    },
  },
};
```

---

## 📜 Available Scripts

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

### Linting
```bash
npm run lint
```

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork the repository**.
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[shadcn/ui](https://ui.shadcn.dev/)**: For the elegant UI components.
- **[Retell](https://retell.ai/)**: For the powerful voice agent SDK.
- **[Next.js](https://nextjs.org/)**: For the robust React framework.
- **[Tailwind CSS](https://tailwindcss.com/)**: For the modern styling.

---

## 📌 Roadmap

- ✅ Multi-language support
- ✅ Voice agent analytics
- 🔄 Advanced scheduling features
- 🔄 Team collaboration tools
- 🔄 Custom voice training
