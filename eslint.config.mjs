// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { getDefaultAttributes } from 'eslint-plugin-better-tailwindcss/api/defaults';

export default withNuxt(
  betterTailwindcss.configs['correctness-error'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-quotes': 'off',
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        }
      }]
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/assets/css/main.css',
        attributes: [
          ...getDefaultAttributes(),
          ['^v-bind:ui$', [{ match: 'objectValues' }]]
        ]
      }
    }
  }
);
