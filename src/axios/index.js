import { v4 as uuid } from "uuid";

// 👉 the shape of the list of friends from API
const initialPizzaList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: "Michael",
    size: "really big",
    peperoni: false,
    sausage: true,
    peppers: false,
    everything: false,
    specialInstructions: "None",
  },
];

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({
      status: 200,
      success: true,
      data: initialPizzaList,
    });
  },
  post(
    url,
    { name, size, peperoni, sausage, peppers, everything, specialInstructors }
  ) {
    const newPizza = {
      id: uuid(),
      name,
      size,
      peperoni,
      sausage,
      peppers,
      everything,
      specialInstructors,
    };
    return Promise.resolve({ status: 200, success: true, data: newPizza });
  },
};
