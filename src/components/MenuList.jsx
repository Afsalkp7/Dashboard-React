import { Menu } from 'antd'
import React from 'react'
import {HomeOutlined} from '@ant-design/icons'
import { AiOutlineAntDesign } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoCode } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
export default function MenuList({darkTheme}) {
  return (
    <Menu theme={darkTheme?'dark':'light'} mode='inline' className='menuBar'>

        <Menu.Item key={'design'} icon = {<AiOutlineAntDesign />}>Design Team</Menu.Item>
        <Menu.Item key={'market'} icon = {<HiOutlineSpeakerphone />}>Marketing Team</Menu.Item>
        <Menu.Item key={'development'} icon = {<IoCode />}>Development Team</Menu.Item>
        <Menu.Item key={'create'} icon = {<MdOutlineAddBox />}>
        <div className='listItem'  style={{ color: darkTheme?'white':'black' }}><span className='createTeamHead'>Create a Team</span></div>
        </Menu.Item>
        <Menu.Item key={'folder'} icon = {<IoIosAdd />}>
        <div className='listItem foldersMain' style={{ color: darkTheme?'white':'black' }}><div className='folders'>Folders</div></div>
        </Menu.Item>
        
        <Menu.SubMenu key={"products"} icon = {<FaRegFolder />} title={'Products'}>
            <Menu.Item>Roadmap</Menu.Item>
            <Menu.Item>Feedback</Menu.Item>
            <Menu.Item>Performance</Menu.Item>
            <Menu.Item>Team</Menu.Item>
            <Menu.Item>Analytics</Menu.Item>
            <Menu.Item className='addNewSub'> <CiCirclePlus /> Add new sub</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key={"sales"} icon = {<FaRegFolder />} title={'Sales'}>
            <Menu.Item className='addNewSub'> <CiCirclePlus /> Add sales</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key={"design"} icon = {<FaRegFolder />} title={'Design'}>
            <Menu.Item className='addNewSub'> <CiCirclePlus /> Add Design</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key={'office'} icon = {<FaRegFolder />}>Office</Menu.Item>
        <Menu.Item key={'legal'} icon = {<FaRegFolder />}>Legal</Menu.Item>
        
    </Menu>
  )
}
