import React from 'react'
import Header2 from './Header2'

function Projects() {

  return (
    <>
      <div className='projects-container'>
        <Header2 />
        <div className='card-container flex row'>
          <div className="flip-card"
          onClick={() => { window.open('http://rand-trivia-game.surge.sh/index.html') }}>
            <div className="flip-card-inner">
              <div className="flip-card-front flex column">
                <h1 id='black'>Random Trivia</h1>
                <hr />
                <div className='image-div project1 background border'></div>
                <hr />
                <div className='technologies2 flex row'>
                  <i className="devicon-javascript-plain colored size"></i>
                  <i className="devicon-css3-plain-wordmark colored size"></i>
                  <i className="devicon-html5-plain-wordmark colored size"></i>
                </div>
              </div>
              <div className="flip-card-back flex column">
                <h1 id='black'>Random Trivia</h1>
                <hr />
                <p className='description'>A quick and fun random trivia game, built with vanilla JavaScript. Click on start, and try to answer as many questions correctly as you can. There is a total of 15 questions, and at the end of the quiz, you can find out how you did.</p>
                <hr />
                <p className='description italic'>Click anywhere in the card to go to the live site, or click the GitHub icon to open both!</p>
                <i
                  onClick={() => { window.open('https://github.com/Andres2321/Trivia-Game') }}
                  className="devicon-github-plain-wordmark colored size"></i>
              </div>
            </div>
          </div>
          <div className="flip-card"
            onClick={() => { window.open('https://goschwifty.surge.sh/') }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front flex column">
                <h1 id='black'>Go Schwifty</h1>
                <hr />
                <div className=" image-div project2 background border"></div>
                <hr />
                <div className='technologies2 flex row'>
                  <i className="devicon-javascript-plain colored size"></i>
                  <i className="devicon-css3-plain-wordmark colored size"></i>
                  <i className="devicon-html5-plain-wordmark colored size"></i>
                  <i className="devicon-react-original-wordmark colored size"></i>
                </div>
              </div>
              <div className="flip-card-back flex column">
                <h1 id='black'>Go Schwifty</h1>
                <hr />
                <p className='description'>This project was inspired by the Uber website. It is an interplanetary transportation service. You choose your location, and drivers based on their ratings. Funds are deducted from your e-wallet automatically.</p>
                <hr />
                <p className='description italic'>Click anywhere in the card to go to the live site, or click the GitHub icon to open both!</p>
                <i
                  onClick={() => { window.open('https://github.com/Andres2321/Space-Uber') }}
                  className="devicon-github-plain-wordmark colored size"></i>
              </div>
            </div>
          </div>
          <div className="flip-card"
            onClick={() => { window.open('http://buystuffhere.surge.sh/') }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front flex column">
                <h1 id='black'>Buy Stuff Here</h1>
                <hr />
                <div className='image-div project3 background border'></div>
                <hr />
                <div className='technologies flex row'>
                  <i className="devicon-javascript-plain colored size"></i>
                  <i className="devicon-css3-plain-wordmark colored size"></i>
                  <i className="devicon-html5-plain-wordmark colored size"></i>
                  <i className="devicon-react-original-wordmark colored size"></i>
                </div>
                <div className='technologies flex row'>
                  <i className="devicon-mongodb-plain-wordmark colored size"></i>
                  <i className="devicon-express-original-wordmark colored size"></i>
                  <i className="devicon-nodejs-plain-wordmark colored size"></i>
                  <i className="devicon-heroku-line-wordmark colored size"></i>
                </div>
              </div>
              <div className="flip-card-back flex column">
                <h1 id='black'>Buy Stuff Here</h1>
                <hr />
                <p className='description'>E-commerce website, with complete CRUD capability. It includes a hand-rolled jwt authentication system. Post your items with a short description and don't forget to include the price.</p>
                <hr />
                <p className='description italic'>Click anywhere in the card to go to the live site, or click the GitHub icon to open both!</p>
                <i
                  onClick={() => { window.open('https://github.com/Andres2321/Space-Uber') }}
                  className="devicon-github-plain-wordmark colored size"></i>
              </div>
            </div>
          </div>
          <div className="flip-card"
            onClick={() => { window.open("animal-rescue.surge.sh "); }}
          >
            <div className="flip-card-inner flex column">
              <div className="flip-card-front flex column">
                <h1 id='black'>Animal Rescue</h1>
                <hr />
                <div className='image-div project4 background border'></div>
                <hr />
                <div className='technologies flex row'>
                  <i className="devicon-javascript-plain colored size"></i>
                  <i className="devicon-css3-plain-wordmark colored size"></i>
                  <i className="devicon-html5-plain-wordmark colored size"></i>
                </div>
                <div className='technologies flex row'>
                  <i className="devicon-react-original-wordmark colored size"></i>
                  <i className="devicon-ruby-plain-wordmark colored size"></i>
                  <i className="devicon-rails-plain-wordmark colored size"></i>
                  <i className="devicon-nodejs-plain-wordmark colored size"></i>
                </div>
              </div>
              <div className="flip-card-back flex column">
                <h1 id='black'>Animal Rescue</h1>
                <hr />
                <p className='description'>A mock website of my local animal shelter. This is a work in progress, as I would like to donate to the organization. It has full CRUD capability, with a sign in and register functionality.</p>
                <hr />
                <p className='description italic'>Click anywhere in the card to go to the live site, or click the GitHub icon to open both!</p>
                <i
                  onClick={() => { window.open('https://github.com/Andres2321/Animal_rescue') }}
                  className="devicon-github-plain-wordmark colored size"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects