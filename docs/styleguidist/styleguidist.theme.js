module.exports = {
  theme: {
    sidebarWidth: 200,
    fontFamily: {
      base: '"Ubuntu", "sans-serif", light',
    },
  },
  template: {
    favicon: 'https://beautifulinteractions.com/favicons/bi-favicon.ico',
  },
  styles: {
    SectionHeading: {
      wrapper: {
        display: 'none',
      },
    },
    Heading: {
      heading: {
        color: '#1D6C8B',
        fontFamily: '\'Ubuntu\', sans-serif',
      },
    },
    Code: {
      code: {
        fontFamily: '\'Ubuntu Mono\', sans-serif',
        backgroundColor: '#BE496E',
        color: '#fff',
        fontWeight: '400',
        padding: '0 5px',
      },
    },
    Para: {
      para: {
        color: '#143642',
        fontFamily: '\'Ubuntu\', sans-serif',
      },
    },
    StyleGuide: {
      logo: {
        background: 'url(./docs-logo.png) no-repeat left center',
        borderBottom: 'none',
        backgroundSize: 'contain',
        margin: '16px 16px',
        height: '30px',
        padding: 0,
      },
      sidebar: {
        border: 0,
        width: '260px',
        background: 'white',
        boxShadow: '0 0 20px 0 rgba(20, 20, 20, 0.1)',
        color: '#1D6C8B',
      },
      content: {
        maxWidth: '820px',
      },
      root: {
        background: '#FBFAF9',
      },
    },
    Playground: {
      preview: {
        border: '2px solid rgba(0, 0, 0, .05)',
        background: 'white',
        borderRadius: '5px',
        boxShadow: '0 0px 10px 0 rgba(93, 100, 148, 0.05)',
      },
    },
  },
};
