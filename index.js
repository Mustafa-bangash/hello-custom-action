const core = require('@actions/core');
const github = require('@actions/github');

try {
  const name = core.getInput('who-to-greet');
  const greeting = `Hello, ${name}! This message comes from my custom JavaScript action.`;

  core.info(greeting);
  core.info(`Triggered by ${github.context.actor} via ${github.context.eventName} in ${github.context.repo.owner}/${github.context.repo.repo}`);

  core.setOutput('greeting', greeting);
  core.setOutput('time', new Date().toTimeString());
} catch (error) {
  core.setFailed(error.message);
}
