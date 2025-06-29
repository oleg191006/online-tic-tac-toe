# 🧠 Online Tic-Tac-Toe Game

This is a real-time, multiplayer Tic-Tac-Toe game built with modern web technologies and a clean architectural approach. The application allows players to create and join games, make moves in real-time, and experience seamless game state synchronization using message queues.

---

## 🚀 Tech Stack

| Layer          | Technology                                                                 |
|----------------|------------------------------------------------------------------------------|
| Frontend       | [Next.js](https://nextjs.org/), [React](https://react.dev/), [ShadCN UI](https://ui.shadcn.com/) |
| Backend        | [Prisma ORM](https://www.prisma.io/), [RabbitMQ](https://www.rabbitmq.com/) |
| Architecture   | [Feature-Sliced Design](https://feature-sliced.design/) (FSD)               |
| Transport      | AMQP (via RabbitMQ) for real-time messaging                                 |
| Styling        | Tailwind CSS (via ShadCN)                                                   |
| Auth           | Session-based authentication via cookies / JWT / secure headers             |
| Infrastructure | [Docker](https://www.docker.com/) for local PostgreSQL and RabbitMQ setup   |


---

## 📁 Project Structure

This project uses the **FSD (Feature-Sliced Design)** architecture to organize the code by business features rather than technical layers. This promotes modularity, testability, and scalability.


