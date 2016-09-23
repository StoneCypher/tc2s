
const usec = {
    'u' :         1,
    ''  :      1000,
    's' :      1000,
    'm' :     60000,
    'h' :   3600000,
    'd' :  86400000,
    'w' : 604800000
}

function tc2s(tc, options) {

    const rollup = (prev = 0, {num, frame}) => num*usec[frame] + prev;

    return tc.match(/\d+[whdmsu]?/g)
             .map(s => {
                 const num   = `${s.match(/\d+/)}`,
                       frame = s.substr(num.length);
                 return { num: parseInt(num, 10), frame };
             })
             .reduce( rollup, 0 );

}

console.log(tc2s('1m45s'));
console.log(tc2s('1m 45s'));

// export { tc2s };
