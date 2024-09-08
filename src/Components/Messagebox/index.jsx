import React from 'react'
import { EmojiIcon } from '../../svg/Emoji'
import { ImageIcon } from '../../svg/Image'
import msgimg from '../../assets/trail.jpg'
import msgimg2 from '../../assets/trail2.jpg'

const MessageBox = () => {
  return (
    <div className='w-full bg-white'>
        <div className=' bg-[#232323] py-2 rounded-md mx-5 mt-3 '> 
            <div className='ml-5 flex items-center gap-5'>
                <div className='w-11 h-11 bg-orange-300 rounded-full'></div>
                <div className='text-white'>
                    <span className='font-robotoRegular'>MD Rifat</span>
                </div>
            </div>
        </div>
        <div className='h-[300px] bg-[#FFFFFF]  mx-5 overflow-x-auto'>
            {/* sender site */}
           <div className='w-[60%] ml-auto'>
            <div className='bg-blue-500 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 text-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias illum magnam ratione, provident ipsa ab beatae eaque molestiae sequi necessitatibus. Repellendus saepe sit laboriosam? Rem sed ipsum odit. Molestiae, commodi.  
            </div>
           </div>
            {/* receicer site */}
           <div className='w-[60%] mr-auto'>
            <div className='bg-stone-500 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 text-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores possimus fuga ex. Eveniet facilis quae perspiciatis iure dolorem magnam adipisci, doloremque iusto alias sit asperiores modi quia, minima molestias veritatis dolore culpa itaque. Praesentium facere, quaerat nam earum reprehenderit cupiditate velit magni laboriosam. Nesciunt consequuntur, nihil natus, non voluptates, deserunt reiciendis molestiae eius culpa adipisci vitae sit blanditiis deleniti omnis. Quam architecto nesciunt eius obcaecati? Error quidem praesentium eveniet unde similique atque natus blanditiis quisquam delectus omnis laudantium voluptates, sequi officia dolorum nihil ut cum ducimus nam cumque voluptatem aliquam iusto? At, consectetur animi cupiditate hic asperiores rerum repellendus facere totam eum perspiciatis error. Laudantium facilis, suscipit accusamus recusandae quaerat hic tenetur reiciendis similique adipisci enim ducimus voluptates corrupti veritatis neque animi ipsa ipsam, impedit minima repellat vitae quasi alias perspiciatis? Aliquam vel dolore quibusdam molestias. Minus, nesciunt commodi ad culpa sed vitae excepturi esse reiciendis, veritatis ullam earum quibusdam nostrum adipisci doloremque, libero porro! Quos molestias officia asperiores esse sunt harum, excepturi iusto, maxime numquam tempore a. Provident, iste ea alias, inventore dolorum ipsa a nemo consequatur, omnis rem qui. In aliquid nisi rem illum, repellendus officia, expedita sunt explicabo quidem fugit porro labore. Veritatis magnam quam assumenda dicta natus ducimus, voluptate id quia eum ipsa neque illum perspiciatis amet eaque, aut sequi culpa tempore temporibus iste quod iure laudantium nesciunt! Necessitatibus, placeat recusandae ratione aut suscipit et. Quisquam ullam deleniti soluta voluptatem eveniet minima quasi exercitationem doloribus earum vel est accusantium, cupiditate quod impedit iusto! Totam ratione, cupiditate quia rerum sunt, et sapiente blanditiis dicta quae deserunt officia beatae dolor quis aperiam corrupti. Mollitia ut officiis harum natus eos doloribus tenetur consectetur quod veritatis expedita quia dolorem nemo corrupti illo molestias, in odit quo! Facilis beatae rerum ipsa libero, voluptatum dolor perferendis laborum vero, enim ducimus quaerat iusto ex? Voluptate quisquam quidem voluptas illum voluptatibus, at molestias quos, quo minus quae numquam repellendus cupiditate unde maxime qui est eaque, dolorum eveniet distinctio dignissimos? Fugiat nesciunt ipsum perspiciatis dolores sint quibusdam saepe, optio doloremque itaque dolor eveniet est reprehenderit sapiente voluptas molestiae cum minima? Ullam et voluptas, ducimus error neque quidem tempora atque perferendis aliquam ratione deleniti, obcaecati eius excepturi ut doloribus nulla! Expedita similique repellendus laboriosam cupiditate magnam, harum, voluptatem vel quod excepturi reprehenderit maxime. Commodi cupiditate aliquam eum aut, doloremque sunt culpa tempora ipsa exercitationem suscipit modi veniam quasi in nesciunt magni facilis maxime placeat, consequatur quas. Inventore tempora ipsum sapiente, dicta voluptatibus blanditiis dolore amet voluptate omnis perspiciatis quibusdam et! In eaque reprehenderit provident delectus quasi. Impedit minima consequuntur rerum eligendi voluptatum iure dicta. Dolor repudiandae inventore neque omnis blanditiis vero illum, saepe enim. Assumenda corporis quam illum, rerum eligendi repudiandae veritatis quasi est eius minus consectetur non vitae earum nihil! Asperiores sequi quam, natus veritatis facilis similique esse! Natus, ducimus! Ipsam totam aliquam labore odit unde rerum? Officiis culpa dolore consequatur exercitationem ex minima voluptatum deserunt harum blanditiis quasi neque magni veritatis, ratione molestias. Velit, officia esse. Veniam aspernatur quisquam nam officia, ipsa quidem maiores!
            </div>
           </div>
            {/* sender site img */}
           <div className='w-[60%] ml-auto overflow-hidden'>
            <div className='bg-blue-500 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 '>
                <img src={msgimg2}  className='w-full h-full object-cover rounded-md ' alt="" />
            </div>
           </div>
            {/* receicer site img */}
           <div className='w-[60%] mr-auto overflow-hidden'>
            <div className='bg-stone-300 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 '>
                <img src={msgimg}  className='w-full h-full object-cover rounded-md' alt="" />
            </div>
           </div>
           
        </div>
        <div className='bg-[#F5F5F5] mx-5 py-3 shadow-lg rounded-md flex items-center justify-center'> 
        <div className='w-[450px] bg-[#FFFFFF]  flex justify-center rounded-md gap-2'>
            <div className='flex justify-center items-center gap-2'>
                <EmojiIcon/>
                <ImageIcon/>
            </div>
                <input className='py-2 px-2 outline-none w-[60%]' type="text" placeholder='type anything' />
                <button className=' font-robotoRegular px-7 bg-[#4A81D3] rounded-md text-white'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default MessageBox