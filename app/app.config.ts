export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      secondary: 'sky',
      neutral: 'slate'
    },
    header: {
      slots: {
        root: 'border-sky-200 dark:border-sky-900',
        left: 'text-secondary'
      }
    },
    pageHero: {
      slots: {
        title: 'text-secondary',
        description: 'text-xl sm:text-2xl text-blue-950 dark:text-blue-200'
      }
    },
    separator: {
      variants: {
        color: {
          neutral: {
            border: 'border-sky-200 dark:border-sky-900'
          }
        }
      }
    },
    footer: {
      slots: {
        container: 'text-sky-300 dark:text-sky-700'
      }
    },
    button: {
      variants: {
        size: {
          xl: {
            base: 'text-xl'
          }
        }
      }
    }
  }
});
