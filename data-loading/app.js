d3.csv('data/foo.csv').then(res => {
    console.log('Local csv:', res);
});

const foo = d3.csv('data/foo.csv');
const asd = d3.json('data/asd.json');

Promise.all([foo, asd]).then(res => {
    // Array of arrays
    console.log('Multiple request:', res);

    // Concatenated array
    console.log('Multiple request concat:', [...res, ...res]);
});

const parseNA = string => (string === 'NA' ? undefined : string);

function type(d){
    return {
        x: parseNA(d.x),
        y: parseNA(d.y),
        z: +d.z
    }
}

const convertedData = d3.csv('data/foo.csv', type).then(res => {
    console.log('Converted: ', res);
});