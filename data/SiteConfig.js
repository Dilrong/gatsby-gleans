const config = {
  siteTitle: "Gleans", // Site title.
  siteTitleShort: "Gleans", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Gleans", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gleans.me", // Domain of your website without pathPrefix.
  pathPrefix: "/gleans", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "서로의 지식을 통해 새로운 지식을 얻는 독서모임 Gleans", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-138209670-1", // Tracking code ID for google analytics.
  disqusShortname: "https://gleans.disqus.com", // Disqus shortname.
  postDefaultCategoryID: "book", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Gleans", // Username to display in the author segment.
  userEmail: "dilrong@dilrong.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Korea, Incheon", // User location to display in the author segment.
  userAvatar: "/logos/logo-1024.png", // User avatar to display in the author segment.
  userDescription:
    "서로의 지식을 통해 새로운 지식을 얻는 독서모임 Gleans", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/dilrong",
      iconClassName: "fa fa-github"
    },
    {
      label: "Blog",
      url: "https://blog.naver.com/dilrong",
      iconClassName: "fa fa-pencil"
    },
    {
      label: "Email",
      url: "mailto:dilrong@dilrong.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Dilrong" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
