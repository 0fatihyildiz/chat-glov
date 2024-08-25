/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from '@emotion/react'

function GlobalStyles() {
	const theme = useTheme()

	return (
		<Global
			styles={css`
                *, *::before, *::after {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                html, body, #app {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                body {
                    font-family: 'Inter, sans-serif';
                    line-height: 1.5;
                    background-color: ${theme.colors.bgSoft};
                }
            `}
		/>
	)
}

export default GlobalStyles
