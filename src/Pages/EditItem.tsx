import { gql, useMutation, useQuery } from '@apollo/client'
import {
   Box,
   Button,
   Container,
   Stack,
   TextField,
   Typography
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Images from './Images'
import { ImageInput, Item, ItemInput } from '../Types/graphql'

function EditItem() {
   const [opdateItem, setOpdateItem] = useState<Item>()
   const { id } = useParams()
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
      skip: !!!id,
      variables: { id: parseInt(id ?? '0') }
   })

   const [
      editItem,
      { data: updateItemData, loading: loadingItemData, error: errorItemData }
   ] = useMutation(CREAT_ITEM)
   useEffect(() => {
      setOpdateItem(getItemData?.getItem)
   }, [getItemData])

   function handelSubmit() {
      if (opdateItem?.name == null || opdateItem?.name == '') return
      console.log(opdateItem)

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

      console.log(newItem)

      editItem({ variables: { item: newItem } })
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
                        Edit item
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

                     <Images
                        images={
                           (opdateItem?.images?.map(
                              (i) => i?.base64data
                           ) as string[]) ?? undefined
                        }
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
