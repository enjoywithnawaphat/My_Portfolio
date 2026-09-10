import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const GITHUB = "https://github.com/enjoywithnawaphat";

const projects = [
  {
    title: "Find Parking",
    titleTH: "ระบบค้นหาลานจอด",
    cat: "Full-stack",
    catTH: "Full-stack",
    desc: "Parking management and parking-finder web application.",
    descTH:
      "เว็บแอปพลิเคชันสำหรับค้นหาและจัดการข้อมูลลานจอดรถ รวมถึงประวัติการจอดและการคำนวณค่าบริการ",
    stack: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
    ],
    repo: GITHUB + "/_13-findparking",
    featured: true,
    year: 2025,
    yearTH: 2568,
  },

  {
    title: "Order Chinese Tables",
    titleTH: "ระบบสั่งโต๊ะจีน",
    cat: "Full-stack",
    catTH: "Full-stack",
    desc: "Online website for ordering Chinese-table catering services.",
    descTH: "เว็บไซต์สำหรับให้บริการและจัดการการสั่งโต๊ะจีนผ่านระบบออนไลน์",
    stack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    repo: GITHUB + "/Order-Chinese-tables-Website",
    featured: true,
    year: 2024,
    yearTH: 2567,
  },

  {
    title: "FuturePath",
    titleTH: "FuturePath",
    cat: "AI / Web",
    catTH: "AI / Web",
    desc: "Career-consultation chatbot for IT careers using a RAG approach.",
    descTH:
      "แชตบอตให้คำปรึกษาด้านสายอาชีพ IT โดยใช้แนวคิด RAG เพื่อค้นหาและนำข้อมูลมาใช้ในการตอบคำถาม",
    stack: ["Python", "RAG", "AI", "JavaScript", "HTML", "CSS"],
    repo: GITHUB + "/FuturePath",
    featured: true,
    year: 2025,
    yearTH: 2568,
  },

  {
    title: "Justsayyes",
    titleTH: "Justsayyes",
    cat: "Web",
    catTH: "Web",
    desc: "Interactive web development project.",
    descTH:
      "เว็บไซต์ Interactive ที่พัฒนาขึ้นเพื่อฝึกทักษะด้าน Web Development",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: GITHUB + "/Justsayyes",
    year: 2023,
    yearTH: 2566,
  },

  {
    title: "Multipage Showcase",
    titleTH: "เว็บไซต์แสดงผลงานแบบหลายหน้า",
    cat: "Frontend",
    catTH: "Frontend",
    desc: "Multi-page frontend showcase project.",
    descTH:
      "เว็บไซต์หลายหน้าสำหรับแสดงข้อมูลและผลงาน โดยเน้นการออกแบบและพัฒนา Frontend",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: GITHUB + "/Mutipage-showcase",
    year: 2023,
    yearTH: 2566,
  },

  {
    title: "ShoesStore",
    titleTH: "ShoesStore",
    cat: "Full-stack",
    catTH: "Full-stack",
    desc: "E-commerce website project for a university course.",
    descTH:
      "เว็บไซต์ E-commerce สำหรับร้านขายรองเท้า ซึ่งพัฒนาขึ้นเป็นส่วนหนึ่งของรายวิชาในมหาวิทยาลัย",
    stack: ["ASP.NET Core MVC", "C#", "HTML", "CSS", "JavaScript", "Bootstrap"],
    repo: GITHUB + "/ShoesStore",
    year: 2026,
    yearTH: 2569,
  },
  {
    title: "Game porfolio",
    titleTH: "Game porfolio",
    cat: "Game Development",
    catTH: "Game Development",
    desc: "A prototype game developed using Unity and C# to hone and showcase my game development skills. This was the first game project I created entirely on my own, spanning the journey from learning the fundamentals of game development to applying that knowledge to build functional systems and a playable game.",
    descTH:
      "เกมต้นแบบที่พัฒนาขึ้นด้วย Unity และ C# เพื่อฝึกฝนและแสดงทักษะด้านการพัฒนาเกม โดยเป็นโปรเจกต์เกมแรกที่ผมพัฒนาขึ้นด้วยตนเอง ตั้งแต่การเรียนรู้พื้นฐานของ Game Development ไปจนถึงการนำความรู้มาสร้างเป็นระบบและเกมที่สามารถเล่นได้จริง",
    stack: ["Unity", "C#"],
    repo: GITHUB + "/Game_porfolio",
    year: 2026,
    yearTH: 2569,
  },
];

