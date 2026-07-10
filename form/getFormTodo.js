

export function getFormTodo(){
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    dialog.appendChild(form);

    const title = document.createElement("input");
    const labelTitle = document.createElement("label");
    title.setAttribute("type","text");
    title.setAttribute("id","titleForm");
    labelTitle.setAttribute("for","titleForm");
    labelTitle.textContent = "Title";
    form.appendChild(labelTitle);
    form.appendChild(title);

    const description = document.createElement("textarea");
    const labelDesc = document.createElement("label");
    description.setAttribute("id","descriptionForm");
    labelDesc.setAttribute("for","descriptionForm");
    labelDesc.textContent = "Description";
    form.appendChild(labelDesc);
    form.appendChild(description);

    const dueDate = document.createElement("input");
    const labelDueDate = document.createElement("label");
    dueDate.setAttribute("type","date");
    dueDate.setAttribute("id","dueDateForm");
    labelDueDate.setAttribute("for","dueDateForm");
    labelDueDate.textContent = "Due date";
    form.appendChild(labelDueDate);
    form.appendChild(dueDate);

    const priorityLow = document.createElement("input");
    const labelPriorityLow = document.createElement("label");
    priorityLow.setAttribute("type","radio");
    priorityLow.setAttribute("name","priority");
    priorityLow.setAttribute("id","priorityLow");
    priorityLow.setAttribute("value","low");
    labelPriorityLow.setAttribute("for","priorityLow");
    labelPriorityLow.textContent = "Low";
    form.appendChild(labelPriorityLow);
    form.appendChild(priorityLow);
    
    const priorityAvg = document.createElement("input");
    const labelPriorityAvg = document.createElement("label");
    priorityAvg.setAttribute("type","radio");
    priorityAvg.setAttribute("name","priority");
    priorityAvg.setAttribute("id","priorityAvg");
    priorityAvg.setAttribute("value","average");
    labelPriorityAvg.setAttribute("for","priorityAvg");
    labelPriorityAvg.textContent = "Average";
    form.appendChild(labelPriorityAvg);
    form.appendChild(priorityAvg);

    const priorityHigh = document.createElement("input");
    const labelPriorityHigh = document.createElement("label");
    priorityHigh.setAttribute("type","radio");
    priorityHigh.setAttribute("name","priority");
    priorityHigh.setAttribute("id","priorityHigh");
    priorityHigh.setAttribute("value","high");
    labelPriorityHigh.setAttribute("for","priorityHigh");
    labelPriorityHigh.textContent = "High";
    form.appendChild(labelPriorityHigh);
    form.appendChild(priorityHigh);

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("value","Submit form");
    form.appendChild(submitButton);



    return dialog;
}