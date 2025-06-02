# Train Stations

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Description

This is my first project using React and TypeScript. I built it to deepen my understanding of key concepts like state management, props, and basic component structure.

The app is designed for train station employees to manage passenger counts. By selecting a train from a drop-down menu, the user can view how many people are currently on board each train.

## What I Learned

- **Component communication via props and lifting state**  
  Shared data between components effectively by lifting state up to common ancestors.

- **Derived state to prevent updates to non-existing trains**  
  Implemented guarded submission logic to ensure safe and valid updates.

- **Separation of concerns**  
  Ensured that components update only their own state, avoiding unintended side effects by not modifying external data structures directly.

- **Conditional rendering**  
  Used conditional logic to reflect real-time user actions and provide responsive feedback.

## Usage

1. The app starts with **Train B1** pre-selected and ready to accept passengers.
2. Use the controls to increment the number of passengers boarding the train.
3. Click **Submit** to confirm that the passengers have boarded.
4. To view or update another train, select it from the drop-down list.
5. The current passenger count for the selected train will be displayed and updated in real time.

### Demo

![Train stations app demo](/screenshots/train-stations-demo.gif)

## Installation

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (latest stable version recommended)

Follow these steps to set up and run the project locally:

1. **Clone the repository**

```
git clone https://github.com/Vlassis-sec/train-stations.git

```

2. **Navigate into the project directory**

```
cd train-stations
```

3. **Install dependencies**

```
npm install
```

4. **Start the development server**

```
npm run dev
```

5. **Open the app in your browser**
   Once the server is running, open your browser and go to:

> http:/localhost:5173/

(The exact address and port will be shown in your terminal after running npm run dev.)
