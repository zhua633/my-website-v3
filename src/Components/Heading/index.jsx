function Title({text}) {
    return (
      <div  id={text} >
      <div class="relative w-full justify-center flex p-5">
          <span class="mb-4 font-bold text-gray-900 dark:text-white lg:text-4xl underline underline-offset-3 decoration-8 decoration-indigo-500 dark:decoration-indigo-600">{text}</span>
      </div>
      </div>
    )
    }
  export default Title;