import { useState } from "react"
import { Oval } from "react-loader-spinner";
import SearchForm from "./components-hm14/SearchForm";
import ImageGallery from "./components-hm14/ImageGallery";
import Modal from "./components-hm14/Modal";
import axios from "axios"

const API_KEY = "53527826-b2df1196f2ee896f2c8fe4b14";
let page = 1

export default function Homework_14(params) {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <div>
      <header style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#343a40",
        color: "white",
        boxShadow: "8px 8px 6px rgba(7, 7, 7, 0.25)",
        marginBottom: "20px",
      }}>
        <SearchForm 
          onSearch={async (e) => {
            e.preventDefault()
            setLoading(true)
            page = 1
            const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}`)
            .then((response) => {
              setItems(response.data.hits.slice(0, 18)) // Limit to 18 items
              console.log(response.data.hits)
            })
            .catch((error) => {console.error("Error fetching data:", error); setError(error)})
            .finally(() => {
              setLoading(false)
              console.log("Search completed")
            })
          }}
          onInputChange={(e) => setQuery(e.target.value)}
          query={query}
        />
      </header>
      <main>
        <ImageGallery items={items} onItemClick={handleItemClick} />
        <Modal isOpen={Boolean(selectedItem)} onClose={closeModal}>
          {selectedItem && (
            <div style={{ textAlign: "center" }}>
              <img
                src={selectedItem.largeImageURL || selectedItem.webformatURL}
                alt={selectedItem.tags}
                style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", marginBottom: "16px" }}
              />
              <p style={{ margin: "0 0 8px", fontWeight: "600" }}>{selectedItem.tags}</p>
              <p style={{ margin: "0 0 8px", color: "#555" }}>By: {selectedItem.user}</p>
              <p style={{ margin: 0, color: "#555" }}>Likes: {selectedItem.likes} · Views: {selectedItem.views}</p>
            </div>
          )}
        </Modal>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Oval
              visible={true}
              height={80}
              width={80}
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {!loading && items.length === 0 && (
          <p style={{ textAlign: "center", color: "#666" }}>
            No images found. Please enter a search term and click "Search".
          </p>
        )}
        {!loading && items.length > 0 && (
          <button
            type="button"
            style={{ 
              padding: "10px 20px", 
              fontSize: "16px", 
              backgroundColor: "#007bff", 
              color: "white", 
              border: "none", 
              borderRadius: "4px", 
              cursor: "pointer", 
              margin: "20px auto", 
              display: "block",
              transition: "background-color 0.3s",
            }} 
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            onClick={async (e) => {
              e.preventDefault()
              setLoading(true)
              page += 1
              const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}`)
              .then((response) => {
                setItems(prevItems => [...prevItems, ...response.data.hits.slice(0, 18)]) 
                console.log(response.data.hits)
              })
              .catch((error) => {console.error("Error fetching data:", error)})
              .finally(() => {
                console.log("Load more completed")
                setLoading(false)
              })}}
          >
            Load More
          </button>
        )}
      </main>
    </div>
  )
}