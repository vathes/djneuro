let glob = require('glob');
let fs = require('fs');

glob('./markdowns/*.md', {}, function (err, files) {
    postNames = []
    for (item of files) {
        postNames.push(item.split('/')[2].split('.md')[0]);
    }
    for (let post of postNames) {
        fs.readFile('./postTemplate.js', (err, data) => {
            if (err) throw err;
            let content = data;
            fs.writeFile(`pages/post/${post}.js`, content, function (err) {
                if (err) throw err;
                console.log(post + '.js file built!');
            });
        })
    }

});


// for (let post of postNames) {
//     console.log(post);
//     fs.readFile('./postTemplate.js', (err, data) => {
//         if (err) throw err;
//         console.log('template file read - content is: ', data);
//         let content = data;
//         fs.writeFile(`pages/post/${post}.js`, content, function (err) {
//             if (err) throw err;
//             console.log(post, '.js file built!');
//         });
//     })
// }


