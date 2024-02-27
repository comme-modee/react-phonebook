import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux'

const SearchBox = () => {
    const [searchName, setSearchName] = useState('')
    const dispatch = useDispatch()

    const search = () => {
        dispatch({type:"SEARCH_NAME", payload:{keyword: searchName}})
        console.log(searchName);
    }
  return (
    <Row className='search-box'>
        <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(e) => setSearchName(e.target.value)}/>
        </Col>
        <Col lg={2}>
            <Button onClick={search}>찾기</Button>
        </Col>
    </Row>
  )
}

export default SearchBox