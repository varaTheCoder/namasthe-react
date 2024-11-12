# Namasteh React

PS D:\Lucky_Learnings\Namasthe_React> git init
Initialized empty Git repository in D:/Lucky_Learnings/Namasthe_React/.git/
PS D:\Lucky_Learnings\Namasthe_React> git branch -M main
PS D:\Lucky_Learnings\Namasthe_React> git add .
PS D:\Lucky_Learnings\Namasthe_React> git commit -m "episode-01"

PS D:\Lucky_Learnings\Namasthe_React> git config --global user.email "varabtech08@gmail.com"


git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
You can generate a new SSH key on your local machine. After you generate the key, you can add the public key to your account on GitHub.com to enable authentication for Git operations over SSH.


Setup SSH in System
Configure SSH using below link
https://docs.github.com/en/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent 


once SSH key got created go to the .ssh file and copy paste that key in the git website > profile > ssh keys.

# git push origin main

install node js using .msi installer 

npm init




 npm install -D parcel 


 -D mean dev dependency



 npx parcel index.html to ignite the app.

 issue with above command resolved by using the olution below : 
 https://stackoverflow.com/questions/69590767/parcel-error-module-not-found-parcel-fs-search-fs-search-win32-x64-msvc-node

# Parcel
- parcel is a bundler 
- Dev Build 
- Local Server
- HMR = Hot module Replacement (Auto Refresh)
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification of file
- Bundling
- Compressing the files
- Consistent hashing
- Code splitting
- Differential bundeling - to support older broswer
-  
- Diagnostics
- Error handling
- to host app in https
 - Tree shaking - Remove un used code

 - Differet Dev and production bundles



 # npm install react
 # npm install react-dom




 - npx parcel build index.html
puts production ready code in dist folder 

# browsersList - to add supporting browser versions


