# Web Optimization Task

This repository hosts the source code for a web optimization project aimed at improving Google Web Vitals scores. The objective is to enhance page speed, accessibility, SEO, and overall performance by refining HTML, CSS, and JavaScript.

## Lighthouse Score Improvements

**Before Optimization:**
- **Performance**: 100
- **Accessibility**: 89
- **Best Practices**: 96
- **SEO**: 91

**After Optimization:**
- **Performance**: 100
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

Lighthouse Report !!! 
**** **** **** ****
## Optimizations Implemented

### Accessibility Enhancements
1. **Image Descriptions**: Added `alt` attributes to all images for better screen reader support.
2. **Keyboard Navigation**: Ensured all interactive elements are accessible via keyboard navigation.
3. **Improved Contrast**: Adjusted color contrast to enhance text readability.
4. **Semantic HTML**: Utilized appropriate HTML tags for improved screen reader navigation.

### Performance Optimization
1. **Inlining Critical CSS**: Reduced render-blocking by inlining essential CSS.
2. **Deferring Non-Critical Resources**: Deferred loading of non-essential CSS and JavaScript.
3. **Removing Unused Code**: Cleaned up unnecessary JavaScript and CSS to enhance page load speed.

### Image Optimization
1. **Responsive Images**: Implemented responsive images with the `srcset` attribute for appropriate sizing.
2. **Next-Gen Formats**: Served images in WebP format for reduced file sizes and faster load times.
3. **Image Compression**: Compressed images to reduce file sizes without sacrificing quality.

### SEO Improvements
1. **Meta Descriptions**: Added informative and relevant meta descriptions and titles.
2. **Heading Structure**: Properly structured headings (H1, H2, etc.) for clear content hierarchy.
3. **Internal Linking**: Improved navigation and crawlability by linking relevant pages within the site.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/optimization-task.git
    cd optimization-task
    ```
2. **Open the project**:
    Open the `index.html` file in your web browser to view the project.

3. **Run Lighthouse Audit**:
    Use Chrome DevTools or PageSpeed Insights to run a Lighthouse audit on the `index.html` file.

## Files

- **index.html**: The main HTML file.
- **style.css**: The optimized CSS file.
- **script.js**: The optimized JavaScript file.
- **README.md**: This README file.

## Contributing

If you find any issues or have suggestions for improvements, please create an issue or submit a pull request. Contributions are welcome!
