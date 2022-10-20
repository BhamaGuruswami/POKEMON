import React from 'react'

export default function  Pagination ({gonextpage,goprevpage}) {
  return (
    <div>
      { goprevpage &&<button onClick={goprevpage}>previus</button>}
      {gonextpage &&<button onClick={gonextpage}>next</button>}

    </div>
  )
}


