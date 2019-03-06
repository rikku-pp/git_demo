# foundation

git is a distributed version control tool

## git vs github

tracking changes in files

like a filesystem on steroids
* a lot of changes
* including who made each change
* why they made it

just keeps track of code,
github is _a_ cloud service for collaboration and so forth

# GIT core concepts

_**snapshot**_ records of all (?) files at a given point in time

_**commit**_ - the act of creating a snapshot

### commands
---


`git add first_draft.rtf`

`git commit -am "first commit - adds draft"`

    Why do we first specify the file, and then snapshot all of them?

    Why is this common for intro?

`git log`

_**repository**_ - 

is what you create with `git init`, but you don't want to do it in your root-folder!

includes all files/subfolders

`.gitignore` makes sure files are excluded

### commands

`git init`

`git status`

--------
`git add .`

`git diff`

    Will only show changes since the file was staged (otherwise, use commmit-code)

--------


_**cloning**_ - copying a repo from a remote server

_**branches**_ 

compare with side stories, like chapters, that can be included when confident it is useful

commands
-------

`git checkout -b trying_things_out`

`git co master`

`git commmit`

`git revert --hard 34hj34hi`

`git merge trying_things_out`

## the terminal

recommend getting acquainted. Use this in the workshop, because it is hardcore, but more importantly _it is quicker_!

-----

# Github

is the biggest platform today (31M plus)

"software is eating the world ... we have to collaborate" 

### provisions to know about:

* **private** and **public** repos

#### nightmare scenario: 
* aws credentials stolen from public repo, used for blockchain mining

## concepts

_**pull request (PR)**_

_**central repository**_ - which is forked from

_**fork**_ - a repo that contributors create for themselves

## commands

`git remote -v` lists all

`git remote add team_member_name https://...`

    Team member name is arbitrary, choose whatever loved/hated <3 </3


## Get hands dirty

1. Fork central repo https://github.com/CoffeeAndCodeCommunity/git_demo.git
2. Add more remotes
3. `git fetch faraz`
4. `git pull faraz viaplay_listing`

    ALWAYS: try to push always when you leave the computer (not for coffee though?)

## protocols

* git flow (a central one)

### options

GitLab (self hosted)

Bitbucket (private, LFS and enhanced security)

GitKraken (fuzzy finder, in-app merging, in-app clone, add remotes, open PR)