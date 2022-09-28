import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'

import { initFirebase } from '@/services/firebase'
import { Resource } from '@/types/resources'

export const useGetLinks = () => {
  const { db } = initFirebase()
  const [links, setLinks] = useState<Resource[]>([])

  useEffect(() => {
    async function getLinks() {
      const querySnapshot = await getDocs(collection(db, "links"))

      querySnapshot.forEach((doc) => {
        setLinks((prevLinks) => {
          if (prevLinks.find((link) => link.id === doc.id)) return prevLinks
          const link: Resource = doc.data() as Resource
          link.id = doc.id
          return [...prevLinks, link]
        })
      })
    }
    getLinks()
  }, [db])

  return links
}
