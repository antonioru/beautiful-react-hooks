module.exports = {
  // https://github.com/styleguidist/react-styleguidist/blob/master/src/client/styles/theme.ts
  theme: {
    color: {
      base: '#2D3142',
      text: '#2D3142',
      link: '#1D6C8B',
      linkHover: '#317995'
    },
    baseColor: '#2D3142',
    fontFamily: {
      base: '"Ubuntu", "sans-serif", light',
    },
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
        padding: 0,
        border: 'none',
        background: 'transparent',
        //borderRadius: '6px',
        // boxShadow: '0 0px 10px 0 rgba(93, 100, 148, 0.05)',
      },
    },
  },
}
