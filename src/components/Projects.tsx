import { Component, createSignal, For } from 'solid-js';

import Loading from './Loading';

const Projects: Component = () => {
  const [projects] = createSignal<GitHubProject[]>(getMockProjects());

  return (
    <div id="projects" class="projects-section global-padding">
      <div class="container">
        <div class="row text-center">
          <h2>Projects</h2>
          <p class="b-underline"></p>
        </div>
        <div class="row global-margin">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Project Link</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Language</th>
                </tr>
              </thead>
              <tbody>
                <For each={projects()} fallback={<Loading />}>
                  {(project) => (
                    <tr>
                      <td>{project.name}</td>
                      <td>{project.description}</td>
                      <td>
                        <a class="btn btn-secondary" target="_blank" rel="noopener noreferrer" href={project.htmlUrl}>
                          Go to project
                        </a>
                      </td>
                      <td>{new Date(project.createdAt).toLocaleDateString()}</td>
                      <td>{project.language}</td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const getMockProjects = () => {
  const projects: GitHubProject[] = [];

  for (let index = 0; index < 20; index++) {
    projects.push({
      name: `Spoof Project ${index}`,
      createdAt: new Date().toDateString(),
      description: 'A place holder project since the real ones failed to load',
      htmlUrl: 'https://github.com/aburke15?tab=repositories',
      language: 'Typescript',
    });
  }

  return projects;
};

interface GitHubProject {
  name: string;
  createdAt: string;
  description: string;
  htmlUrl: string;
  language: string;
}
