//1
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    if(!response.ok){
        console.error('Error')
}
return response.json();
})

.then(data => console.log("Ok", data))
.catch(error => console.log("Error", error))

//2
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => {
    if(!response.ok) {
        console.error('Error')
    }
    return response.json();
})

.then(data => console.log('Ok', data))
.catch(error => console.log('Error', error));


//3
function getResourceData(resource) {
fetch(`https://jsonplaceholder.typicode.com/${resource}`)
.then(response => {
    if(!response.ok) {
        throw new Error(`Error ${resource}`)
    }
    return response.json();
})
.then(data => console.log(`Ok ${resource}:`, data))
.catch(error => console.log(`Error ${resource}`, error));
}
getResourceData('albums');
getResourceData('photos');
getResourceData('todos');
getResourceData('users');

