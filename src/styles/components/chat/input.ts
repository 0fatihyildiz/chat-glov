import type { Theme } from '@emotion/react'
import { css } from '@emotion/react'

function chatInput(theme: Theme) {
	const inputTextStyle = `
        font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.084px;
        border-radius: var(--radius-10, 10px);
    `

	const inputWrapperStyle = css(`
        position: relative;
        background: ${theme.colors.white};
    `)

    const inputActionStyle = css(`
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        z-index: 1;
        padding: 0 6px
    }`)

	const contentEditableStyle = css(`
        padding: 10px 40px 10px 10px;
        border: 1px solid ${theme.colors.strokeSoft};
        position: relative;
        z-index: 1;
        ${inputTextStyle}

        &:focus {
            outline: none;
            border-width: 2px;
            border-color: ${theme.colors.primary};
        }
    `)

	const placeholderStyle = css(`
        ${inputTextStyle}
        color: ${theme.colors.textPlaceholder};
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        pointer-events: none;
    `)

	const dropdownStyle = css(`
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.strokeSoft};
        border-top: none;
        z-index: 2;
        border-radius: 0 0 10px 10px;
        max-height: 150px;
        overflow-y: auto;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `)

	const dropdownItemStyle = css(`
        padding: 10px;
        ${inputTextStyle}
        color: ${theme.colors.primary};
        cursor: pointer;

        &:hover {
            background-color: ${theme.colors.primaryLight};
        }
    `)

	const typeHeadMenuStyle = css(`
        position: absolute;
        background-color: ${theme.colors.white};
        border-radius: ${theme.variables[16]};
        box-shadow: ${theme.shadows.medium};
        border: 1px solid ${theme.colors.strokeSoft};
        padding: ${theme.variables[4]};
        gap: ${theme.variables[2]};
        display: flex;
        flex-direction: column;
        z-index: 100;
        width: 100%;
        overflow: hidden;
        bottom: ${theme.variables[48]};

        .not-found {
            display: flex;
            align-items: center;
            padding: ${theme.variables[12]};
            gap: ${theme.variables[4]};
            padding: ${theme.variables[4]};
            color: ${theme.colors.textSub};
            font-size: ${theme.variables[14]};
        }
    `)

    const typeHeadMenuItemStyle = (isSelected: boolean) => css(`
        padding: 8px 16px;
        background-color: ${isSelected ? 'rgba(0,0,0,0.05)' : 'transparent'};
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: ${theme.variables[6]};
        border-radius: ${theme.variables[8]};
        font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
        font-size: ${theme.variables[14]};

        &:hover {
            background-color: rgba(0,0,0,0.05);
        }
    `)

	return { contentEditableStyle, placeholderStyle, inputWrapperStyle, dropdownStyle, dropdownItemStyle, typeHeadMenuStyle, typeHeadMenuItemStyle, inputActionStyle }
}

export { chatInput }
