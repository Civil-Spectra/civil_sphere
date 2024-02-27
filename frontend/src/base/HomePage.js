import React from 'react';
import './HomePage.css';  // Ensure you have this CSS file for styling

const HomePage = () => {
    // Array of news links. You can update this list with actual news URLs and titles
    const newsLinks = [
        { title: "How artificial intelligence (AI) is reshaping the future of civil engineering", url: "https://www.pbctoday.co.uk/news/digital-construction-news/artificial-intelligence-civil-engineering/136379/" },
        { title: "Women engineers break barriers amid Somalia construction boom", url: "https://www.africanews.com/2023/09/20/women-engineers-break-barriers-amid-somalia-construction-boom/" },
        { title: "HS2 | Third 1,700t TBM launched for London tunnelling", url: "https://www.newcivilengineer.com/latest/hs2-third-1700t-tbm-launched-for-london-tunnelling-26-02-2024/" },
        { title: "Global unrest fuelling shipping costs, consumers to feel it within a year – Unctad", url: "https://www.engineeringnews.co.za/article/global-unrest-fuelling-shipping-costs-consumers-to-feel-it-within-a-year-unctad-2024-02-23" },
        { title: "Markets News, Feb. 26, 2024: Stocks Fall as Chip Rally Continues", url: "https://www.investopedia.com/dow-jones-today-02262024-8600040" },
        { title: "Fire at pump station; no water today in south Mumbai, east suburbs", url: "https://timesofindia.indiatimes.com/city/mumbai/mumbai-water-cut-today-live-fire-at-pump-station-no-water-today-in-south-mumbai-east-suburbs/articleshow/108025536.cms" },
        { title: "Innovation on the Rails: How BNSF's Engineering Team is Paving the Way for a Safer, More Efficient Future", url: "https://bnnbreaking.com/world/us/innovation-on-the-rails-how-bnsfs-engineering-team-is-paving-the-way-for-a-safer-more-efficient-future" },

        // Add more links as needed
    ];

    return (
        <div>
            <div className="main-content">
                <h1>Welcome to Civil Spectra</h1>
                <p>Simplifying the Art of Building Communities.</p>
                {/* Additional content can go here */}
            </div>
            <div className="news-section">
                <h1>Latest News</h1>
                <ul>
                    {newsLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
