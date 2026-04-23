import { Elements } from "../data/Elements"
import type { ElementType } from "../types/Element"
import { getCategory } from "../Utils"
import ElementCard from "./ElementCard"

const PeriodicTable = () => {
    return (
        <div className="periodic-table">
            {
                Elements.map((element: ElementType) => (
                    <ElementCard
                        key={element.number}
                        {...element}
                        category={getCategory(element)}
                    />
                ))
            }
        </div>
    )
}

export default PeriodicTable