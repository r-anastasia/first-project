import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

export const globalStyles = (
  <Global
    styles={css`
      ${emotionNormalize}

      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        min-height: 100vh;
        font-family: Rubik, sans-serif;
        line-height: 1.5;
        scroll-behavior: smooth;
      }

      html,
      body,
      button,
      input,
      textarea {
        font-family: Rubik, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
)
