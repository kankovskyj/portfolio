const projects = [
    {
      name: "UNIPAY",
      id: 1
    },
    {
      name: "AIKO MUSIC",
      id: 2
    },
    {
      name: "JWM",
      id: 3
    },
    {
      name: "PELMET.EU",
      id: 4
    },
    {
        name: "PELMET.EU",
        id: 4
      },
      {
        name: "PELMET.EU",
        id: 4
      },
      {
        name: "PELMETfsefsfsf d.EU",
        id: 4
      }
  ]

  const videos = [
    {
        title: "WEB DEVELOPMENT",
        description: "Go behing the scenes of my technical process",
        url: "videos/movie.mp4"
    },
    {
        title: "UX DESIGN",
        description: "See how your product can get a facelift users will love",
        url: "https://via.placeholder.com/50"
    },
]
  
  
  function Header() {
      return (
          <div className="header">
              <div className="logo-wrapper">
                <p className="logo">KANKOVSKY</p>
                <h1>Crafting unique digital experiences that bring revenue</h1>
              </div>
              <div className="hamburger"></div>
          </div>
      )
  }

  function VideoControls() {
      return (
          <div className="controls-wrapper">
            <img className="arrow-left"  src="https://via.placeholder.com/50"/>
            <div className="play-stop"> 
            PLAY
            </div>
            <img className="arrow-right"  src="https://via.placeholder.com/50"/>

          </div>
      )
  }

  function VideoBlock(props) {
      return (
          <div className="video-block">

              <div className="video-wrapper">
                <video width="500" autoplay>
                <source src= { videos.url } type="video/mp4" />
                </video>

                <div className="bars">
                    <div className="bar selected"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                
              </div>
              
              <div className="description-wrapper">
                <div className="timer"></div> 
                <h2>{ videos.heading }</h2>
                <p>Go behing the scenes of my technical process</p> 
                <VideoControls />
              </div>

          </div>
      )
  }

  function BottomElements(props) {
    return (
        <div className="bottom">
            
            <img className="arrow-down" src="images/chevron.svg"/>
            <div className="project-slider">
            <div className="overlay-top"></div>
              {props.initialProjects.map( projects => 
                <p id={projects.id} key={projects.id}>
                {projects.name}
                </p>
                )}
              <div className="overlay-bottom"></div>
            </div>
        </div>
    )
}
  
  
ReactDOM.render(
    <div className="landing">
        <Header />
        <VideoBlock Videos={videos}/>
        <BottomElements initialProjects={projects} />
    </div>,
    document.getElementById('root')
  );