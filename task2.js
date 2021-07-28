const qTeams = {
    aaiec: 400,
    aaiwc: 60,
    qai: 200,
    poc: 100,
    gtm: 50,
    hr: 10
};

var sorting = [];
for(qTeamsKey in qTeams) {
    sorting.push([qTeamsKey, qTeams[qTeamsKey]]);
}
// console.log(sorting);

sorting.sort(function(a,b) {
    return b[1] - a[1];
});
// console.log(sorting);

for(let i = 0; i < sorting.length; i++) {
    console.log(sorting[i][0]);
}