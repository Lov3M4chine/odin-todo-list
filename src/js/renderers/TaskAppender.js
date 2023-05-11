export default function taskAppender(elements, container) {
    container.appendChild(elements.buttonWrapper);
    elements.buttonWrapper.appendChild(elements.taskHtml);
    elements.taskHtml.appendChild(elements.taskBasic);
    elements.taskBasic.appendChild(elements.taskCheckboxNameDiv);
    elements.taskCheckboxNameDiv.appendChild(elements.taskCheckbox);
    elements.taskCheckboxNameDiv.appendChild(elements.taskName);
    elements.taskBasic.appendChild(elements.taskDueDate);
    elements.taskHtml.appendChild(elements.taskDetails);
    elements.taskDetails.appendChild(elements.taskDescription);
    elements.taskDescription.appendChild(elements.taskDescriptionLabel);
    elements.taskDescription.appendChild(elements.taskDescriptionText);
    elements.taskDetails.appendChild(elements.taskPriority);
    elements.taskPriority.appendChild(elements.taskPriorityLabel);
    elements.taskPriority.appendChild(elements.taskPriorityText);
    elements.taskDetails.appendChild(elements.lastLineDiv);
    elements.lastLineDiv.appendChild(elements.taskProject);
    elements.taskProject.appendChild(elements.taskProjectLabel);
    elements.taskProject.appendChild(elements.taskProjectText);
    elements.lastLineDiv.appendChild(elements.editButton);
        
}