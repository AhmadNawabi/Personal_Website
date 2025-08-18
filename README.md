# 🚀 Ahmad Nawabi - Full Stack Web Developer Portfolio  

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="images/portfolio-preview.png" alt="Desktop Preview" width="500"/><br>
        <em>Desktop View</em>
      </td>
      <td align="center">
        <img src="images/portfolio-preview-mobile.png" alt="Mobile Preview" width="250"/><br>
        <em>Mobile View</em>
      </td>
    </tr>
  </table>
  <p><em>Interactive 3D portfolio built with HTML5, CSS3, JavaScript (Three.js / GSAP)</em></p>
</div>  

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/AhmadNawabi/Personal_Website?style=for-the-badge)](https://github.com/AhmadNawabi/Personal_Website/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/AhmadNawabi/Personal_Website?style=for-the-badge)](https://github.com/AhmadNawabi/Personal_Website/network/members)
[![Made With](https://img.shields.io/badge/Made%20With-Three.js%20%26%20GSAP-blue?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)  

[🌐 **Live Demo**](https://ahmadnawabi.github.io/Personal_Website/)

</div>  

---

## 📑 Table of Contents  

- [👨‍💻 About the Developer](#-about-the-developer)  
- [📝 Project Story](#-project-story)  
- [🌟 Features Implemented](#-features-implemented)  
- [🛠️ Features To Be Added](#️-features-to-be-added)  
- [🧗‍♂️ Challenges Faced](#️-challenges-faced)  
- [🚀 Setup & Usage](#-setup--usage)  
- [🔍 Debugging Tips](#-debugging-tips)  
- [🧠 Development Challenges & Solutions](#-development-challenges--solutions)  
- [🤝 How to Contribute](#-how-to-contribute)  
- [📜 License](#-license)  

---

## 👨‍💻 About the Developer  

Hi, I’m **Ahmad Nawabi**, a passionate Full Stack Web Developer from Tulsa, Oklahoma 🇺🇸.  
I focus on building **modern, high-performance web applications** that blend creativity with scalability.  

🔗 [LinkedIn](https://www.linkedin.com/in/ahmadshamoonnawabi)  
💻 [GitHub](https://github.com/AhmadNawabi)   
📂 [Portfolio Repository](https://github.com/AhmadNawabi/Personal_Website)  
🌐 [Live Demo](https://ahmadnawabi.github.io/Personal_Website/)  

I believe in the power of **interactive storytelling through code**, and this portfolio project reflects both my technical ability and my love for design.  

---

## 📝 Project Story  

This portfolio began as a way to stand out in today’s competitive job market — but quickly evolved into a **creative playground** for experimenting with **3D models, smooth animations, and responsive layouts**.  

I wanted something that felt less like a “resume site” and more like a **living, interactive experience**.  
The journey involved balancing **design, performance, and cross-device usability** — while learning new tools like **Three.js** and **GSAP**.  

---

## 🌟 Features Implemented  

✔️ 3D model integration with **Three.js**  
✔️ Smooth page transitions & micro-animations powered by **GSAP**  
✔️ Mobile-first responsive design  
✔️ Optimized assets for **90+ Lighthouse Performance score**  
✔️ SEO-friendly structure with clean HTML tags  

---

## 🛠️ Features To Be Added  

🔲 Dark mode toggle 🌙  
🔲 Dynamic blog section powered by a backend (Flask / Node.js)  
🔲 More interactive 3D objects (e.g. drag-to-rotate model viewer)  
🔲 Contact form with email integration  

---

## 🧗‍♂️ Challenges Faced  

- **3D Performance Bottlenecks:** Early versions of the portfolio lagged on mobile devices. I solved this by compressing textures and reducing polycount by ~40%.  
- **Cross-Browser Compatibility:** Safari initially broke some GSAP animations. Implemented feature detection and fallbacks.  
- **Mobile Responsiveness:** Balancing 3D canvas scaling across devices was tricky — solved with GPU acceleration (`will-change: transform`).  
- **Time Management:** Designing *and* coding animations simultaneously often slowed progress. I created modular GSAP timelines for better control.  

---

## 🚀 Setup & Usage  

**1. Clone the repository**  
```bash
git clone https://github.com/AhmadNawabi/Personal_Website.git  
cd Personal_Website
```

**2. Install dependencies**  
```bash
npm install
```

**3. Run the project**  

Quick preview (no server):  
```bash
open index.html     # macOS  
start index.html    # Windows  
xdg-open index.html # Linux  
```

Development server (recommended):  
```bash
npx live-server --port=3000
```

➡️ Access at: http://localhost:3000  

---

## 🔍 Debugging Tips  

- 🎭 **3D Performance:** Use Chrome’s Three.js Inspector (DevTools → Console)  
- 📱 **Mobile Testing:** Run `npx serve -l 3000` and scan QR code on phone  
- ⏱ **Animation Debug:** Use `gsap.timeline({ paused: true })` for frame-by-frame control  

---

## 🧠 Development Challenges & Solutions  

| Challenge | Solution |
|-----------|----------|
| ⏳ 3D Model Loading Speed | Compressed textures & reduced polycount |
| 📱 Mobile Animation Jank | Used `will-change: transform` for GPU acceleration |
| 🌐 Cross-Browser Issues | Feature detection + GSAP fallbacks |

---

## 🤝 How to Contribute  

1. Fork the repository  
2. Create a feature branch:  
```bash
git checkout -b feature/your-feature
```
3. Commit your changes:  
```bash
git commit -m "feat: describe your change"
```
4. Push and open a Pull Request 🚀  

---

## 📜 License  

MIT License — open-source with attribution. See LICENSE for details.  

<p align="center">🔨 Built with passion by <a href="https://github.com/AhmadNawabi">Ahmad Nawabi</a> | 🌟 Thank you for visiting! 🚀</p>
