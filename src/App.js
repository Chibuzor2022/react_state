import React, { Component } from "react";
import "./App.css";

// class based component with person object
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {
				fullName: "Jessica Gray",
				bio: "A Professional Software Developer who loves to build things.",
				imgSrc: "/images/profileImage.jpg",
				profession: "Software Developer",
			},
			shows: false,
			timeSinceMount: 0,
		};

		this.toggleShow = this.toggleShow.bind(this);
	}

	componentDidMount() {
		// // Start a timer that runs every 1000 milliseconds

		this.interval = setInterval(() => {
			// Update the state by incrementing 'timeSinceMount' by 1

			this.setState((prevState) => ({
				timeSinceMount: prevState.timeSinceMount + 1,
			}));
		}, 1000);
	}
	// to clear the interval
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	// to update the 'shows' value to its opposite
	toggleShow() {
		this.setState((prevState) => ({
			shows: !prevState.shows,
		}));
	}

	render() {
		const { person, shows, timeSinceMount } = this.state;

		return (
			<div className="App" style={{ padding: "12px", textAlign: "center" }}>
				<h1>Person Profile</h1>

				{/* toggle button to show/hide the profile */}

				<button onClick={this.toggleShow}>
					{shows ? "Hide Profile" : "Show Profile"}
				</button>

				{/* to show the profile image and details */}
				{shows && (
					<div style={{ marginTop: "10px" }} className="profile">
						<img
							src={person.imgSrc}
							alt="Profile"
							style={{ width: "130px", borderRadius: "15px" }}
						/>
						<h2>{person.fullName}</h2>
						<h4>{person.profession}</h4>
						<p>{person.bio}</p>
					</div>
				)}

				{/* to show the  time interval since the last component was mounted */}
				<p style={{ marginTop: "30px" }}>
					Time since component mounted: {timeSinceMount} seconds
				</p>
			</div>
		);
	}
}

export default App;
