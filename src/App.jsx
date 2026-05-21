import { useState } from 'react'
import './App.css'
import Homework_7 from './Homework-7'
import Homework_8 from './Homework-8'
// import Homework_9 from './Homework-9'
import Homework_10 from './Homework-10'
import Homework_11 from './Homework_11'
import Homework_12 from './Homework_12'
import Homework_13 from './Homework_13'
import Homework_14 from './Homework_14'
import Homework_15 from './Homework_15'

const HOMEWORK_PAGES = [
  { id: 'homework7', label: 'Homework 7' },
  { id: 'homework8', label: 'Homework 8' },
  { id: 'homework9', label: 'Homework 9' },
  { id: 'homework10', label: 'Homework 10' },
  { id: 'homework11', label: 'Homework 11' },
  { id: 'homework12', label: 'Homework 12' },
  { id: 'homework13', label: 'Homework 13' },
  { id: 'homework14', label: 'Homework 14' },
  { id: 'homework15', label: 'Homework 15' },
]

const pageBoxStyle = {
  minHeight: '100vh',
  padding: '40px 24px',
  background: 'linear-gradient(180deg, #eef5ff 0%, #f9fbff 100%)',
  color: '#0f172a',
  fontFamily: 'Inter, system-ui, sans-serif',
}

const heroCardStyle = {
  maxWidth: '1080px',
  margin: '0 auto 28px',
  padding: '28px 30px',
  borderRadius: '28px',
  background: 'rgba(255,255,255,0.88)',
  boxShadow: '0 24px 72px rgba(15, 23, 42, 0.08)',
  border: '1px solid rgba(59, 130, 246, 0.12)',
}

const navStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '14px',
  marginBottom: '28px',
}

const buttonBase = {
  all: 'unset',
  cursor: 'pointer',
  padding: '14px 22px',
  borderRadius: '999px',
  border: '1px solid rgba(15, 23, 42, 0.1)',
  background: 'rgba(255, 255, 255, 0.85)',
  color: '#334155',
  fontWeight: 600,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.04)',
}

const buttonActive = {
  ...buttonBase,
  background: "linear-gradient(135deg, rgb(58, 56, 80) 0%, rgb(81, 100, 143) 100%)",
  color: '#ffffff',
  borderColor: 'transparent',
  boxShadow: '0 20px 48px rgba(59, 130, 246, 0.28)',
}

const contentStyle = {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '32px',
  borderRadius: '28px',
  background: '#ffffff',
  boxShadow: '0 24px 72px rgba(15, 23, 42, 0.08)',
  border: '1px solid rgba(148, 163, 184, 0.16)',
}

function App() {
  const [page, setPage] = useState('homework7')

  return (
    <main style={pageBoxStyle}>
      <section style={heroCardStyle}>
        <h1 style={{ margin: 0, color: '#4f46e5', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.82rem', fontWeight: 700 }}>
          Homework selector
        </h1>
      </section>

      <section style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <nav style={navStyle}>
          {HOMEWORK_PAGES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setPage(item.id)}
              style={page === item.id ? buttonActive : buttonBase}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div style={contentStyle}>
          {page === 'homework7' && <Homework_7 />}
          {page === 'homework8' && <Homework_8 />}
          {page === 'homework10' && <Homework_10 />}
          {page === 'homework11' && <Homework_11 />}
          {page === 'homework12' && <Homework_12 />}
          {page === 'homework13' && <Homework_13 />}
          {page === 'homework14' && <Homework_14 />}
          {page === 'homework15' && <Homework_15 />}
          {page === 'homework9' || page === 'homework12' || page === 'homework13' || page === 'homework15' ? (
            <div style={{ padding: '24px', color: '#334155' }}>
              <h2 style={{ marginTop: 0 }}>Homework {page.split('homework')[1]}</h2>
              <p>There is no content here yet, but the button is already ready to use.</p>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  )
}

export default App
