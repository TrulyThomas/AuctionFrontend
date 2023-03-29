import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Item } from '../Types/Types'
import { useMutation, gql } from '@apollo/client'

function NewItem() {
  const [newItem, setNewItem] = useState<Partial<Item>>()

  const CREAT_ITEM = gql`
    mutation newItem($name: String!) {
      newItem(name: $name) {
        name
      }
    }
  `

  const [creatItem, { data, loading, error }] = useMutation(CREAT_ITEM)

  function handelSubmit() {
    creatItem({ variables: { ...newItem } })
  }

  return (
    <>
      <Container maxWidth="sm">
        <Box boxShadow={2} borderRadius={2}>
          <Box display="flex" flexDirection={'column'} sx={{ padding: '1rem' }}>
            <Typography variant="h2" gutterBottom>
              Create new item
            </Typography>
            <TextField
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              id="name"
              label="Name"
              variant="outlined"
            />
            <Button type="button" variant="outlined" onClick={handelSubmit}>
              Create
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default NewItem
