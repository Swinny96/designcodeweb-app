import { createGlobalStyle } from 'styled-components'
import { themes } from './ColorStyles'

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${themes.light.backgroundColor};

        @media (prefers-color-scheme: dark) {
            background: ${themes.dark.backgroundColor};
            color: ${themes.dark.text1};
        }
    }
    a {
        color: ${themes.light.text1};
        border-color: ${themes.dark.backgroundColor};

        @media (prefers-color-scheme: dark) {
            color: ${themes.dark.text1};
            border-color: ${themes.light.backgroundColor};
        }
    }

    a:hover {
        color: ${themes.dark.text1};
        border-color: ${themes.dark.backgroundColor};

        @media (prefers-color-scheme: dark) {
            color: ${themes.dark.text1};
            border-color: ${themes.light.backgroundColor};
        }
    }

    button {
        color: ${themes.light.text1}!important;
        border-color: ${themes.dark.backgroundColor};

        @media (prefers-color-scheme: dark) {
            color: ${themes.dark.text1}!important;
            border-color: ${themes.light.backgroundColor};
        }
    }

    button:hover {
        color: ${themes.dark.text1}!important;
        border-color: ${themes.dark.backgroundColor};

        @media (prefers-color-scheme: dark) {
            color: ${themes.dark.text1}!important;
            background-color: #333;
            border-color: ${themes.light.backgroundColor};
        }
    }
    li.tab-list-item{
        color: ${themes.light.text1};
        border-color: ${themes.dark.backgroundColor};

        @media (prefers-color-scheme: dark) {
            color: ${themes.dark.text1};
            border-color: ${themes.light.backgroundColor};
        }
    }
`