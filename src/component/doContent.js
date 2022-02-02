import React, { useState } from 'react'

function DoList({ contents, deleteContent }) {

  return (
    <div style={{ padding: "10px", display: "flex", border: "1px solid #ccc", width: "400px", justifyContent: "space-between" }}>
      <div>{contents.content}</div>
      <div style={{ display: "flex", width: "120px", justifyContent: "space-between" }}>
        <div>{contents.date}</div>
        <div style={{ cursor: "pointer" }} onClick={() => deleteContent(contents.id)}>X</div>
      </div>
    </div>
  )
}


export default DoList;