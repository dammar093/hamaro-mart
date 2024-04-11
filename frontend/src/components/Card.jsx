import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import imgae from "../assets/images.jpeg"
import Rating from './Rating'

const Card = () => {
  return (
    <Link to={"/product/id=jksdkds"} className='min-w-[170px] ms:min-w-[200px] max-w-[220px] h-[300px] bg-white shadow hover:shadow-2xl rounded flex justify-center p-1 flex-col'>
      <div className='full h-full overflow-hidden mx-auto'>
        <img className='w-full h-full object-cover rounded-md' src={imgae} alt="" />
      </div>
      <div className='w-full p-1 text-[14px] font-medium'>
        <h2 className='whitespace-nowrap text-ellipsis overflow-hidden text-gray-700 text-[16px]'>Ipjahksjdksldjlssd</h2>
        <p className='text-sm text-gray-600 whitespace-nowrap text-ellipsis overflow-hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique inventore molestiae nemo! Dolores cum laboriosam ex reiciendis magni omnis quis exercitationem consectetur doloribus quidem libero recusandae, vitae rerum quia fugiat voluptatum! Labore assumenda placeat, autem, natus non sequi eum voluptate fugiat unde aspernatur ratione consectetur. Id voluptatum ab dolor nulla cumque nobis voluptatem iusto, voluptas, et aut officia delectus distinctio beatae eius neque assumenda. Dolorum culpa unde ducimus nemo facere sint dicta perspiciatis dolore, recusandae molestiae obcaecati sit eum nobis a voluptatum adipisci ab harum! Corrupti, repudiandae neque! Cupiditate suscipit porro debitis autem explicabo perspiciatis dicta sunt tenetur recusandae id distinctio enim vel eveniet similique, officiis ad, quam numquam saepe. Odio magni nisi nulla, unde beatae quod, et dignissimos fugiat aut alias quaerat! Consequuntur rem molestiae dolore iusto deserunt. Eveniet explicabo repellat excepturi nemo ad quia aperiam. Quisquam dolorem deleniti molestiae ut blanditiis voluptas corporis fuga cumque incidunt praesentium est unde libero doloremque debitis fugiat modi veniam nam ratione a, totam excepturi! Modi facere totam blanditiis consequuntur illum, quam officia nemo aut, rem, labore ut nisi quas cupiditate. Veniam provident dolores aliquid enim cum quia praesentium eius animi, vitae quaerat quas at. Reprehenderit laboriosam autem ipsa dolorem laudantium, commodi eum?</p>
        <div className='flex items-center gap-1 text-[12px]'>
          <Rating />
          <span className=' text-gray-600'>(100)</span>
        </div>
        <div className='flex gap-2 items-center'>
          <span className='text-gray-700 font-medium text-[14px]'>Rs.1200</span>
          <span className='text-gray-600 line-through text-[12px] '>Rs.2000</span>
        </div>
      </div>
    </Link>
  )
}

export default Card