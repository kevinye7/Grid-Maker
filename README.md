# Grid Maker

A collaborative grid maker application that allows users to create, customize, and color grids dynamically. This project features two distinct implementations with unique modern designs.

### 🌐 Live Demo
[View Live Project](https://kevinye7.github.io/Grid-Maker/index.html)

---

## Features

### Core Functionality
- **Dynamic Grid Creation**: Add and remove rows and columns
- **Color Selection**: Choose from Red, Blue, Green, and Yellow
- **Fill Operations**: Fill individual cells, all uncolored cells, or entire grid
- **Clear Function**: Reset the grid to start fresh

### Two Unique Implementations

#### 🌊 David's Grid
- **Dark Theme** with teal cyan accents
- **Sidebar Layout** with fixed left navigation
- **Modern Dark UI** with transparent grid cells
- Grid cells start empty and can be colored on click

#### 🔷 Kevin's Grid  
- **Light Theme** with blue accents
- **Top Toolbar Layout** with horizontal controls
- **Clean Minimalist Design** with dotted pattern background
- Centered grid with subtle shadows

---

## Project Structure

```
Grid-Maker/
├── index.html              # Main landing page
├── david.html              # David's grid implementation
├── kevin.html              # Kevin's grid implementation
├── styles.css              # Base styles
├── index_styles.css        # Landing page styles
├── david_styles.css        # David's page styles
├── kevin_styles.css        # Kevin's page styles
├── grid_script.js          # Shared grid functionality
├── navigation.js           # Navigation functions
└── README.md
```

---

## Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Modern styling with custom layouts
- **JavaScript**: Dynamic grid manipulation and interactivity
- **GitHub Pages**: Deployment and hosting

---

## Design Philosophy

The project showcases two distinct design approaches while maintaining the same core functionality:

- **No Gradients**: Clean, solid colors throughout
- **Modern Layouts**: Sidebar vs. top toolbar implementations
- **Responsive Design**: Adapts to different screen sizes
- **Unique Identities**: Each page has its own visual personality

---

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/kevinye7/Grid-Maker.git
cd Grid-Maker
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Navigate to the respective pages to test different implementations

---

## Usage

1. **Select a Grid**: Choose between David's or Kevin's grid from the landing page
2. **Build Your Grid**: Use "Add Row" and "Add Col" buttons to create your grid
3. **Select a Color**: Choose from the color dropdown menu
4. **Color Cells**: Click individual cells to color them
5. **Fill Options**: 
   - Fill All Uncolored: Colors only empty cells
   - Fill All: Colors the entire grid
6. **Clear**: Reset all cells to transparent

---

## Contributors

- **David** - Dark theme implementation with sidebar layout
- **Kevin** - Light theme implementation with toolbar layout

---

## License

This project is part of a collaborative assignment and is available for educational purposes.

---

## Acknowledgments

- Original starter code structure provided as assignment framework
- Modern design patterns inspired by contemporary web applications
