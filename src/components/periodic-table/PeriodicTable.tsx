import { Elements } from "../../data/Elements"
import type { ElementType } from "../../types/Element"
import { getCategory } from "../../utils/GetCategory"
import ElementCard from "./ElementCard"

const PeriodicTable = () => {
    return (
        <div className="periodic-table">
            {
                Elements.map((element: ElementType, index) => (
                    <ElementCard
                        key={element.number}
                        {...element}
                        category={getCategory(element)}
                        index={index}
                    />
                ))
            }
        </div>
    )
}

export default PeriodicTable