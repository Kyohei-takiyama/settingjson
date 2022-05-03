console.log("Node path = " + process.argv[0]);
console.log("script file path = " + process.argv[1]);

const data: number[] = [];
for (var i = 2; i < process.argv.length; i++) {
  data.push(Number(process.argv[i]));
}

console.log("引数:", data);

const f = aggregate();

for (let item of data) {
  const res = f(item);
  console.log(res);
}

function aggregate(): (n: number) => [number, number, number, number, number] {
  let total = 0;
  let totalPrice = 0;
  let totalTax = 0;
  return (n: number): [number, number, number, number, number] => {
    total += n;
    let tax = Math.floor(n - n / 1.1);
    totalPrice += n - tax;
    totalTax += tax;
    return [n, tax, total, totalPrice, totalTax];
  };
}
