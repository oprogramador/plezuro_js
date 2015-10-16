$a = 21;
$b = first;
$output = '';
{a < b}.if({
    a++;
    output += 'A'
}).elif({a > b * 2}, {
    a *= b;
    output += 'B'
}).elif({a % b == 4}, {
    a *= b - 1;
    output += 'C'
}).else({
    a /= 3;
    output += 'D'
});
[a, output]
