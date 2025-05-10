function Title({text}) {
    return (
      <div  id={text} >
      <div class="relative w-full justify-center flex p-5">
          <span class="mb-4 font-bold text-white lg:text-4xl underline underline-offset-3 decoration-8 decoration-indigo-600">{text}</span>
      </div>
      </div>
    )
    }
  export default Title;