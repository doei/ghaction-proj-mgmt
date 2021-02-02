const core = require("@actions/core")
const github = require("@actions/github")

try {
	const token = core.getInput('repo-token')
	const { eventName, nodeId, url } = getActionData(github.context);
} catch (error){
	core.setFailed(error.message)
}