const text = {
  en: {
    nav: ["About", "Projects", "Skills", "Contact"],
    available: "AVAILABLE FOR CO-OP / INTERNSHIP",
    hero: (
      <>
        Building software <em>that solves problems.</em>
      </>
    ),
    lead: "I’m Nawaphat, a Computer Science student focused on Full-stack Development, practical software projects, and continuous learning.",
    view: "Explore my work ↓",
    github: "View GitHub ↗",
    about: "01 — ABOUT",
    aboutTitle: (
      <>
        Student developer,
        <br />
        <em>problem solver.</em>
      </>
    ),
    about1:
      "I’m studying Computer Science and Software Innovation at Sripatum University. My current direction is Full-stack Development, where I enjoy turning requirements into working interfaces, APIs, and database-backed applications.",
    about2:
      "This portfolio documents what I can actually build — not just a list of technologies. Each selected project shows the tools and lessons behind the work.",
    work: "02 — SELECTED WORK",
    workTitle: (
      <>
        Projects that show
        <br />
        <em>how I build.</em>
      </>
    ),
    workIntro:
      "Selected from my GitHub and presented around what each project demonstrates.",
    filters: ["All", "Full-stack", "AI / Web", "Frontend", "Web","Game Development"],
    count: "projects",
    repo: "View repository",
    toolkit: "03 — TOOLKIT",
    toolkitTitle: (
      <>
        Tools I use
        <br />
        <em>to turn ideas into software.</em>
      </>
    ),
    toolkitIntro:
      "Grouped by practical use rather than pretending every technology is an expert-level skill.",
    direction: "04 — CURRENT DIRECTION",
    directionTitle: (
      <>
        From web development
        <br />
        toward <em>bigger systems.</em>
      </>
    ),
    journey: [
      ["01", "Basic HTML, CSS, JavaScript", "Fundamentals"],
      ["02", "Full-stack", "Build web applications"],
      ["03", "Data Science, LLM, RAG", "Learn RAG Architecture & Data Science"],
      [
        "04",
        "AI, Machine Learning, Deep Learning, Data Visualization",
        "Current focus",
      ],
    ],
    contact: "05 — CONTACT",
    contactTitle: (
      <>
        Let’s build something
        <br />
        <em>worth talking about.</em>
      </>
    ),
    contactText:
      "I’m looking for a co-op / internship opportunity where I can contribute, learn from experienced developers, and grow through real software work.",
    email: "Email me ↗",
    linkedin: "LinkedIn ↗",
    note: "Phone: 090-232-4482",
    focus: [
      "Build real projects",
      "Understand the fundamentals",
      "Become internship-ready",
    ],
  },
  th: {
    nav: ["เกี่ยวกับฉัน", "ผลงาน", "ทักษะ", "ติดต่อ"],
    available: "กำลังมองหาสหกิจศึกษา / ฝึกงาน",
    hero: (
      <>
        สร้างซอฟต์แวร์ <em>เพื่อแก้ปัญหา</em>
      </>
    ),
    lead: "ผมชื่อ นวพรรษ นักศึกษาวิทยาการคอมพิวเตอร์ที่มุ่งเน้นด้าน Full-stack Development การสร้าง Software Project และการพัฒนาทักษะอย่างต่อเนื่อง",
    view: "ดูผลงานของฉัน ↓",
    github: "ดู GitHub ↗",
    about: "01 — เกี่ยวกับฉัน",
    aboutTitle: (
      <>
        นักพัฒนาซอฟต์แวร์
        <br />
        <em>ที่ชอบแก้ปัญหา</em>
      </>
    ),
    about1:
      "ผมกำลังศึกษาด้านวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ที่มหาวิทยาลัยศรีปทุม โดยปัจจุบันมุ่งเน้น Full-stack Development และสนุกกับการเปลี่ยนความต้องการให้กลายเป็น UI, API และระบบที่เชื่อมต่อกับฐานข้อมูลได้จริง",
    about2:
      "Portfolio นี้สร้างขึ้นเพื่อแสดงสิ่งที่ผมสามารถสร้างได้จริง ไม่ใช่เพียงรายชื่อ Technology โดยแต่ละ Project สะท้อนเครื่องมือและสิ่งที่ผมได้เรียนรู้",
    work: "02 — ผลงานที่คัดเลือก",
    workTitle: (
      <>
        Project ที่แสดงให้เห็น
        <br />
        <em>วิธีที่ผมพัฒนา Software</em>
      </>
    ),
    workIntro:
      "คัดเลือกจาก GitHub และนำเสนอโดยเน้นสิ่งที่แต่ละ Project แสดงถึงความสามารถของผม",
    filters: ["ทั้งหมด", "Full-stack", "AI / Web", "Frontend", "Web","Game Development"],
    count: "ผลงาน",
    repo: "ดู Repository",
    toolkit: "03 — เครื่องมือ",
    toolkitTitle: (
      <>
        เครื่องมือที่ผมใช้
        <br />
        <em>เปลี่ยนไอเดียให้เป็น Software</em>
      </>
    ),
    toolkitIntro:
      "จัดกลุ่มตามการใช้งานจริง โดยไม่อ้างว่าทุก Technology อยู่ในระดับเชี่ยวชาญ",
    direction: "04 — ทิศทางปัจจุบัน",
    directionTitle: (
      <>
        จาก Web Development
        <br />
        สู่ <em>ระบบที่ใหญ่ขึ้น</em>
      </>
    ),
    journey: [
      ["01", "Basic HTML, CSS, JavaScript", "เครื่องมือพื้นฐาน"],
      ["02", "Full-stack", "สร้าง Web applications"],
      [
        "03",
        "Data Science, LLM, RAG",
        "เรียนรู้สถาปัตยกรรม RAG & Data Science",
      ],
      [
        "04",
        "AI, Machine Learning, Deep Learning, Data Visualization",
        "กำลังเรียนรู้",
      ],
    ],
    contact: "05 — ติดต่อ",
    contactTitle: (
      <>
        มาสร้างสิ่งที่
        <br />
        <em>น่าสนใจไปด้วยกัน</em>
      </>
    ),
    contactText:
      "ผมกำลังมองหาโอกาสฝึกสหกิจศึกษา / ฝึกงาน ที่จะได้มีส่วนร่วมกับทีม เรียนรู้จากนักพัฒนาที่มีประสบการณ์ และเติบโตจากการทำงาน Software จริง",
    email: "ส่งอีเมล ↗",
    linkedin: "LinkedIn ↗",
    note: "เบอร์โทร: 090-232-4482",
    focus: [
      "สร้าง Project ที่ใช้งานได้จริง",
      "เข้าใจพื้นฐานอย่างแท้จริง",
      "เตรียมพร้อมสำหรับการฝึกงาน",
    ],
  },
};

