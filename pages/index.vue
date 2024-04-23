<template>
  <div class="index-container">
    <AvatarWithTitle>
      <h1 class="index-header">👋 😄</h1>
      <h1 class="index-header">Hello, I'm Nicolas Moccagatta</h1>

      <div class="index-links-container">
        <a href="mailto:nicomoccagatta@gmail.com">
          <img src="https://camo.githubusercontent.com/9365691d4c42d3a0ad4f33627b887130c0405006239bb33f3543f6f278ad80eb/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d6e69636f6d6f636361676174746140676d61696c2e636f6d2d6331343433383f7374796c653d666c61742d737175617265266c6f676f3d476d61696c266c6f676f436f6c6f723d7768697465266c696e6b3d6d61696c746f3a6e69636f6d6f636361676174746140676d61696c2e636f6d" alt="Gmail Badge" data-canonical-src="https://img.shields.io/badge/-nicomoccagatta@gmail.com-c14438?style=flat-square&amp;logo=Gmail&amp;logoColor=white&amp;link=mailto:nicomoccagatta@gmail.com" style="max-width: 100%;">
        </a>
        <a href="https://www.linkedin.com/in/nicomoccagatta/" rel="nofollow">
          <img src="https://camo.githubusercontent.com/738d97a92fe74c44737514df4ed22bbe7e3236d42d7caf9b126e2d787571dce7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d6e69636f6d6f63636167617474612d626c75653f7374796c653d666c6174266c6f676f3d4c696e6b6564696e266c6f676f436f6c6f723d7768697465" alt="Linkedin" data-canonical-src="https://img.shields.io/badge/-nicomoccagatta-blue?style=flat&amp;logo=Linkedin&amp;logoColor=white" style="max-width: 100%;">
        </a>
        <a href="https://github.com/nicomoccagatta/">
          <img src="https://camo.githubusercontent.com/afc25a263a764add179f758885c46d2fc55e6736faece61467127b5626db21a6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d6e69636f6d6f63636167617474612d626c61636b3f7374796c653d666c6174266c6f676f3d476974687562266c6f676f436f6c6f723d7768697465" alt="GitHub followers" data-canonical-src="https://img.shields.io/badge/-nicomoccagatta-black?style=flat&amp;logo=Github&amp;logoColor=white" style="max-width: 100%;">
        </a>
      </div>
    </AvatarWithTitle>

    <span class="index-item">
      I'm a seasoned Software Engineer with over 7 years of experience in Full Stack Software Development, specializing in Frontend Web Technologies. Holding a Bachelor's degree in Engineering from the University of Buenos Aires, where I majored in Computer Science, I've had the privilege of contributing to various projects across different companies, from startups to industry giants like Mercado Libre, Medallia, and PayPal.
    </span>

    <span class="index-item">
      Throughout my career, I've developed a deep understanding of crafting user-centric experiences using technologies such as React, Node, TypeScript, Redux, GraphQL, and more... My involvement spans the entire software development lifecycle, from Discovery and Analysis to Design, Implementation, Testing, Deployment, Monitoring and Maintenance. This comprehensive perspective ensures that I'm not only able to deliver solutions that meet user needs but also contribute effectively to the long-term success of projects.
    </span>

    <span class="index-item">
      While I take pride in my experience and skills, I remain committed to continuous learning and improvement. I'm eager to bring my expertise to a top tech company where I can collaborate with like-minded individuals and tackle new challenges that push the boundaries of innovation.
    </span>
  </div>
</template>

<style scoped>
.index-container {
  display: block;
  background: linear-gradient(270deg, rgba(255,0,0,0.5746673669467788) 0%, rgba(253,29,29,0.5298494397759104) 50%, rgba(14,120,223,0.5158438375350141) 100%);
  background-size: 600% 600%;
  animation: AnimatedBackground 3s ease infinite;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
@keyframes AnimatedBackground {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}
.index-header {
  text-align: center;
  display: block;
}
.index-links-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px 0;
}
.index-item {
  display: block;
  padding-bottom: 15px;
}
</style>
