import Card from "../Helpers/card/index";
function Projects() {
  return (
    <div className="relative w-full justyify-between flex flex-wrap gap-y-5 p-5">
    <div className="w-full flex p-10 justify-between">
      <Card title="To-do List" description="Gamify daily tasks and display daily progress using percentage bar in Golang, to bring a little more productivity and joy to your life ✨. Still under construction!" link="https://github.com/zhua633/go-to-do-list" imglink="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/go-old/go-old.svg" />
      <Card title="OpenAI Atari Games" description="Used TensorFlow to train OpenAI classic control and Atari games using reinforcement learning. Optimised the scoring and used AI to teach computer to play games!" link="https://github.com/zhua633/COMPSYS726-Reinforcement-Learning" imglink="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.svg"/>
    </div>
    <div className="w-full flex p-10 justify-between">
      <Card title="Old Personal Website" description="Old legacy personal website developed using basic CSS and React concepts. This website is a better implementation of the latest learnt skills." link="https://zhua633.github.io/my-website/" imglink="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.svg"/>
      <Card title="Tic Tac Toe" description="Used alpha beta pruning to teach the computer to play a game of Tic Tac Toe. Be careful because the computer almost always win!" link="https://github.com/zhua633/Tic-Tac-Toe" imglink="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.svg"/>
    </div>
    </div>
  )
  }
export default Projects;