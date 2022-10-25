export default function CartItemHeader() {
  return (
    <thead>
      <tr>
        <th>
          <small>Product</small>
        </th>
        <th className="text-center">
          <small>Price</small>
        </th>
        <th className="text-center">
          <small>Qty</small>
        </th>
        <th className="text-center">
          <small>Subtotal</small>
        </th>
        <th className="text-center">
          <small>Action</small>
        </th>
      </tr>
    </thead>
  );
}
