import React, { useState } from 'react'

const usePagination = ()=>{
   const [currentPage, setCurrentPage] = useState<number>(1)
    
    return {currentPage, setCurrentPage}
   
}

export default usePagination