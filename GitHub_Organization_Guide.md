# GitHub Organization Guide

Welcome to our GitHub Organization! This document provides essential guidance on how to effectively use GitHub for collaboration within our team.

## How to Clone a Repository

1. **Navigate to the Repository**: Locate the repository on GitHub.
2. **Clone the Repository**: Use the "Clone or download" button, then copy the URL provided.
3. **Use Git Command**: In your terminal or command prompt, type `git clone <URL>` replacing `<URL>` with the one you copied.
4. **Enter the Repository Directory**: Change to the directory that was just created with `cd <repository-name>`.

## How to Create and Switch to a New Branch (Already did this for you guys)

1. **Open Terminal**: Navigate to your project directory.
2. **Create a New Branch**: Execute `git checkout -b <branch-name>`.
3. **Push the Branch to Remote**: Type `git push -u origin <branch-name>` to make it accessible to others.

## How to Make a Pull Request (PR)

1. **Commit Your Changes**: Ensure all your changes are committed locally with `git commit`.
2. **Push Your Branch**: Push the latest commits to GitHub using `git push`.
3. **Create the PR**: On GitHub, navigate to your repository and click 'New pull request'. Choose your branch and destination, then fill in the details.
4. **Submit the PR**: Click on 'Create pull request'.

## How to Resolve Merge Conflicts

1. **Identify the Conflicts**: GitHub will alert you in the pull request if there are conflicts.
2. **Pull the Latest Code**: In your local copy, ensure you have the latest code by running `git pull`.
3. **Open Conflict Files**: Manually edit the files marked with conflicts, and fix the issues.
4. **Mark as Resolved**: Use `git add <resolved-file>` to mark conflicts as resolved.
5. **Complete the Merge**: Finalize with `git commit` and `git push`.

## How to Review Pull Requests

1. **Go to the PR**: Access the 'Pull Requests' tab in the repository.
2. **Review Changes**: Click on 'Files changed' to see the modifications.
3. **Leave Feedback**: Use comment boxes to leave specific feedback or general comments.
4. **Approve or Request Changes**: Use the GitHub interface to approve the request or ask for further changes.

## How to Use Issues for Task Management

1. **Create an Issue**: Click 'New issue' in the 'Issues' tab of your repository, provide a title and description.
2. **Assign People and Labels**: Assign the issue to relevant team members and label it (e.g., bug, enhancement).
3. **Discuss in Comments**: Use the comment section of the issue for discussion and updates.

## Conclusion

This guide should help you get started with basic GitHub operations within an organization setting. Collaboration, communication, and correct use of tools are key to successful project management and development.
