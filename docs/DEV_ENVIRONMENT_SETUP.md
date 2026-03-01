# Smart Tour DavOr — Dev Environment Setup

This guide covers only the environment setup required to develop and run the project. No application code is covered here.

---

## Prerequisites

### 1. Node.js (includes npm)

Node.js is required to run Next.js and manage dependencies.

**Install:**

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** (Long Term Support) version
3. Run the installer
4. Accept the default options
5. Ensure **"Add to PATH"** is checked
6. Finish the installation

**Verify:**

```powershell
node -v
npm -v
```

You should see version numbers (e.g. `v20.x.x` and `10.x.x`).

---

### 2. Git (optional)

Useful for version control and cloning the project.

**Install:**

1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download and run the installer
3. Use default options
4. Finish the installation

**Verify:**

```powershell
git --version
```

---

### 3. Code Editor

Recommended: **VS Code** or **Cursor**

- [VS Code](https://code.visualstudio.com/)
- [Cursor](https://cursor.sh/)

Optional extensions:

- ESLint
- Tailwind CSS IntelliSense
- Prettier

---

## Project Setup (after environment is ready)

Once Node.js is installed:

1. Open a terminal (PowerShell, Command Prompt, or integrated terminal in your editor)
2. Navigate to the project folder:

   ```powershell
   cd "C:\Users\lagan\Documents\Code Projects\SmartTour-DavOr"
   ```

3. Install dependencies (frontend and backend):

   ```powershell
   npm run install:all
   ```

   Or install separately:

   ```powershell
   npm install --prefix frontend
   npm install --prefix backend
   ```

4. Start the development servers:

   **Frontend** (Next.js — port 3000):

   ```powershell
   npm run dev:frontend
   ```

   **Backend** (Express — port 4000):

   ```powershell
   npm run dev:backend
   ```

5. Open [http://localhost:3000](http://localhost:3000) for the frontend, [http://localhost:4000/health](http://localhost:4000/health) for the backend

---

## Troubleshooting

### "npm is not recognized"

- Node.js is not installed, or it is not on your PATH
- Reinstall Node.js and ensure "Add to PATH" is enabled
- Restart the terminal (or the whole editor) after installing

### "EACCES" or permission errors

- Run the terminal as Administrator, or
- Install Node.js for your user only (not system-wide)

### Port 3000 or 4000 already in use

- Stop the other process using the port, or
- For frontend: `npm run dev:frontend -- -p 3001`
