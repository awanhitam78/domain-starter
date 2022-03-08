import React from 'react';
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const NINJA_LINK = `https://testnets.opensea.io/assets/mumbai/0x7dbbac81d024f3a31622a584064f3f6d4e68c47b/0`;
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  return (
		<div className="App">
			<div className="container">

				<div className="header-container">
					<header>
            <div className="left">
              <p className="title">🐱‍👤 <a 
href={NINJA_LINK}
target="_blank"
rel="noreferrer">
awanhitam.ninja</a> 👈😁👌</p>
              <p className="subtitle">Your immortal API on the blockchain!</p>
            </div>
					</header>
				</div>

        <div className="footer-container">
					<img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
					<a
						className="footer-text"
						href={TWITTER_LINK}
						target="_blank"
						rel="noreferrer"
					>{`built with @${TWITTER_HANDLE}`}</a>
				</div>
			</div>
		</div>
	);
}

export default App;
