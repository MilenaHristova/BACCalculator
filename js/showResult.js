/**
 * Created by Milena on 02/11/2017.
 */
function showResult() {
    var query = window.location.search;
    var variables = query.split('?')[1];
    var v = variables.split('=');
    var result = decodeURIComponent(v[1]);


    document.getElementById('result1').value = result;
}