export type Item = {
   id: number
   name: string
   text: string
   initialPrice: number
   quantity: number
   images: {
      id: number
      base64data: string
      order: number
   }[]
   isPublished: boolean
}
