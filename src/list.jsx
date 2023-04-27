/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-27 23:01:24
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-27 23:08:42
 * @FilePath: /birthday-buddy/starter/src/list.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Person from './person'
const List=({people})=>{
  return (
    <section>
      {people.map((person)=>{
        return (
          <Person key={person.id} person={person}></Person>
        )
      })}
    </section>
  )
}
export default List