import type { ElementType } from "./types/Element"

export const getCategory = (el: ElementType) => {
  if (el.symbol === "H") return "nonmetal"

  if (el.period === 8) return "lanthanide"
  if (el.period === 9) return "actinide"

  if (el.group === 1) return "alkali-metal"
  if (el.group === 2) return "alkaline-earth-metal"

  if (el.group === 17) return "halogen"
  if (el.group === 18) return "noble-gas"

  if (el.group >= 3 && el.group <= 12) return "transition-metal"

  if (["B", "Si", "Ge", "As", "Sb", "Te"].includes(el.symbol))
    return "metalloid"

  if (["C", "N", "O", "P", "S", "Se"].includes(el.symbol))
    return "nonmetal"

  if (
    ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po", "Nh", "Fl", "Mc", "Lv"]
      .includes(el.symbol)
  )
    return "post-transition-metal"

  return "nonmetal"
}