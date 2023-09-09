// Dependency imports
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import moment from 'moment-timezone';

// Necessary initializations
const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Get route
app.get("/api", (req, res) => {
	let {slack_name, track} = req.query
	const now = new Date();
	// now.setMinutes(now.getMinutes() + 2);
	// now.setHours(now.getHours()); //
	now.setMinutes(now.getMinutes() +1);
	const utc_time = now.toISOString();
	let current_day = now.toLocaleDateString('en-us', {weekday:'long'});

	res.status(200).json({
		slack_name,
		current_day,
		utc_time,
		track,
		github_file_url: "https://github.com/Dreadedhippy/hng_task_1/blob/main/server.js",
		github_repo_url: "https://github.com/Dreadedhippy/hng_task_1",
		status_code: 200
	})
});

app.get("*", (req, res) => {
	res.status(200).json({
		message: "Hi, This is the default route :)"
	})
});

// Listen on port
app.listen(port, () => {
		console.log(`Server listening on port ${port}`)
})