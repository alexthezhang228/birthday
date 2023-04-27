/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-19 15:27:14
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-27 23:15:25
 * @FilePath: /birthday-buddy/starter/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import data from './data'
import { useState } from 'react';
import List from './list';
const App = () => {
  const [people,setPeople]=useState(data)
  const handleClick=()=>{
    setPeople([])
  }
  return (
   <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}></List>
      <button type='button' className='btn btn-block' onClick={handleClick}>clear all</button>
    </section>
   </main>
    
    
  )
 
};
export default App;
