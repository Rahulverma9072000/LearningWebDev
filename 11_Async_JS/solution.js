/**
 * Implement a set of dummy functions which can mimic the behavior of the following functions : 
 * 1. download -> This function should mimic downloading of some content from a url 
 * 2. writeFile -> This function should mimic writing the downloaded content of a file . 
 * 3. upload -> This fucntion should mimic uploading the file to a server .
 * 
 * Now After you have implemented these functions , try to use them in a scenario where we first . 
 * download a file , then write it to a disk and then upload it to a server .
 */


// function workFile(){
//     setTimeout(() => {
//         //downloading files 
//         console.log("Downloading the file is done ");
//         setTimeout(() => {
//             //Writing the Files 
//             console.log("Writing the File is Done ");
//             setTimeout(() => {
//                 //Uploading the File 
//                 console.log("Uploading the File is Done !");
//             },4000)
//         },3000)
//     },2000)
// }
// workFile();

function download(url , callback){
    console.log("Downloading from ",url);
    setTimeout(()=>{
        console.log("Download is Done . ");
        let downloadedData = "Some Data";
        //This Callback function is send by the user 
        //Think like the map function we use where we send the array and the callback 
        // where user send the function and do the changes in the array and send back the array 
        callback?.(downloadedData); // Optional Chaining used for inversionOfControl 
    },3000);
}

function writeFile(data,fileName, callback){
    //fileName tells the name of the file to be created in which data will be written 
    console.log("Writing ",data," to file .");
    setTimeout(() => {
        console.log("Writing to File ",fileName," is Done ");
        let status = "Success";
        callback?.(status);
    },2000);
}

function upload(fileName,url, callback){
    //fileName tells the name of the file to be uploaded 
    console.log("Uploading File ",fileName," to ",url);
    setTimeout(() => {
        console.log("Upload is Done ");
        let uploadStatus = "Success";
        callback(uploadStatus);
    },3000);
}
//Implement of 3rd part where we want that download , write , update work sequentially 
function process(){
    download("https:www.exampl.com", (data) => {
        writeFile(data , "file.txt" , (status) =>{
            upload("file.txt" , "https://www.example1.com", (uploadStatus) => {
                console.log("Everything is DOne ");
            });
        });
    });
}

process();