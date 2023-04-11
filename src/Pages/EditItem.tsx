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
import { ItemInput } from '../Types/graphql'

function EditItem() {
   const [opdateItem, setOpdateItem] = useState<ItemInput>()
   const { id } = useParams()
   const GET_ITEM_BY_ID = gql`
      query GetSingleItem($id: Int!) {
         getItem(id: $id) {
            name
            text
            id
            initialPrice
            quantity
            image {
               url
            }
         }
      }
   `
   const CREAT_ITEM = gql`
      mutation newItSSSem($item: ItemInput!) {
         newItem(item: $item) {
            name
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
      creatItem,
      { data: updateItemData, loading: loadingItemData, error: errorItemData }
   ] = useMutation(CREAT_ITEM)
   useEffect(() => {
      setOpdateItem(getItemData?.getItem)

      console.log(getItemData)
   }, [getItemData])

   function handelSubmit() {
      if (opdateItem?.name == null || opdateItem?.name == '') return

      creatItem({ variables: { item: opdateItem } })
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
                           } as ItemInput
                           setOpdateItem({
                              ...opdateItem,
                              ...partialItem
                           } as ItemInput)
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
                              } as ItemInput
                              setOpdateItem({
                                 ...opdateItem,
                                 ...partialItem
                              } as ItemInput)
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
                              } as ItemInput
                              setOpdateItem({
                                 ...opdateItem,
                                 ...partialItem
                              } as ItemInput)
                           }}
                           value={opdateItem?.quantity ?? ''}
                           InputLabelProps={{ shrink: true }}
                           id="quantity"
                           label="Quantity"
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
                           setOpdateItem({
                              ...opdateItem,
                              ...partialItem
                           } as ItemInput)
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
