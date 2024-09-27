# How to clone team repository and then switch and push to your own repository off of the main branch

:green_circle: STEP ONE:green_circle:

-In a new folder on your PC, wherever you organize your repositories clone the team repository by opening the terminal in the folder where you  want to store this in.

-Type:

git clone <https://github.com/ChairForce-1-0/Team-Website.git>

:green_circle: STEP TWO:green_circle:

a.) From now on you'll be using your respective branch instead of main. So to switch to your branch, in the same terminal you will type the following:

:red_circle: If Jaiden you type:

git checkout jaiden

:red_circle: If Nick you type:

git checkout nick

:red_circle: If Bryan you type:

git checkout bryan

b.) Then you're going to want to switch back to the main branch by typing:

git checkout main

c.) Then you need to pull from the main branch to pull the latest changes made on the main branch, type:

git pull origin main

d.) Then switch back to your branch, and then merge the main branch with your branch by typing:

git merge main

:green_circle: Step Three:green_circle:

-Anytime you want to push any of the work you've--you will push your work onto your own branch instead of the main. With the following command:

git push origin {your branch name}

:sparkles: Super Super Important:sparkles:

a.) Always ensure you're constantly pulling from the main branch by using the following command:

git pull origin main

This will ensure there are no conflicts in the work we've done and we are on the same page.

b.) If you have any questions please feel free to ask. Learning how to do this is super important in your career field so start getting comfortable with it.

:sparkles: This will be added into our repository as well in case you need to reference this again.:sparkles:
