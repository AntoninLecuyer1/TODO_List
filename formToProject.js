import { newProject } from "./project.js";

export function formToProject(dialog){
    const title = dialog.querySelector(".titleProject");

    return newProject(title);
}