import LogoIcons from "../Logos";
function Title() {
  return (
    <div class="relative flex items-center justify-center h-screen">
    <div class="text-center">
        <h1 class="space-x-5 flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <p>Hi,I'm</p>
          <div class="animate-bounce">
          <mark class=" px-2 text-white bg-indigo-500 rounded dark:bg-indigo-400">
            Anvilly
          </mark>
          </div>
          <p>Huang</p>
        </h1>
        <div class="p-5"><p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">A graduate SWE. Ice cream enthusiast.</p></div>
        <LogoIcons/> 
    </div>
    </div>
  )
  }
export default Title;