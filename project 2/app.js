let data = [
    {
        name: 'Matero',
        age: '20'
        
    },
    {
        name: 'Mark',
        age: '15'

    },
    {
        name: 'Stanislav',
        age: '16'

    },
    {
        name: 'Darii',
        age: '17'

    },
    {
        name: 'Artsiom',
        age: '17'

    },
    {
        name: 'Oleksandr',
        age: '16',

    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
    )
})

info.innerHTML = details.join('\n');