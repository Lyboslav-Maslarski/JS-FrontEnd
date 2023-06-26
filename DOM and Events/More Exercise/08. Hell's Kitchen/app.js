function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let bestRestaurantsContainer = document.getElementById('bestRestaurant')
      .getElementsByTagName('p')[0];
   let workersContainer = document.getElementById('workers')
      .getElementsByTagName('p')[0];
   let restaurants = [];


   function onClick() {
      let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);

      for (const line of input) {
         let [restaurantName, employeesInfo] = line.split(' - ');
         let restaurant = restaurants.find(r => r.restaurantName === restaurantName);
         let totalSalary = 0;
         let employeesArr = [];
         let employeesWithSalary = employeesInfo.split(', ');
         let restaurantExists = false;
         if (restaurant) {
            totalSalary = restaurant.totalSalary;
            employeesArr = restaurant.employeesArr;
            restaurantExists = true;
         }
         for (const employeeInfo of employeesWithSalary) {
            let [employeeName, salary] = employeeInfo.split(' ');
            salary = Number(salary);
            totalSalary += salary;
            let employee = { employeeName, salary };
            employeesArr.push(employee);
         }
         employeesArr.sort((f, s) => s.salary - f.salary);
         let avgSalary = totalSalary / employeesArr.length;

         if (!restaurantExists) {
            restaurant = { restaurantName, employeesArr, avgSalary, totalSalary };
            restaurants.push(restaurant);
         } else {
            restaurant.avgSalary = avgSalary;
            restaurant.totalSalary = totalSalary;
         }
      }

      restaurants.sort((f, s) => s.avgSalary - f.avgSalary);
      let bestRestaurant = restaurants[0];
      bestRestaurantsContainer.textContent = `Name: ${bestRestaurant.restaurantName} ` +
         `Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} ` +
         `Best Salary: ${bestRestaurant.employeesArr[0].salary.toFixed(2)}`;

      let employeesText = '';
      bestRestaurant.employeesArr.forEach(e => employeesText +=
         `Name: ${e.employeeName} With Salary: ${e.salary} `);

      workersContainer.textContent = employeesText;
   }
}