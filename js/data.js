// Portfolio configuration
const config = {
    name: "Your Name",
    title: "Senior Product Manager",
    subtitle: "Hover to preview • Click to learn more"
};

// Card content
const cards =[
  {
    category: "Bio",
    title: "About Me",
    text: "Senior Product Manager with expertise in B2B SaaS",
    fullContent: `I'm a seasoned Product Manager with over 7 years of experience in the B2B SaaS industry. I have a proven track record of leading successful product launches and driving significant business impact. 

Key Points:
• 7+ years of product management experience
• Led the launch of 3 major SaaS products that generated over $10M in annual revenue
• Skilled in customer research, data analysis, cross-functional collaboration, and agile methodologies
• Passionate about building innovative solutions that solve real customer problems`
  }
];

// Export for use in components
window.portfolioData = {
    config,
    cards
};
