const cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ];

function solution(cars) {
    // 👇 Este es el código que no funciona
    return cars.filter(function (car) {
      if (car.licensePlate) {
        return true;
      } else {
        return false;
      }
    });
  }


  
  
  console.log(solution(cars));

 
  