export function getFormProject(){
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    dialog.appendChild(form);

    const title = document.createElement("input");
    const labelTitle = document.createElement("label");
    title.setAttribute("type","text");
    title.setAttribute("id","titleProject");
    labelTitle.setAttribute("for","titleProject");
    labelTitle.textContent = "Title of project";
    form.appendChild(labelTitle);
    form.appendChild(title);

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("value","Submit form");
    form.appendChild(submitButton);

}