1)To remove git 
rm C:\Users\Jai\Desktop\All-Webd\Webd-Net\Rest-Api-Using-Nodejs-MongoDB\*.git -Recurse -Force

2)To see all ignored files 
git ls-files --others -i --exclude-standard

3)Remove the node_modules folder from the git repository
git rm -r --cached node_modules

4) DO NOT MAKE .gitignore.txt FILE , YOU NEED TO MAKE .gitignore file without .txt extension ,
   use any of the editors like vs or sublime to do so
#############################################################################
app.js

// //Middlewares
// app.use("/post",()=>{
//     console.log("this is a middleware that will match")
// });

#############################################################################
In Router file on doing this without body parser , we get undefined as the output
console.log(req.body)             // we get undefined , why ? bcoz we need a special package to convert the req to 


#############################################################################
Postman Post Request
Dont send a request with data in body in text format , theres the option to send data 
in json format after entering json data in raw(body)

#############################################################################
JSON Data Format
{
    "title": "my first post",
    "description": "this is my description",      <- This comma at last is wrong
}

#############################################################################
If u are using await then u need to write async behind the funciton in which u have declared a command s await
E.g:
router.post('/',async (req, res) => {                 -----------------------
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();          ------------------------
        res.json(savedPost)
    }
    catch (err) {
        res.json({ message: err });
    }
});


///////////XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX///////////////////////////////
IN CASE OF ERRORS :
1) Make sure all IP's are white listed
2) Make sure you are using a username and password for that user that you created 
   and not the username and password of ur Mongo-Atlas Account 
3) 

///////////XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX///////////////////////////////

//// NICE SONGS
Thunder-Final
rockstar


