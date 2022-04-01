export type Data = {
  name: string
  is_default: boolean
  types: Array<{
    type: {
      name: string
    }
  }>
  base_experience: number
  height: number
  weight: number
  abilities: Array<{
    ability: {
      name: string
    }
  }>
  sprites: {
    back_default: string
    front_default: string
  }
}
