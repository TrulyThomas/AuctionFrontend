import {
   Box,
   Button,
   CircularProgress,
   Container,
   IconButton,
   Stack,
   TextField,
   Typography
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { PhotoCamera } from '@mui/icons-material'
import { Console } from 'console'
import Images from './Images'
import { ItemInput } from '../Types/graphql'

function NewItem() {
   const [newItem, setNewItem] = useState<ItemInput>()
   const [newImages, setNewImages] = useState<string[]>()
   const [loadingImage, setLoadingImage] = useState<boolean>(false)
   const navigate = useNavigate()

   const CREAT_ITEM = gql`
      mutation createItem($item: ItemInput!) {
         newItem(item: $item) {
            id
         }
      }
   `

   const [createItem, { data, loading, error }] = useMutation(CREAT_ITEM)
   useEffect(() => {
      if (!data) return
      navigate('/item/edit/' + data.newItem.id)
   }, [data])

   function handelSubmit() {
      if (newItem?.name == null || newItem?.name == '') return
      console.log(newItem)

      createItem({ variables: { item: newItem } })
   }

   return (
      <>
         <Container maxWidth="sm">
            <Box boxShadow={2} borderRadius={2}>
               <Box sx={{ padding: '1rem' }}>
                  <Stack spacing={2}>
                     <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ alignSelf: 'center' }}
                     >
                        Create new item
                     </Typography>
                     <TextField
                        onChange={(e) => {
                           let partialItem = {
                              name: e.target.value
                           } as ItemInput
                           setNewItem({
                              ...newItem,
                              ...partialItem
                           } as ItemInput)
                        }}
                        required
                        id="name"
                        label="Name"
                        variant="outlined"
                     />
                     <Stack spacing={2} direction={'row'}>
                        <TextField
                           fullWidth
                           onChange={(e) => {
                              let partialItem = {
                                 initialPrice: parseInt(e.target.value)
                              } as ItemInput
                              setNewItem({
                                 ...newItem,
                                 ...partialItem
                              } as ItemInput)
                           }}
                           id="initialPrice"
                           label="Initial Price"
                           variant="outlined"
                           type="number"
                        />
                        <TextField
                           fullWidth
                           onChange={(e) => {
                              let partialItem = {
                                 quantity: parseInt(e.target.value)
                              } as ItemInput
                              setNewItem({
                                 ...newItem,
                                 ...partialItem
                              } as ItemInput)
                           }}
                           id="quantity"
                           label="Quantity"
                           defaultValue={1}
                           variant="outlined"
                           type="number"
                        />
                     </Stack>
                     <TextField
                        fullWidth
                        onChange={(e) => {
                           let partialItem = {
                              text: e.target.value
                           } as ItemInput
                           setNewItem({
                              ...newItem,
                              ...partialItem
                           } as ItemInput)
                        }}
                        id="text"
                        label="Descriptsion"
                        variant="outlined"
                     />
                     {!loadingImage && (
                        <Button
                           startIcon={<PhotoCamera />}
                           color="primary"
                           aria-label="upload picture"
                           component="label"
                        >
                           Upload Pictures
                           <input
                              hidden
                              multiple
                              onChange={(e) => {
                                 let temtImages = [...(newItem?.images ?? [])]

                                 for (
                                    var i = 0;
                                    i < (e.target.files?.length ?? 0);
                                    i++
                                 ) {
                                    let fileReader = new FileReader()
                                    let file = e.target.files?.item(i)
                                    if (!file) continue

                                    fileReader.readAsDataURL(file)
                                    fileReader.onloadstart = () => {
                                       setLoadingImage(true)
                                    }
                                    fileReader.onloadend = () => {
                                       setLoadingImage(false)
                                    }
                                    fileReader.onload = () => {
                                       if (!fileReader.result) return
                                       temtImages.push({
                                          base64data:
                                             fileReader.result.toString()
                                       })
                                    }

                                    let partialItem = {
                                       images: temtImages
                                    } as ItemInput

                                    setNewItem({
                                       ...newItem,
                                       ...partialItem
                                    } as ItemInput)
                                 }
                              }}
                              accept="image/*"
                              id="image"
                              type="file"
                           />
                        </Button>
                     )}
                     {loadingImage && <CircularProgress color="inherit" />}
                     <Button
                        type="button"
                        variant="contained"
                        disabled={(newItem?.name ?? '') == '' || loadingImage}
                        onClick={handelSubmit}
                     >
                        Create
                     </Button>
                     <Images
                        images={
                           (newItem?.images?.map(
                              (i) => i?.base64data
                           ) as string[]) ?? undefined
                        }
                     ></Images>
                  </Stack>
               </Box>
            </Box>
         </Container>
      </>
   )
}

export default NewItem
