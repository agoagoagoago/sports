# SportsConduct Website Clone

A responsive replica of the SportsConduct website featuring sports streaming guides and entertainment content.

## Project Structure

```
SportsConduct/
├── index.html          # Main HTML file
├── css/
│   ├── style.css      # Main styles
│   └── responsive.css # Responsive design styles
├── js/
│   └── main.js        # JavaScript functionality
├── images/
│   └── placeholder.svg # Placeholder image
└── README.md          # This file
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Navigation Menu**: Multi-level dropdown navigation
- **Content Sections**: News, Events, Streaming Guides, and Blogs
- **Mobile-Friendly**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Anchor link navigation
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **SEO Optimized**: Meta tags and semantic HTML structure

## Local Development

### Option 1: Direct File Opening
1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser

### Option 2: Local Server (Recommended)

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```

Using VS Code Live Server:
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

Then navigate to `http://localhost:8000` in your browser.

## Deployment Instructions

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push the code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/sportsconduct-clone.git
git push -u origin main
```
3. Go to Settings → Pages in your repository
4. Select source: Deploy from branch (main)
5. Your site will be available at `https://yourusername.github.io/sportsconduct-clone/`

### Option 2: Netlify (Free)

1. Visit [netlify.com](https://www.netlify.com)
2. Sign up/Login
3. Drag and drop the project folder to deploy
4. Your site will get a random URL like `https://amazing-site-123.netlify.app`
5. You can customize the domain in site settings

### Option 3: Vercel (Free)

1. Install Vercel CLI:
```bash
npm i -g vercel
```
2. Run in project directory:
```bash
vercel
```
3. Follow the prompts to deploy
4. Your site will be available at a Vercel URL

### Option 4: Traditional Web Hosting

1. Purchase hosting from providers like:
   - Bluehost
   - HostGator
   - GoDaddy
   - SiteGround

2. Upload files via:
   - FTP (FileZilla)
   - cPanel File Manager
   - SSH/SFTP

3. Upload all files to the `public_html` or `www` directory

### Option 5: AWS S3 Static Hosting

1. Create an S3 bucket
2. Enable static website hosting
3. Upload all files
4. Set bucket policy for public access:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```
5. Access via S3 website endpoint

## Customization

### Changing Colors
Edit the color values in `css/style.css`:
- Primary color: `#0066cc`
- Background: `#f5f5f5`
- Text: `#333`

### Adding Content
1. Add new sections in `index.html`
2. Style them in `css/style.css`
3. Add interactivity in `js/main.js`

### Adding Images
1. Place images in the `images/` folder
2. Reference them in HTML: `<img src="images/your-image.jpg">`

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

- Minify CSS and JavaScript for production
- Optimize images (use WebP format)
- Enable gzip compression on server
- Use CDN for static assets

## License

This is a clone project for educational purposes. Please ensure you have the right to use any content or trademarks.

## Support

For issues or questions, please create an issue in the repository.