import { useRef } from "react"
import type { ElementType } from "../../types/Element"

type Props = ElementType & {
    index: number
}

const ElementCard = (props: Props) => {
    const elementCardRef = useRef<HTMLDivElement>(null)
    
    return (
        <div
            ref={elementCardRef}
            className={`element-card ${props.category}`}
            style={{
                gridColumn: props.group,
                gridRow: props.period + 1
            }}
        >
            <span className="element-number">{props.number}</span>
            <span className="element-symbol">{props.symbol}</span>
        </div>
    )
}

export default ElementCard