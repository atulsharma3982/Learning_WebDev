import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <div className="cards">
          <Card title="Card 1" description="Card 1 description"/>
          <Card title="Card 2" description="Card 2 description"/>
          <Card title="Card 3" description="Card 3 description"/>
          <Card title="Card 4" description="Card 4 description"/>
          <Card title="Card 5" description="Card 5 description"/>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
