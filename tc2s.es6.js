
const basis = {

    's' :      1,
    'm' :     60,
    'h' :   3600,
    'd' :  86400,
    'w' : 604800

};

function extend_basis(extension, specials = []) {

	var new_basis = {};
	Object.keys(basis).map(k => new_basis[k] = basis[k] * extension);

	specials.map( ({key, val}) => new_basis[key] = val);

	return new_basis;

}

const usec = extend_basis(1000, [{key: 'u', val: 1, key: '', val: 1000}]);




/*
function to_ms(tc) {

    const rollup = (prev = 0, {num, frame}) => num*usec[frame] + prev;

    return tc.match(/\d+[whdmsu]?/g)
             .map(s => {
                 const num   = `${s.match(/\d+/)}`,
                       frame = s.substr(num.length);
                 return { num: parseInt(num, 10), frame };
             })
             .reduce( rollup, 0 );

}
*/

function to_ms(tc) {
	return to_tick(tc, 1000, [{key: 'u', val: 1, key: '', val: 1000}]);
}





function to_tick(tc, tick_speed, specials = []) {

    const code_chart = extend_basis(tick_speed, specials),
          rollup     = (prev = 0, {num, frame}) => (num * (code_chart[frame])) + prev;

    return tc.match(/\d+[whdmsu]?/g)
             .map(s => {
                 const num   = `${s.match(/\d+/)}`,
                       frame = s.substr(num.length);
                 return { num: parseInt(num, 10), frame };
             })
             .reduce( rollup, 0 );

}





export { usec, to_ms };
