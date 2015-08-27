$i =2;
$n =0;
{n < first}.while{
    $k = 2;
    $ispr = true;
    {k*k <= i}.while{
        {i%k == 0}.if{ispr = false};
        k++
    };
    {ispr}.if{n++};
    i++
};
i-1
