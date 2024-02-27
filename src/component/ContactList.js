import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const { searchKeyword, contactList } = useSelector((state) => state)
    let [filteredList, setFilteredList] = useState([])
    
    useEffect(()=>{
        if(searchKeyword === ''){
            setFilteredList(contactList)
            console.log(contactList);
        } else {
            let list = contactList.filter((item) => item.name.includes(searchKeyword))
            setFilteredList(list)
        }
    },[searchKeyword, contactList])
  return (
    <div>
        <SearchBox/>
        {filteredList.map((item, index)=><ContactItem item={item} key={index}/>)}
    </div>
  )
}

export default ContactList