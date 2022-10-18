import React from 'react'
import Image from 'next/image'
import Card from './Card'

const Clients = () => {
  const card = [
    {
      id: 1,
      text:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.',
      image: '/assets/vector/Will.svg'
    },
    {
      id: 2,
      text:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.',
      image: '/assets/vector/Will.svg'
    },
    {
      id: 3,
      text:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.',
      image: '/assets/vector/Will.svg'
    }
  ]

  return (
    <section className='w-full lg:mx-0 mx-auto'>
      <h2 className='text-center'>Hear From Our Clients</h2>
      <aside className='px-4 md:px-48 mx-auto flex gap-x-10 mt-8 lg:flex-row flex-col gap-y-6'>
        {card.map((card, i) => {
          return <Card key={i} image={card.image} text={card.text}></Card>
        })}
      </aside>
    </section>
  )
}

export default Clients
