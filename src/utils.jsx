export const getTotals = (cart) => {
  let totalItems = 0;
  let totalCost = 0;

  for (let cartItem of cart) {
    const [id, item] = cartItem;

    totalItems += item.amount;
    totalCost += item.price * item.amount;
  }

  return { totalItems, totalCost };
};
