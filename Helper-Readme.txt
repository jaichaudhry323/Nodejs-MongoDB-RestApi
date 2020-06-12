1)To remove git 
rm C:\Users\Jai\Desktop\All-Webd\Webd-Net\Rest-Api-Using-Nodejs-MongoDB\*.git -Recurse -Force

2)To see all ignored files 
git ls-files --others -i --exclude-standard

3)Remove the node_modules folder from the git repository
git rm -r --cached node_modules

4) DO NOT MAKE .GITIGNORE.TXT FILE , YOU NEED TO MAKE .gitignore file without .txt extension ,
   use any of the editors like vs or sublime to do so
#############################################################################

app.js

// //Middlewares
// app.use("/post",()=>{
//     console.log("this is a middleware that will match")
// });

