import crypto from "crypto"

const generateProductId = () => {
  const part1 = crypto.randomBytes(6).toString("hex")
  const part2 = crypto.randomBytes(6).toString("hex")

  return `prod-${part1}-${part2}`
}

export default generateProductId