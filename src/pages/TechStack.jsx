import React from "react";

const tech = [
  { name: "HTML5", color: "E34F26", logo: "html5", logoColor: "white" },
  { name: "CSS3", color: "1572B6", logo: "css3", logoColor: "white" },
  {
    name: "JavaScript",
    color: "F7DF1E",
    logo: "javascript",
    logoColor: "black",
  },
  { name: "React", color: "61DAFB", logo: "react", logoColor: "black" },
  {
    name: "TypeScript",
    color: "3178C6",
    logo: "typescript",
    logoColor: "white",
  },
  { name: "GitHub", color: "181717", logo: "github", logoColor: "white" },
  {
    name: "TailwindCSS",
    color: "06B6D4",
    logo: "tailwindcss",
    logoColor: "white",
  },
  { name: "Figma", color: "F24E1E", logo: "figma", logoColor: "white" },
  { name: "MongoDB", color: "47A248", logo: "mongodb", logoColor: "white" },
  { name: "Vercel", color: "000000", logo: "vercel", logoColor: "white" },
  {
    name: "VSCode",
    color: "007ACC",
    logo: "visualstudiocode",
    logoColor: "white",
  },
  { name: "Bitbucket", color: "0052CC", logo: "bitbucket", logoColor: "white" },
  { name: "Git", color: "F05032", logo: "git", logoColor: "white" },
  { name: "Node.js", color: "339933", logo: "node.js", logoColor: "white" },
  { name: "Postman", color: "FF6C37", logo: "postman", logoColor: "white" },
  { name: "Next.js", color: "000000", logo: "nextdotjs", logoColor: "white" },
  { name: "Vite", color: "646CFF", logo: "vite", logoColor: "white" },
];

const makeBadgeUrl = (t) => {
  const message = encodeURIComponent(t.name);
  const color = t.color;
  const logo = encodeURIComponent(t.logo);
  const logoColor = t.logoColor
    ? `&logoColor=${encodeURIComponent(t.logoColor)}`
    : "";
  return `https://img.shields.io/badge/${message}-${color}?style=flat&logo=${logo}${logoColor}`;
};

export default function TechBadges() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {tech.map((t) => (
        <img
          key={t.name}
          src={makeBadgeUrl(t)}
          alt={t.name}
          style={{ height: "24px" }}
        />
      ))}
    </div>
  );
}
