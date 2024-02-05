import type { CollapseProps } from 'antd';
import {Collapse} from 'antd'

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eligendi, odit fugiat dicta inventore atque tenetur earum vitae cum repellendus asperiores iste corporis, officiis incidunt adipisci facilis, quam quis consectetur!`

const items:CollapseProps['items'] = [
    {
        key: '1',
        label: 'Community-driven conservation',
        children: <p>{text}</p>
    },
    {
        key: '2',
        label: 'Sustainability',
        children: <p>{text}</p>
    },
    {
        key: '3',
        label: 'Collaboration and partnerships',
        children: <p>{text}</p>
    }
]

const Principles = () => {
  return (
    <div className='p-6 mt-60'>
      <h2 className='text-center text-xl font-semibold mb-2'>Guiding <span className="text-orange">Principles</span> </h2>
      <h1 className='text-center text-4xl font-bold mb-6'>WHAT WE STAND FOR</h1>

      <div className='lg:w-[70%] mx-auto'>
        <Collapse accordion items={items}/>
      </div>
        
    </div>
  )
}

export default Principles
