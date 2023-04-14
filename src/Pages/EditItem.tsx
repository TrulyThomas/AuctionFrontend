import { gql, useMutation, useQuery } from '@apollo/client'
import {
   Box,
   Button,
   CircularProgress,
   Container,
   Stack,
   TextField,
   Typography
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ImageInput, Image, Item, ItemInput } from '../Types/graphql'
import Images from '../Components/Images'
import { PhotoCamera } from '@mui/icons-material'

function EditItem() {
   const [opdateItem, setOpdateItem] = useState<Item>()
   const { id } = useParams()
   const [loadingImage, setLoadingImage] = useState<boolean>(false)
   const navigate = useNavigate()

   const GET_ITEM_BY_ID = gql`
      query GetItemForEdit($id: Int!) {
         getItem(id: $id) {
            name
            text
            id
            initialPrice
            quantity
            images {
               base64data
               order
               id
            }
         }
      }
   `
   const CREAT_ITEM = gql`
      mutation editItem($item: ItemInput!) {
         newItem(item: $item) {
            id
         }
      }
   `
   const {
      data: getItemData,
      error: getItemError,
      loading: getItemLoading
   } = useQuery(GET_ITEM_BY_ID, {
      skip: id === 'new',
      variables: { id: parseInt(id ?? '0') }
   })

   const [
      editItem,
      { data: updateItemData, loading: loadingItemData, error: errorItemData }
   ] = useMutation(CREAT_ITEM)
   useEffect(() => {
      setOpdateItem(getItemData?.getItem)
   }, [getItemData])

   useEffect(() => {
      if (!updateItemData) return
      if (id == 'new') navigate('/item/edit/' + updateItemData.newItem.id)
   }, [updateItemData])

   function handelSubmit() {
      if (opdateItem?.name == null || opdateItem?.name == '') return

      const newItem: ItemInput = {
         name: opdateItem.name,
         id: opdateItem.id,
         images:
            opdateItem.images?.map((i) => {
               return {
                  order: i?.order,
                  base64data: i?.base64data!,
                  id: i?.id,
                  url: i?.url
               }
            }) ?? [],
         initialPrice: opdateItem.initialPrice,
         quantity: opdateItem.quantity,
         text: opdateItem.text
      }
      editItem({ variables: { item: newItem } })
   }

   function deleteImages(deleteIndex: number) {
      let newImages = [...(opdateItem?.images as Array<Image>)]

      newImages.splice(deleteIndex, 1)

      setOpdateItem({ ...opdateItem, images: newImages } as Item)
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
                        {id == 'new' ? 'New Item' : 'Edit item'}
                     </Typography>
                     <TextField
                        onChange={(e) => {
                           let partialItem = {
                              name: e.target.value
                           } as Item
                           setOpdateItem({
                              ...opdateItem,
                              ...partialItem
                           } as Item)
                        }}
                        value={opdateItem?.name ?? ''}
                        InputLabelProps={{ shrink: true }}
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
                              } as Item
                              setOpdateItem({
                                 ...opdateItem,
                                 ...partialItem
                              } as Item)
                           }}
                           value={opdateItem?.initialPrice ?? ''}
                           InputLabelProps={{ shrink: true }}
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
                              } as Item
                              setOpdateItem({
                                 ...opdateItem,
                                 ...partialItem
                              } as Item)
                           }}
                           value={opdateItem?.quantity ?? ''}
                           InputLabelProps={{ shrink: true }}
                           id="quantity"
                           label="Quantity"
                           variant="outlined"
                           type="number"
                        />
                     </Stack>
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
                                 let temtImages = [
                                    ...(opdateItem?.images ?? [])
                                 ]

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
                                             fileReader.result.toString(),
                                          order: i,
                                          id: 0,
                                          url: ''
                                       })
                                    }

                                    let partialItem = {
                                       images: temtImages
                                    } as Item

                                    setOpdateItem({
                                       ...opdateItem,
                                       ...partialItem
                                    } as Item)
                                 }
                              }}
                              accept="image/*"
                              id="image"
                              type="file"
                           />
                        </Button>
                     )}
                     {loadingImage && <CircularProgress color="inherit" />}
                     <Images
                        edit={true}
                        images={
                           (opdateItem?.images?.map(
                              (i) => i?.base64data
                           ) as string[]) ?? undefined
                        }
                        deleteImages={deleteImages}
                     ></Images>
                     <TextField
                        fullWidth
                        onChange={(e) => {
                           let partialItem = {
                              text: e.target.value
                           } as Item
                           setOpdateItem({
                              ...opdateItem,
                              ...partialItem
                           } as Item)
                        }}
                        value={opdateItem?.text ?? ''}
                        InputLabelProps={{ shrink: true }}
                        id="text"
                        label="Description"
                        variant="outlined"
                     />
                     <Button
                        type="button"
                        variant="outlined"
                        onClick={handelSubmit}
                     >
                        Edit
                     </Button>
                  </Stack>
               </Box>
            </Box>
         </Container>
      </>
   )
}

export default EditItem
