module.exports = {
  // https://github.com/styleguidist/react-styleguidist/blob/master/src/client/styles/theme.ts
  theme: {
    color: {
      base: '#606f7b',
      text: '#606f7b',
      link: '#1D6C8B',
      linkHover: '#317995'
    },
    baseColor: '#606f7b',
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
    Code: {
      code: {
        fontFamily: '\'Ubuntu Mono\', sans-serif',
        backgroundColor: '#CF7A95',
        color: '#fff',
        fontWeight: '400',
        padding: '0 5px',
      },
    },
    Para: {
      para: {
        fontFamily: '\'Ubuntu\', sans-serif',
      },
    },
    StyleGuide: {
      logo: {
        display: 'none',
      },
      sidebar: {
        border: 0,
        width: '16rem',
        background: 'white',
        boxShadow: '0 0 20px 0 rgba(20, 20, 20, 0.1)',
      },
      content: {
        maxWidth: '960px',
      },
      root: {
        background: '#FBFAF9',
      },
      hasSidebar: {
        paddingLeft: '16rem',
      }
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
