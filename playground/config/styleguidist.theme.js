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
    Logo: {
      logo: {},
    },
    TableOfContents: {
      search: {
        display: 'none',
      },
      input: {
        borderRadius: 0,
        backgroundColor: 'transparent',
        border: 0,
        paddingLeft: 0,
        outline: 0,
        color: 'white',
        borderBottom: '1px solid white',
        '&:focus': {
          borderColor: 'rgba(255, 255, 255, 0.25)',
          boxShadow: 'unset',
        },
        '&::placeholder': {
          color: 'rgba(255, 255, 255, 0.25)',
        },
      },
    },
    Heading: {
      heading: {
        color: '#0F8B8D',
        fontFamily: '\'Ubuntu\', sans-serif',
      },
    },
    Code: {
      code: {
        fontFamily: '\'Ubuntu Mono\', sans-serif',
        backgroundColor: '#D36A81',
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
      sidebar: {
        border: 0,
        background: 'linear-gradient(#FFF,#F1F1F7)',
        boxShadow: '0 0 20px 0 rgba(20, 20, 20, 0.1)',
        color: '#0F8B8D',
      },
      content: {
        maxWidth: '960px',
      },
      root: {
        background: '#f5f8fd',
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