function App() {
  const [lang, setLang] = useState("en");
  const [filter, setFilter] = useState("All");
  const [menu, setMenu] = useState(false);

  const t = text[lang];

  const ids = ["about", "projects", "skills", "contact"];

  // เรียง Project จากปีล่าสุด → ปีเก่าสุด
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  const selected =
    filter === "All" || filter === "ทั้งหมด"
      ? sortedProjects
      : sortedProjects.filter((p) => p.cat.includes(filter));

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenu(false);
  };

  return (
    <div className="app">
      <header>
        <nav className="container nav">
          <button className="brand" onClick={() => go("home")}>
            <b>N</b> NAWAPHAT<span>.DEV</span>
          </button>
          <button className="hamb" onClick={() => setMenu(!menu)}>
            {menu ? "×" : "☰"}
          </button>
          <div className={"links " + (menu ? "open" : "")}>
            {t.nav.map((n, i) => (
              <button key={n} onClick={() => go(ids[i])}>
                {n}
              </button>
            ))}
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <div className="lang">
              <button
                className={lang === "th" ? "on" : ""}
                onClick={() => setLang("th")}
              >
                TH
              </button>
              <span>/</span>
              <button
                className={lang === "en" ? "on" : ""}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div>
            <div className="eyebrow">
              <i /> {t.available}
            </div>
            <h1>{t.hero}</h1>
            <p className="lead">{t.lead}</p>
            <div className="actions">
              <button className="primary" onClick={() => go("projects")}>
                {t.view}
              </button>
              <a
                className="secondary"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                {t.github}
              </a>
            </div>
            <div className="chips">
              <span>React</span>
              <span>Node.js</span>
              <span>MySQL</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div className="terminal">
            <div className="termbar">
              <i />
              <i />
              <i /> <span>nawaphat@dev:~</span>
            </div>
            <div className="termbody">
              <p>
                <b>$</b> whoami
              </p>
              <h2>
                Full-stack Developer
                <br />
                {lang === "en" ? "in progress." : "กำลังพัฒนาอย่างต่อเนื่อง"}
              </h2>
              <p>
                <b>$</b> cat focus.txt
              </p>
              <ul>
                {t.focus.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="cursor">▌</p>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <label>{t.about}</label>
          <div className="two">
            <h2>{t.aboutTitle}</h2>
            <div className="copy">
              <p>{t.about1}</p>
              <p>{t.about2}</p>
              <div className="stats">
                <div>
                  <b>14</b>
                  <small>GitHub repositories</small>
                </div>
                <div>
                  <b>3+</b>
                  <small>featured projects</small>
                </div>
                <div>
                  <b>∞</b>
                  <small>things to learn</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <div className="heading">
              <div>
                <label>{t.work}</label>
                <h2>{t.workTitle}</h2>
              </div>
              <p>{t.workIntro}</p>
            </div>

            <div className="filters">
              {t.filters.map((f) => (
                <button
                  className={filter === f ? "on" : ""}
                  key={f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
              <span>
                {selected.length} {t.count}
              </span>
            </div>
            <div className="projectGrid">
              {selected.map((p, i) => (
                <Card key={p.title + "all"} p={p} n={i + 1} t={t} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <label>{t.toolkit}</label>
          <div className="heading">
            <h2>{t.toolkitTitle}</h2>
            <p>{t.toolkitIntro}</p>
          </div>
          <div className="skills">
            {[
              [
                "Frontend",
                "React",
                "ASP.NET Core MVC",
                "JavaScript",
                "HTML / CSS",
                "Bootstrap",
              ],
              ["Backend", "Node.js", "Express", "REST API"],
              ["Database", "MySQL", "SQL Server", "MongoDB"],
              [
                "Programming Languages",
                "JavaScript",
                "C#",
                "HTML",
                "CSS",
                "SQL",
                "Python",
              ],
              [
                "Exploring",
                "C#",
                "Unity",
                "AI / RAG",
                "Python",
                "n8n",
                "Unity",
              ],
              [
                "Tools",
                "Visual Studio",
                "VS Code",
                "Git",
                "GitHub",
                "Postman",
                "Figma",
              ],
            ].map((a) => (
              <div className="skill" key={a[0]}>
                <small>/ {a[0].toUpperCase()}</small>
                {a.slice(1).map((x) => (
                  <div key={x}>
                    {x}
                    <span>↗</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="section band">
          <div className="container">
            <label>{t.direction}</label>
            <h2>{t.directionTitle}</h2>
            <div className="journey">
              {t.journey.map((x, i) => (
                <div className={i < 3 ? "done" : ""} key={x[0]}>
                  <small>{x[0]}</small>
                  <b>{x[1]}</b>
                  <span>{x[2]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact container">
          <div>
            <label>{t.contact}</label>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="actions">
              <a
                className="primary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nawaphat.sidework@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {t.email}
              </a>
              <a
                className="secondary"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                className="secondary"
                href="https://www.linkedin.com/in/nawaphat-thongsuk-2909123ab"
                target="_blank"
                rel="noreferrer"
              >
                {t.linkedin}
              </a>
            </div>
            {/* <small>{t.note}</small> */}
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">nawaphat.sidework@gmail.com</span>
              </div>

              <div className="contact-item">
                <span className="contact-label">PHONE</span>
                <span className="contact-value">090-232-4482</span>
              </div>

              <div className="contact-item">
                <span className="contact-label">LINE</span>
                <span className="contact-value">nigth-61</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <span>© 2026 Nawaphat Thongsut</span>
          <span>Built with React + Vite</span>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            @enjoywithnawaphat ↗
          </a>
        </div>
      </footer>
    </div>
  );
}

function Card({ p, n, t, lang }) {
  const title = lang === "th" ? p.titleTH : p.title;
  const category = lang === "th" ? p.catTH : p.cat;
  const description = lang === "th" ? p.descTH : p.desc;
  const year = lang === "th" ? p.yearTH : p.year;

  return (
    <article className="card">
      <div className="visual">
        <span>0{n}</span>

        <small>{category}</small>

        <strong>{title}</strong>
      </div>

      <div className="cardbody">
        <div>
          <h3>{title}</h3>
          <em>{year}</em>
        </div>

        <p>{description}</p>

        <div className="tags">
          {p.stack.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>

        <a href={p.repo} target="_blank" rel="noreferrer">
          {t.repo} ↗
        </a>
      </div>
    </article>
  );
}

createRoot(document.getElementById("root")).render(<App />);
