// Dependency imports
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

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
app.get("/", (req, res) => {
	let {slack_name, track} = req.query;
	let date = new Date();
	let current_day = date.toLocaleDateString('en-us', {weekday:'long'});

	res.status(200).json({
		slack_name,
		current_day,
		utc_time: date,
		track,
		github_file_url: "https://github.com/Dreadedhippy/hng_task_1/blob/main/server.js",
		github_repo_url: "https://github.com/Dreadedhippy/hng_task_1",
		status_code: 200
	})
});

// Listen on port
app.listen(port, () => {
		console.log(`Server listening on port ${port}`)
})