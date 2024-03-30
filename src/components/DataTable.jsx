import React from 'react'
import { dataList } from '../constants/productData';
import Logo from './Logo';
import { LuMessagesSquare } from 'react-icons/lu';
export default function DataTable() {
    return (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Brands</th>
                <th>Description</th>
                <th>Members</th>
                <th>Categories</th>
                <th>Tags</th>
                <th>New Meeting</th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((data, index) => (
                <tr key={index}>
                  <td>
                    <div className="brand-cell">
                      <input type="checkbox"/>
                      <img src={data.logo} width={'30px'} style={{borderRadius:20,marginLeft:5  }}/>
                      <div className='brandMsg'>
                        <div>{data.name}</div>
                        {data.messages.length>0?<div className='msgLength'><LuMessagesSquare />  {data.messages.length}</div>:null}
                      </div>
                    </div>
                  </td>
                  <td>{data.description}</td>
                  <td>
                    <ul>
                      {data.members.map((member, idx) => (
                            <img key={idx} src={member.profile} width={'30px'} style={{borderRadius:20}}/>
                      ))}
                    </ul>
                  </td>
                  <td>{data.categories.join(', ')}</td>
                  <td>{data.tags.join(', ')}</td>
                  <td>{data.nextMeeting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

