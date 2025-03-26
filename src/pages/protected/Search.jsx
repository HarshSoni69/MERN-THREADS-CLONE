import React from 'react'
import SearchInput from '../../components/search/SearchInput'
import ProfileBar from '../../components/search/ProfileBar'
import { Stack } from '@mui/material'


const Search = () => {
  return (
    <>
      <SearchInput/>
      <Stack flexDirection={'column'} mb={5} gap={1} width={'90%'} mx={'auto'} maxWidth={'750px'}   >
      <ProfileBar/>
      <ProfileBar/>
      <ProfileBar/>
      </Stack>
      
    </>
  )
}

export default Search