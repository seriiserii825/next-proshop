import products from "./../../data/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ status: "success", data: products, count: products.length })
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
}
