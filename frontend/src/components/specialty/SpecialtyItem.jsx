import React from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';
import { url } from '../../api/api';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../store/reducer/searchReducer';
import { useNavigate } from 'react-router-dom';

const SpecialtyItem = ({id, name}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const filterBySpecialty = async (id) => {
    const res = await axios.post(`${url}/specialty`, {id: id})
    dispatch(searchActions.filterBySpecialty(res.data))
    navigate('name');
  }

  return (
    <motion.div onClick={() => filterBySpecialty(id)} name={id} whileHover={{scale: 1.02, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className=' bg-[#F6F4F4] w-[208px] py-12 text-center rounded-md cursor-pointer'>
        <span className=' px-2 text-sm font-medium'>{name.replace(/\(.*\)/, '')}</span>
    </motion.div>
  )
}

export default SpecialtyItem