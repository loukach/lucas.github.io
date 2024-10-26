// Portfolio configuration
const config = {
    name: "Your Name",
    title: "Senior Product Manager",
    subtitle: "Hover to preview • Click to learn more"
};

// Card content
const cards = [
    {
        category: "Bio",
        title: "About Me",
        text: "Senior Product Manager with expertise in B2B SaaS",
        fullContent: `[Your brief bio here]

Key Points:
• X years of experience in product management
• Led successful launches of Y major products
• Expertise in B2B SaaS and enterprise solutions`
    },
    // ... Add other cards here
];

// Export for use in components
window.portfolioData = {
    config,
    cards
};
