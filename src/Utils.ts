import type { ElementType } from "./types/Element"

export const getCategory = (el: ElementType) => {

  // hidrogeno
  if (el.symbol === "H") {
    return "nonmetal"
  }

  // lantanidos y actinidos
  if (el.period === 8) {
    return "lanthanide"
  } else if (el.period === 9) {
    return "actinide"
  }

  // grupos principales
  if (el.group === 1) {
    return "alkali-metal"
  }

  if (el.group === 2) {
    return "alkaline-earth-metal"
  }

  if (el.group === 17) {
    return "halogen"
  }

  if (el.group === 18) {
    return "noble-gas"
  }

  // metales de transicion
  if (el.group >= 3 && el.group <= 12) {
    return "transition-metal"
  }

  // metaloides
  if (
    el.symbol === "B" ||
    el.symbol === "Si" ||
    el.symbol === "Ge" ||
    el.symbol === "As" ||
    el.symbol === "Sb" ||
    el.symbol === "Te"
  ) {
    return "metalloid"
  }

  // no metales
  if (
    el.symbol === "C" ||
    el.symbol === "N" ||
    el.symbol === "O" ||
    el.symbol === "P" ||
    el.symbol === "S" ||
    el.symbol === "Se"
  ) {
    return "nonmetal"
  }

  // otros metales
  if (
    el.symbol === "Al" ||
    el.symbol === "Ga" ||
    el.symbol === "In" ||
    el.symbol === "Sn" ||
    el.symbol === "Tl" ||
    el.symbol === "Pb" ||
    el.symbol === "Bi" ||
    el.symbol === "Po" ||
    el.symbol === "Nh" ||
    el.symbol === "Fl" ||
    el.symbol === "Mc" ||
    el.symbol === "Lv"
  ) {
    return "post-transition-metal"
  }

  return "nonmetal"
}