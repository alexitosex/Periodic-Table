import type { ElementType } from "../types/Element"

const ElementCard = (props: ElementType) => {
    return (
        <div
            className={`element-card ${props.category}`}
            style={{
                gridColumn: props.group,
                gridRow: props.period + 1
            }}>
                <span className="element-number">{props.number}</span> 
                <span className="element-symbol">{props.symbol}</span> 
            </div>
    )
}

export default ElementCard