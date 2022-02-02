import React, { useState } from 'react'
import DoContent from '../../component/doContent.js'
import DoAdd from '../../component/doAdd.js'

function SomeList() {

  const [doList, setDoList] = useState([
    // { content: "react 기초 익히기", date: "2022-02-02" },
    // { content: "project 리팩토링", date: "2022-02-02" },
    // { content: "노션 정리", date: "2022-02-03" }
  ]);
  const addToList = (DoContent) => {
    setDoList([
      ...doList,
      DoContent

    ])
  };
  const deleteContent = (id) => {
    setDoList(doList.filter(element => {
      return element.id !== id
    })
    )
  };
  const renderDoList = doList.length ? doList.map(element => {
    return (
      <DoContent
        contents={element}
        key={element.id}
        deleteContent={deleteContent}
      />
    )
  }) : "리스트가 없습니다."



  return (
    <div>
      <DoAdd addToList={addToList} />
      {renderDoList}
    </div>
  );
}

export default SomeList;
