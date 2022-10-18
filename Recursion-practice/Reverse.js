// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
    let helper = ""

    function strSlice(str) {
        let last = str.slice(-1)
        if (str.length === 0) return;
        helper += last
        strSlice(str.slice(0, -1))
    }
    strSlice(str)

    return helper
}

// solution
  function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// esome + w + a