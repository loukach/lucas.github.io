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
  },
  {
    category: "Skills",
    title: "Product Management Expertise",
    text: "Proficient in key product management disciplines",
    fullContent: `My product management expertise spans a wide range of skills:

• Product strategy and roadmapping
• User research and user experience design
• Data analysis and metrics-driven decision making
• Agile project management and delivery
• Cross-functional collaboration and stakeholder management
• Go-to-market strategy and launch planning
• Continuous product improvement and iteration`
  },
  {
    category: "Achievements",
    title: "Successful Product Launches",
    text: "Led the launch of 3 major SaaS products",
    fullContent: `Here are some of my key product launch achievements:

• Launched the SSK Background Removal feature, which generated $140K in additional annual revenue in the first 6 months and is projected to reach $260K in the next year.
• Delivered the Santander Rent project, a 900K ACV enterprise deal, on time and within scope.
• Introduced a new pay-per-use pricing model for SSK products, driving increased sales and revenue.
• Enabled the localized launch of the SSK mobile app in Portugal and Benelux, improving reliability and reducing maintenance costs.`
  },
  {
    category: "Feedback",
    title: "Performance Reviews",
    text: "Consistently recognized as an outperforming product manager",
    fullContent: `My performance reviews consistently highlight my strengths as a product manager:

"Lucas stands out for his operational excellence. He's dedicated to quickly and efficiently solving problems with smart solutions. His knack for critical thinking, adept questioning, and relentless pursuit of the best outcomes for customers and the business make him a standout among his colleagues."

"Lucas connects the right people and cultivates a collaborative atmosphere, ensuring everyone shares a clear understanding of problems, solutions and priorities. His great communication skills, both within the team and with providers, often prove pivotal in negotiations and discussions."

"Lucas stands out for his unmatched ability to pinpoint problems accurately and devise effective solutions. His great attention to detail guarantees that every facet of his work meets very high standards."`
  },
  {
    category: "Project",
    title: "SSK Background Removal",
    text: "Delivered a flagship product feature with high impact",
    fullContent: `The SSK Background Removal feature was a key initiative I led, with the following outcomes:

• Delivered the feature on time and within budget, enabling it to reach the entire 2,000+ customer base of the SSK platform.
• Drove $140K in additional annual revenue in the first 6 months, with projected growth to $260K in the next year.
• Implemented a pay-per-use pricing model and customization options to maximize revenue potential.
• Ensured high quality with only 14 incident tickets in the first 6 months, thanks to thorough documentation and cross-team collaboration.
• Positioned MotorK as an AI expert in the market through this innovative feature.`
  }
];

// Export for use in components
window.portfolioData = {
    config,
    cards
};
