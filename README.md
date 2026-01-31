# Kundan's Resume Website

A professional, static resume website built with HTML and CSS, perfect for GitHub Pages deployment.

## 🚀 Features

- **Fully Static** - Pure HTML & CSS, no server required
- **GitHub Pages Ready** - Deploy in minutes
- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Fast Loading** - Minimal dependencies, optimized performance
- **Professional Look** - Modern, clean design
- **Easy to Customize** - Simple HTML/CSS structure

## 📋 Quick Start

### 1. Update Your Resume Link

Replace `https://drive.google.com/YOUR_RESUME_LINK_HERE` with your actual Google Drive link:

**In `index.html`:**
- Find all occurrences of `https://drive.google.com/YOUR_RESUME_LINK_HERE`
- Replace with your Google Drive resume link

**Steps to get your Google Drive link:**
1. Upload `KK_Resume 2.0.pdf` to Google Drive
2. Right-click the file → Share
3. Get the shareable link (make sure it's accessible)
4. Copy the link and use it in `index.html`

### 2. Customize Content

Edit `index.html` to personalize:
- Your name and title
- About section
- Skills (add/remove skill tags)
- Any other content

### 3. Local Testing

Open `index.html` in your browser to preview:
```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if installed)
npx http-server
```

Then visit `http://localhost:8000`

## 📦 Deployment to GitHub Pages

### Option 1: Direct Repository

1. Create a GitHub repository named `yourusername.github.io`
2. Clone the repository locally
3. Copy all files from this project to your repository
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: Resume website"
   git push origin main
   ```
5. Visit `https://yourusername.github.io`

### Option 2: Project Repository

1. Create a GitHub repository (any name)
2. Copy all files to the repository
3. Go to Settings → Pages → Source → Select `main` branch
4. Visit `https://yourusername.github.io/repository-name`

## 📂 File Structure

```
myprofile/
├── index.html           # Main resume page
├── style.css            # Styling
├── README.md            # This file
└── KK_Resume 2.0.pdf    # Your resume PDF
```

## 🎨 Customization Guide

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... more colors ... */
}
```

### Fonts
Change font-family in `style.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Add More Sections
Copy the section structure in `index.html`:
```html
<section class="section">
    <h2>Section Title</h2>
    <p>Your content here</p>
</section>
```

## 🔒 Privacy & Security

- **Static files only** - No server-side processing
- **Safe to deploy** - No sensitive data stored
- **Google Drive link** - Ensure your Google Drive link has appropriate sharing settings

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🆘 Troubleshooting

**Google Drive link not working:**
- Ensure the file is shared with "Anyone with the link" or "Public"
- Copy the correct link format

**Website looks broken:**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that both `index.html` and `style.css` are in the same folder

**GitHub Pages not showing:**
- Wait 1-5 minutes after pushing
- Check repository settings → Pages
- Ensure files are in the correct branch

## 📄 License

Feel free to modify and use this website template for personal purposes.

## 💡 Tips

- Keep your Google Drive resume updated; changes will reflect automatically
- Add more projects or sections as needed
- Consider adding a blog or portfolio section
- Use emoji in titles for visual appeal (already included)

---

**Last Updated:** 2026
**Ready for GitHub Pages:** ✅
