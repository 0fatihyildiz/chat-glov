/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export const Row = styled.div<{ justifyContent?: string, alignItems?: string, gap?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
    gap: ${({ gap }) => gap || '0'};
`

export const Column = styled.div<{ justifyContent?: string, alignItems?: string, gap?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
    gap: ${({ gap }) => gap || '0'};
`
