/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core"

interface TextButtonProps {
    enabled: boolean
    className?: string
    enabledStyle: SerializedStyles
    disabledStyle: SerializedStyles
    onClick: () => void;
    children: string
}

const containerCSS = css({
    margin: "0px 20px"
})

const TextButton = ({ enabled, className, enabledStyle, disabledStyle, onClick, children}: TextButtonProps) => {
    function handleClick() {
        if (enabled) {
            onClick()
        }
    }

    function computeCSS() {
        const style =  enabled ? enabledStyle : disabledStyle
        const cursor = enabled ? css({cursor: "pointer"}) : null
        return [style, cursor, containerCSS]
    }

    function computeContainerCSS() {
        return enabled ? css({}) : css({pointerEvents: "none"})
    }

    return (
        <div onClick={handleClick} css={computeContainerCSS} >
            <h2 className={className} css={computeCSS()}>{children}</h2>
        </div>
    )
}

export default TextButton
