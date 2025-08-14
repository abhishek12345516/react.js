import React from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js register
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  // Sales Chart Data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [12000, 15000, 10000, 18000, 20000, 17000],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Sales Overview" },
    },
  };

  // Dummy Recent Sales Data
  const recentSales = [
    { id: 1, customer: "John Doe", product: "Laptop", amount: "$1,200", date: "2025-08-10" },
    { id: 2, customer: "Jane Smith", product: "Smartphone", amount: "$800", date: "2025-08-09" },
    { id: 3, customer: "Robert Brown", product: "Tablet", amount: "$600", date: "2025-08-08" },
    { id: 4, customer: "Emily Davis", product: "Headphones", amount: "$150", date: "2025-08-07" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-light text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold">Welcome to Sales App</h1>
          <p className="lead">
            Track your sales, analyze performance, and grow your business — all in one place.
          </p>
          <Button variant="light" size="lg" className="mt-3">
            Get Started
          </Button>
        </Container>
      </section>

      {/* Cards Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-4">
            <h2 className="fw-bold">Quick Stats</h2>
            <p className="text-muted">Overview of your sales performance</p>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm text-center p-3">
                <h5>Total Sales</h5>
                <h2 className="text-primary">$85,000</h2>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="shadow-sm text-center p-3">
                <h5>Orders</h5>
                <h2 className="text-success">1,250</h2>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="shadow-sm text-center p-3">
                <h5>Customers</h5>
                <h2 className="text-warning">530</h2>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Chart Section */}
      <section className="pb-5">
        <Container>
          <Card className="shadow-sm p-4">
            <Bar data={data} options={options} />
          </Card>
        </Container>
      </section>

      {/* Recent Sales Table */}
      <section className="pb-5">
        <Container>
          <h3 className="mb-4 fw-bold">Recent Sales</h3>
          <Card className="shadow-sm">
            <Table striped bordered hover responsive>
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentSales.map((sale) => (
                  <tr key={sale.id}>
                    <td>{sale.id}</td>
                    <td>{sale.customer}</td>
                    <td>{sale.product}</td>
                    <td>{sale.amount}</td>
                    <td>{sale.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Container>
      </section>
    </div>
  );
};

export default Home;
