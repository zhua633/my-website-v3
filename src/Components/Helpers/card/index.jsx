import React from 'react';

const Card = ({title, description, link, imglink}) => {
  return (
    
<div class="w-2/5 border bg-white border-gray-199 rounded-lg drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
    <div class="p-8 gap-y-5">
        <div class="flex items-center justify-start space-x-5 mb-6">
            <img class=" w-7 h-7" src={imglink} alt="" />
                        <a href={link}>
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {title}</h5>
            </a>
        </div>

        <div><p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{description}</p></div>
        <div class="flex justify-end w-full">
        <a href={link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>
    </div>
</div>

  )
}

export default Card; 