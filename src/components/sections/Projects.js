import React from "react"
import Tabs from '../components/2/Tabs'
import Project from '../components/2/Project'

function IndexPage() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <Tabs> 
       <div label="2020"> 
       <div className="ProjectGroup">
      <Project 
  title="ASSIZT"
  text="ASSIZT is an user personalised portal for Health And Safety Management In The Workplace and is currently in early development "
  date="Q4 2020"
  url="https://www.chrisswinton.co.uk/projects/assizt/"
  id="ASSIZT"
  image={require('../compontents/images/projects/assizt.svg')} />
      <Project 
  title="Swintons Predictions League"
  text=" This is a project started as a family where we try to predict which teams win in the premier league and complete to get the most predictions correct "
  date="Q4 2020"
  url="https://www.chrisswinton.co.uk/projects/league/"
  id="PL"
  image={require('../compontents/images/projects/pl.svg')} />
      <Project 
  title="SolidRoute Website"
  text=" SolidRoute is a bespoke software development company that supplies
          systems to waste management organisations across the nation.
          I am currently in the process of creating a website for the
          company that is aiming to be launched soon."
  date="Q4 2020"
  url=""
  id="SolidRoute"
  image={require('../compontents/images/projects/website.png')} />
      <Project 
  title="Smart Home Help"
  text=" I have started Smart Home Help, offering support to
          people with their technology at home, providing them with
          solutions to get them up and running with their tech with
          tailored preferences."
  date="Feburary 2020"
  url="https://www.smart-home-help.co.uk/"
  id="smarthomehelp"
  image={require('../compontents/images/projects/smarthomehelp.svg')} />
       <Project 
  title="Beaverbrooks"
  text="As part of a task for a role, I was asked to create a campaign for Gold Jewellery to showcase Beaverbrooks 9ct/ 18ct gold jewellery pieces creating a landing page to inspire and inform customers before they buy highlighting the Beaverbrooks difference – product quality, careful selection, style/ trend-led pieces"
  date="January 2020"
  url="https://www.chrisswinton.co.uk/projects/beaverbrooks/"
  id="Beaverbrooks"
  image={require('../compontents/images/projects/beaverbrooks.png')} />
  </div>
       </div> 
       <div label="2019"> 
       <div className="ProjectGroup">
      <Project 
  title="UCLan Subjects Page"
  text="As part of my work for UCLan I was assigned the task of creating a subject’s page that would allow students to review the subjects that the university have to offer in order to help them decide on what course is best suited to them. These pages demonstrate to the user the expertise in the field along with people’s experiences who have studied and academics."
  date="November 2019"
  url="https://xd.adobe.com/view/55c478a8-d319-4703-7058-33a044c5cd27-23f5/?fullscreen"
  id="UCLan"
  image={require('../compontents/images/projects/uclan.png')} />
      <Project 
  title="GMail Alexa Skill"
  text="As part of my Dissertation Project I built an Alexa application that would allow users to have their emails read back to them. Click the link in order to find my guide on how I was able to build this Alexa Skill and have a go at building the application yourself"
  date="May 2019"
  url="https://www.chrisswinton.co.uk/projects/alexa/"
  id="GMail"
  image={require('../compontents/images/projects/gmail.png')} />
      <Project 
  title="Eye Sight"
  text="As part of a UX Module, I was tasked with creating an emphatic application using UXD methods to research, design and simulate the application using visual prototyping tools and techniques. I decided to build Eye Care, an Application that would allow users to view their prescriptions for their eyes, book appointments with their opticians as well as including tutorials to help users take care of their eyes."
  date="May 2019"
  url="https://xd.adobe.com/embed/3aacf42b-e010-4c13-65a0-3654546607c7-4c9d/?fullscreen"
  id="eyesight"
  image={require('../compontents/images/projects/eyesight.png')} />
      <Project 
  title="SCRAN"
  text="As part of an Enterprise Module, me and a group of piers made a new website along with some advertisments for a University Society called SCRAN, SCRAN was set up in the summer of 2016 by a group of students at UCLan to provide nutrition and cooking related resources and support for students, both on campus and online."
  date="May 2019"
  url="https://scranpreston.co.uk/"
  id="SCRAN"
  image={require('../compontents/images/projects/scran.png')} />
  </div>
       </div> 
       <div label="2018"> 
       <div className="ProjectGroup">
      <Project 
  title="Student Radar"
  text="As part of an Code Design assignment, I was tasked to build a radar that would show students on the campus, where they are live and also allow you to see who that student is. However, without the actual data we have had to replicate it with randomised array, but it works just like it would if we had the real data"
  date="May 2018"
  url=""
  id="Radar"
  image={require('../compontents/images/projects/radar.svg')} />
      <Project 
  title="UCLan Catering Application"
  text="As part of an Application Design & Delivery assignment I was tasked with a group to develop an UX Prototype for the university's catering department"
  date="January 2018"
  url=""
  id="UCLan"
  image={require('../compontents/images/projects/uclan.png')} />
      <Project 
  title="R2D2"
  text="As part of an Code Design task, I was tasked to build a R2D2 vector from code using HTML Canvas"
  date="January 2018"
  url=""
  id="R2D2"
  image={require('../compontents/images/projects/r2d2.png')} />
  </div>
       </div> 
     </Tabs> 
    </section>
  )
}

export default IndexPage