/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from '@emotion/react'

function GlobalStyles() {
	const theme = useTheme()

	return (
		<Global
			styles={css`
                @import '../assets/fonts/inter.css';

                *, *::before, *::after {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: 'InterDisplay', sans-serif;
                }

                html, body, #app {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                body {
                    line-height: 1.5;
                    background-color: ${theme.colors.bgSoft};
                }
            `}
		/>
	)
}

export default GlobalStyles
