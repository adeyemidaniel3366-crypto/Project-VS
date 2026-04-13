# VS Code Web Clone

A fully functional web-based code editor that replicates the look and feel of Visual Studio Code, built entirely with web technologies.

![VS Code Clone](https://img.shields.io/badge/VS%20Code-Clone-blue?style=for-the-badge&logo=visual-studio-code)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Monaco Editor](https://img.shields.io/badge/Monaco-Editor-1E1E1E?style=for-the-badge&logo=visual-studio-code)

## 🚀 Features

### Core Editor Features
- **Monaco Editor Integration** - Full-featured code editor with syntax highlighting
- **Multi-language Support** - JavaScript, HTML, CSS, TypeScript, Python, and more
- **IntelliSense** - Smart code completion and suggestions
- **Minimap** - Code overview and navigation
- **Split Editor** - Vertical and horizontal editor splitting
- **Find & Replace** - Advanced search functionality
- **Code Formatting** - Automatic code formatting

### VS Code-like Interface
- **Activity Bar** - Quick access to different panels
- **Sidebar Panels**:
  - Explorer (File tree)
  - Search (Find in files)
  - Source Control (Git integration mockup)
  - Extensions (Extension marketplace mockup)
  - Outline (Document symbols)
  - Settings (Configuration panel)
- **Bottom Panel** - Problems, Output, Debug Console, Terminal, Timeline, Comments, Breakpoints
- **Status Bar** - File information, cursor position, language mode
- **Title Bar** - Menu items and window title
- **Breadcrumbs** - File path navigation

### Advanced Features
- **Command Palette** - Quick command access (Ctrl+Shift+P)
- **Keyboard Shortcuts** - Full VS Code shortcut support
- **Zen Mode** - Distraction-free coding (Ctrl+B)
- **Theme Picker** - Color theme switching
- **Terminal Simulation** - Built-in command line interface
- **File Management** - Create, edit, save files
- **Context Menus** - Right-click functionality
- **Notifications** - Toast-style notifications
- **Responsive Design** - Works on different screen sizes

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Core functionality and interactivity

### Key Libraries & Tools
- **[Monaco Editor](https://microsoft.github.io/monaco-editor/)** - The same editor that powers VS Code
- **[Font Awesome](https://fontawesome.com/)** - Icons throughout the interface
- **[VS Code Codicons](https://microsoft.github.io/vscode-codicons/)** - Official VS Code icons
- **[Fira Code](https://github.com/tonsky/FiraCode)** - Monospace font with ligatures

### Development Tools
- **Node.js** - JavaScript runtime for the development server
- **Visual Studio Code** - The actual VS Code used for development
- **Chrome DevTools** - Debugging and testing
- **Git** - Version control

## 📁 Project Structure

```
vscode-clone/
├── index.html          # Main HTML file
├── style.css           # CSS styles and themes
├── script.js           # JavaScript functionality
├── server.js           # Node.js development server
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher) - For running the development server
- **Modern Web Browser** - Chrome, Firefox, Safari, or Edge

### Installation & Setup

1. **Clone or Download** the project files to your local machine

2. **Navigate to the project directory**
   ```bash
   cd path/to/vscode-clone
   ```

3. **Start the development server**
   ```bash
   node server.js
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

5. **Start coding!** The VS Code clone will load with a welcome screen

## 🎯 How It Was Built

### Development Process

1. **Planning & Design**
   - Analyzed VS Code's interface and functionality
   - Created wireframes and component breakdown
   - Identified key features to implement

2. **HTML Structure**
   - Built semantic HTML5 structure
   - Implemented VS Code's layout system (activity bar, sidebar, editor, panels)
   - Added accessibility features

3. **CSS Styling**
   - Used CSS custom properties (variables) for theming
   - Implemented VS Code's Dark Modern theme
   - Created responsive layouts with CSS Grid and Flexbox
   - Added smooth animations and transitions

4. **JavaScript Functionality**
   - Integrated Monaco Editor for code editing
   - Built file system simulation with localStorage
   - Implemented panel switching and state management
   - Added keyboard shortcuts and command palette
   - Created context menus and drag-and-drop functionality

5. **Advanced Features**
   - Added split editor functionality
   - Implemented search and replace
   - Built terminal simulation
   - Created extension and settings panels

### Key Implementation Details

#### Monaco Editor Integration
```javascript
require(['vs/editor/editor.main'], function(){
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: '',
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: true },
        // ... many more options
    });
});
```

#### File System Simulation
- Uses a JavaScript object to represent the file tree
- Persists changes to localStorage
- Supports nested folders and multiple file types

#### Panel Management
- Dynamic panel switching with CSS classes
- State management for active panels
- Smooth transitions between different views

#### Keyboard Shortcuts
- Global event listeners for key combinations
- VS Code-standard shortcuts (Ctrl+P, Ctrl+Shift+P, etc.)
- Context-aware command execution

## 🎨 Customization

### Changing Themes
The editor supports multiple themes. To add new themes:

1. Define CSS custom properties for the new theme
2. Update the theme picker in `script.js`
3. Apply the theme class to the body element

### Adding New Languages
To support additional programming languages:

1. Register language support in Monaco Editor
2. Add file extension mappings
3. Update syntax highlighting rules

### Extending Functionality
The codebase is modular and extensible. Key areas for extension:

- **New Panels**: Add to the activity bar and sidebar
- **Commands**: Extend the command palette
- **File Types**: Add support for new file formats
- **Integrations**: Add API connections for real services

## 🔧 Configuration

### Editor Settings
Configure Monaco Editor options in `script.js`:

```javascript
editor = monaco.editor.create(element, {
    fontSize: 14,
    tabSize: 4,
    wordWrap: 'on',
    // ... other options
});
```

### Keyboard Shortcuts
Modify shortcuts in the `initKeyboardShortcuts()` function:

```javascript
case 'p':
    if (e.shiftKey) {
        e.preventDefault();
        showCommandPalette();
    }
    break;
```

## 🐛 Known Limitations

- **Browser-based**: Limited by browser security restrictions
- **No Real File System**: Uses localStorage simulation
- **No Native Integrations**: Cannot access system files or runtimes
- **Memory Constraints**: Large files may impact performance

## 🤝 Contributing

This project demonstrates web development techniques and VS Code's architecture. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational and demonstration purposes. It is not affiliated with Microsoft or Visual Studio Code.

## 🙏 Acknowledgments

- **Microsoft** - For creating Monaco Editor and VS Code
- **Open Source Community** - For the amazing libraries and tools
- **Web Standards** - For enabling rich web applications

## 📞 Support

If you have questions about the implementation or need help running the project:

- Check the browser console for errors
- Ensure Node.js is installed and the server is running
- Try refreshing the page or clearing localStorage

---

**Built with ❤️ using modern web technologies**

*This VS Code clone demonstrates the power of web technologies and serves as a learning resource for building complex web applications.*
