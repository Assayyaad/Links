# Links - الصياد

<div style="text-align: center;">

[العربية](./README.md)

A super-simple free web template to store and share your links like Linktree or Link-in-bio

</div>

## Features
- 😊 No installation or fancy setup; just replace links/icons in JSON files!
- 🌙 Beautiful dark mode design with modern styling and animations!
- 😍 Icons powered by [iconify](https://github.com/iconify/iconify); find tons of free icons for almost any purpose!
- 🔠 Categorize links with nested hierarchical structure; organize your links under various categories and subcategories!
- 🎨 Modern visual enhancements with smooth transitions, hover effects, and glass-morphism design!
- 📱 Fully responsive design that works perfectly on all devices!

## Usage
The first step is to click the **Use this template** button above the file list to create a new repository.

### Modify social media links
Go to `data/social.json` file and edit the social media links:

```json
[
  {
    "name": "YouTube",
    "url": "https://youtube.com/@yourusername",
    "icon": "ri:youtube-fill"
  },
  {
    "name": "GitHub",
    "url": "https://github.com/yourusername",
    "icon": "ri:github-fill"
  }
]
```

#### Change icons and icon colour
Go to [iconify icon sets](https://icon-sets.iconify.design/) and search for the icon you want. Copy the unique icon name and paste it into the `icon` field. You can also add a custom `color` field to change the icon color:

```json
{
  "name": "Instagram",
  "url": "https://instagram.com/yourusername",
  "icon": "ri:instagram-fill",
  "color": "#E4405F"
}
```

### Modifying link buttons and categories
Link buttons and categories are configured in the `data/links.json` file. The structure supports nested categories for better organization:

#### Simple link button
```json
{
  "name": "My Website",
  "url": "https://example.com",
  "icon": "ri:global-line"
}
```

#### Link button with tag
```json
{
  "name": "My New Project",
  "url": "https://example.com",
  "icon": "ri:rocket-line",
  "tag": "جديد"
}
```

#### Copy-to-clipboard button
```json
{
  "name": "Email Address",
  "text": "contact@example.com",
  "icon": "ri:mail-line"
}
```

#### Category with nested items
```json
{
  "category": "Programming",
  "items": [
    {
      "category": "Projects",
      "items": [
        {
          "name": "GitHub",
          "url": "https://github.com/yourusername",
          "icon": "ri:github-fill"
        }
      ]
    },
    {
      "name": "Portfolio",
      "url": "https://yourportfolio.com",
      "icon": "ri:briefcase-line"
    }
  ]
}
```

### Customization

#### Change site information
Edit the `index.html` file to update:
- Page title and meta descriptions
- Header content (name, description)
- Footer links

#### Customize colors and styling
The main colors are defined in CSS custom properties in `style.css`:
```css
body.dark {
  --color-primary: #00d4aa;    /* Primary accent color */
  --color-accent: #6366f1;     /* Secondary accent color */
  --bg-color: #0a0a0a;         /* Main background */
  --bg-secondary-color: #1a1a1a; /* Card backgrounds */
}
```

#### Default icon color
Edit `data/theme.json` to change the default color for social media icons:
```json
{
  "color": "#00E6E6"
}
```

## File Structure
```
├── index.html              # Main HTML file
├── style.css              # Styles and design
├── assets/
│   └── logo.png           # Site logo
├── data/
│   ├── theme.json       # Default settings
│   ├── links.json         # Main links and categories
│   └── social.json        # Social media links
└── src/
    ├── func.js            # Core functions
    ├── script.js          # Main JavaScript
    └── types.js           # Type definitions
```

## Features in Detail

### Hierarchical Categories
The template supports multiple levels of nested categories with visual indicators:
- Level 1: `▶ Category ◀` (closed) / `▼ Category ▼` (open)
- Level 2: `▶ Subcategory ◀◀` (closed) / `▼▼ Subcategory ▼▼` (open)
- Level 3: `▶▶▶ Sub-subcategory ◀◀◀` (closed) / `▼▼▼ Sub-subcategory ▼▼▼` (open)

### Modern Design Elements
- Smooth page load animations with staggered fade-in effects
- Hover animations with lift effects on buttons and cards
- Glass-morphism navigation bar with backdrop blur
- Rounded corners and modern shadows throughout
- Responsive design that adapts to all screen sizes

### Interactive Elements
- Copy-to-clipboard functionality for text-based buttons
- Smooth transitions and hover states
- Keyboard navigation support
- Screen reader friendly with proper ARIA labels

## License
This project is released under [The Unlicense](https://unlicense.org/), making it completely free to use for any purpose